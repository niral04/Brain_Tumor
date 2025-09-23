'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function NewScanPage() {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleUpload = (e) => {
    const selectedFile = e.target.files[0]
    setFile(selectedFile)
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile))
    }
  }

  const handleSubmit = async () => {
    if (!file) {
      alert('Please upload an MRI image before detecting.')
      return
    }

    setLoading(true)

    try {
      const formData = new FormData()
      formData.append('file', file)

      // 🔹 Call FastAPI backend
      const res = await fetch('http://127.0.0.1:8888/infer', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) {
        throw new Error('Failed to get prediction from backend')
      }

      const data = await res.json()

      // 🔹 Save results to sessionStorage
      sessionStorage.setItem('bt_result', JSON.stringify(data))
      sessionStorage.setItem('bt_image', preview)

      // 🔹 Redirect to result page
      router.push('/result')
    } catch (err) {
      console.error(err)
      alert('Something went wrong while analyzing the scan.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg-new-scan.jpg" // 👈 replace with your background image in /public
          alt="MRI Background"
          fill
          className="object-cover object-center"
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-10 border border-gray-200">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">Upload MRI Scan</h2>
            <p className="text-gray-600 text-lg">
              Securely upload your brain MRI image and let our AI model analyze it for tumor detection.
            </p>
          </div>

          {/* Upload Box */}
          <div className="mb-6">
            <label
              htmlFor="fileUpload"
              className={`block w-full rounded-xl border-2 border-dashed p-10 cursor-pointer text-center transition 
                ${
                  file
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-blue-300 bg-gradient-to-br from-blue-50 to-white hover:from-blue-100'
                }
              `}
            >
              <div className="flex flex-col items-center justify-center space-y-4">
                <p className="text-blue-900 font-semibold text-lg">
                  {file ? 'File Selected!' : 'Drag & Drop or Click to Upload MRI'}
                </p>
                <p className="text-sm text-gray-500">Accepted formats: JPG, PNG</p>
                {file && <p className="text-sm text-gray-700 mt-2">{file.name}</p>}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="hidden"
                id="fileUpload"
              />
            </label>
          </div>

          {/* Image Preview */}
          {preview && (
            <div className="flex justify-center mb-6">
              <Image
                src={preview}
                alt="MRI Preview"
                width={300}
                height={300}
                className="rounded-xl border-2 border-blue-200 shadow-md"
              />
            </div>
          )}

          {/* Detect Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full py-3 rounded-lg text-lg font-medium shadow-md transition ${
              loading
                ? 'bg-gray-400 cursor-not-allowed text-white'
                : 'bg-blue-700 hover:bg-blue-800 text-white'
            }`}
          >
            {loading ? 'Analyzing...' : 'Detect Tumor'}
          </button>
        </div>
      </main>

     
    </section>
  )
}
