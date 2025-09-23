'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <section className="min-h-screen bg-white flex flex-col">
  

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-5xl font-extrabold text-blue-900 leading-tight mb-6">
              AI-Powered Brain Tumor Detection System
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Upload MRI scans securely and receive fast, reliable tumor classification. 
              Built for medical professionals and patients to assist in early diagnosis 
              with confidence.
            </p>
            <Link
              href="/new-scan"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg text-lg shadow-md transition"
            >
              Start New Scan
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="/brain-mri-home.jpg"
              alt="Brain MRI Illustration"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </main>


      {/* About Section */}
<section className="relative h-[500px] bg-gray-900 text-white">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/doctors.jpg"
      alt="Doctors Team"
      fill
      className="object-cover object-top"
    />
    {/* Black Overlay */}
    <div className="absolute inset-0 bg-black/80" />
  </div>

  {/* Text Content */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
    <h3 className="text-4xl font-bold mb-6">Why Brain Tumor Detection Matters</h3>
    <p className="text-lg leading-relaxed max-w-3xl">
      Early and accurate brain tumor detection can save lives. Our AI system 
      leverages deep learning to classify tumor types such as <strong>Glioma</strong>, 
      <strong> Meningioma</strong>, <strong>Pituitary</strong>, and detect when there 
      is <strong>No Tumor</strong>. This tool is designed to assist doctors in 
      making informed decisions, not replace them.
    </p>
  </div>
</section>



      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-12">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
              <Image src="/cloud-upload.svg" alt="Upload MRI" width={60} height={60} className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-blue-800 mb-2">Upload MRI Scan</h4>
              <p className="text-gray-600">Easily upload brain MRI scans through our secure interface.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
              <Image src="/ai.svg" alt="AI Analysis" width={60} height={60} className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-blue-800 mb-2">AI-Powered Analysis</h4>
              <p className="text-gray-600">Our deep learning model classifies tumors with high accuracy.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
              <Image src="/cloud-download.svg" alt="Report" width={60} height={60} className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-blue-800 mb-2">Download Report</h4>
              <p className="text-gray-600">Receive a detailed, easy-to-understand medical report instantly.</p>
            </div>
          </div>
        </div>
      </section>

    
    </section>
  )
}
