'use client'

import Image from 'next/image'

export default function TumorDetailsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col">
      

      {/* Main Content */}
      <main className="flex-1 px-6 py-12 max-w-6xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">What is a Brain Tumor?</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            A <strong>brain tumor</strong> is an abnormal growth of cells inside or around the brain. 
            Some tumors grow slowly and are not cancerous (benign), while others can grow quickly and spread 
            (malignant). Detecting brain tumors early is important to help doctors decide the right treatment.
          </p>
        </div>

        {/* Tumor Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Glioma */}
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
            <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/glioma.jpg"
                alt="Glioma MRI"
                width={400}
                height={250}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Glioma</h3>
            <p className="text-gray-600 mb-10">
              <strong>Gliomas</strong> start in the brain from cells called glial cells, which support the neurons. 
              They can range from slow-growing to aggressive and fast-spreading types.
            </p>
            <h4 className="font-semibold text-blue-900 mb-2">Visual Characteristics:</h4>
            <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
              <li>Irregular in shape, not smooth or round</li>
              <li>Edges are blurry and fade into brain tissue</li>
              <li>Often blends with the surrounding brain instead of pushing it</li>
              <li>Shows mixed light and dark areas on MRI scans</li>
            </ul>
          </div>

          {/* Meningioma */}
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
            <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/meningioma.jpg"
                alt="Meningioma MRI"
                width={400}
                height={250}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Meningioma</h3>
            <p className="text-gray-600 mb-10">
              <strong>Meningiomas</strong> grow from the meninges, the protective layers covering the brain. 
              They usually grow slowly and may press on the brain instead of spreading inside it.
            </p>
            <h4 className="font-semibold text-blue-900 mb-2">Visual Characteristics:</h4>
            <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
              <li>Usually round or oval in shape</li>
              <li>Has sharp and clear borders</li>
              <li>Found on the outer surface of the brain, pressing inward</li>
              <li>Appears as a bright, solid lump on scans</li>
            </ul>
          </div>

          {/* Pituitary */}
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
            <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/pituitary.jpg"
                alt="Pituitary MRI"
                width={400}
                height={250}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Pituitary Tumor</h3>
            <p className="text-gray-600 mb-10">
              <strong>Pituitary tumors</strong> develop in the pituitary gland, a small gland located 
              at the bottom of the brain that controls hormones. Many are benign but can affect vision 
              or hormone balance.
            </p>
            <h4 className="font-semibold text-blue-900 mb-2">Visual Characteristics:</h4>
            <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
              <li>Located at the base of the brain in a small bony space (sella turcica)</li>
              <li>Looks like a small, round lump</li>
              <li>Has clear, sharp edges</li>
              <li>Sits in the middle of the head just below the brain</li>
            </ul>
          </div>
        </div>
      </main>

     
    </section>
  )
}
