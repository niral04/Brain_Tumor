'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import jsPDF from 'jspdf'

export default function ResultPage() {
  const [data, setData] = useState(null)
  const [image, setImage] = useState(null)

  useEffect(() => {
    const raw = sessionStorage.getItem('bt_result')
    const img = sessionStorage.getItem('bt_image')
    if (raw && img) {
      setData(JSON.parse(raw))
      setImage(img)
    }
  }, [])

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        No results found. Please upload a scan again.
      </div>
    )
  }

  // Extract values
  const label = data.prediction?.label || 'Unknown'
  const confidence = (data.prediction?.probability * 100).toFixed(2)

  // Explanations per tumor type
  const explanations = {
    glioma: {
      text: 'Gliomas are tumors that start in the brain from glial cells. They can range from slow-growing to aggressive forms. Doctors usually recommend further tests or treatments.',
      characteristics: [
        'Irregular in shape, not smooth or round',
        'Edges are blurry and fade into brain tissue',
        'Often blends with surrounding brain tissue instead of pushing it aside',
        'Shows mixed light and dark patches on MRI scans',
      ],
    },
    meningioma: {
      text: 'Meningiomas grow from the meninges (the protective layers of the brain). They are usually slow-growing and may press on the brain as they expand.',
      characteristics: [
        'Usually round or oval in shape',
        'Has sharp and clear borders',
        'Found on the outer surface of the brain, pressing inward',
        'Appears as a bright, solid lump on MRI scans',
      ],
    },
    pituitary: {
      text: 'Pituitary tumors develop in the pituitary gland at the base of the brain. Many are benign but they can affect vision or hormone balance.',
      characteristics: [
        'Located at the base of the brain in a small bony space (sella turcica)',
        'Looks like a small, round lump',
        'Has clear, sharp edges',
        'Sits in the middle of the head just below the brain',
      ],
    },
    notumor: {
      text: 'No tumor was detected in this scan. This is a good sign, but doctors may still recommend check-ups if symptoms continue.',
      characteristics: [],
    },
  }

  const lowerLabel = label.toLowerCase()
  const explanation = explanations[lowerLabel]?.text || 'This result requires specialist confirmation.'
  const characteristics = explanations[lowerLabel]?.characteristics || []

  // 🔹 Generate PDF Report
  const generatePDF = async () => {
    const doc = new jsPDF()

    // Title
    doc.setFontSize(18)
    doc.setTextColor(40, 40, 120)
    doc.text('Brain Tumor Detection Report', 105, 20, { align: 'center' })

    // Add image if available
    if (image) {
      const imgData = await fetch(image)
        .then((res) => res.blob())
        .then(
          (blob) =>
            new Promise((resolve) => {
              const reader = new FileReader()
              reader.onloadend = () => resolve(reader.result)
              reader.readAsDataURL(blob)
            })
        )
      doc.addImage(imgData, 'JPEG', 70, 30, 70, 70)
    }

    // Prediction
    doc.setFontSize(14)
    doc.setTextColor(0, 0, 0)
    doc.text(`Tumor Type: ${label}`, 20, 115)
    doc.text(`Confidence: ${confidence}%`, 20, 125)
    doc.text(`Impression: Findings are consistent with ${label}`, 20, 135)

    // Explanation
    doc.setFontSize(14)
    doc.setTextColor(40, 40, 120)
    doc.text('What this means:', 20, 150)
    doc.setFontSize(12)
    doc.setTextColor(0, 0, 0)
    doc.text(doc.splitTextToSize(explanation, 170), 20, 160)

    // Characteristics
    if (characteristics.length > 0) {
      doc.setFontSize(14)
      doc.setTextColor(40, 40, 120)
      doc.text('How was this identified?', 20, 190)

      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      let y = 200
      characteristics.forEach((c, i) => {
        doc.text(`• ${c}`, 25, y)
        y += 8
      })
    }

    doc.save('Brain_Tumor_Report.pdf')
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col">
     

      {/* Main Content */}
      <main className="flex-1 px-6 py-12 flex justify-center">
        <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-blue-900 mb-2">Scan Results</h2>
            <p className="text-gray-600 text-lg">
              Below is the analysis of the uploaded MRI scan using our AI-powered model.
            </p>
          </div>

          {/* Uploaded Image */}
          {image && (
            <div className="flex justify-center mb-8">
              <Image
                src={image}
                alt="Uploaded MRI"
                width={400}
                height={400}
                className="rounded-xl border-4 border-blue-100 shadow-lg"
              />
            </div>
          )}

          {/* Results Section */}
          <div className="space-y-6">
            {/* Prediction */}
            <div className="bg-blue-50 p-6 rounded-xl shadow-inner">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Prediction</h3>
              <p className="text-lg">
                <span className="font-bold">Tumor Type:</span>{' '}
                <span className="text-blue-700 font-semibold">{label}</span>
              </p>
              <p className="text-lg">
                <span className="font-bold">Confidence:</span>{' '}
                <span className="text-gray-800">{confidence}%</span>
              </p>
              <p className="italic text-gray-700 mt-3">
                “Findings are consistent with {label}.”
              </p>
            </div>

            {/* Explanation */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">What this means</h3>
              <p className="text-gray-700 text-base leading-relaxed">{explanation}</p>
            </div>

            {/* Visual Characteristics */}
            {characteristics.length > 0 && (
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  How was this identified?
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  {characteristics.map((c, i) => (
                    <li key={i} className="text-base">{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-6 justify-center mt-10">
            <button
              onClick={generatePDF}
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg text-lg shadow-md transition"
            >
              Download Report
            </button>
            <Link
              href="/new-scan"
              className="border border-gray-300 bg-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-gray-50 transition"
            >
              Detect Again
            </Link>
          </div>
        </div>
      </main>

      
    </section>
  )
}
