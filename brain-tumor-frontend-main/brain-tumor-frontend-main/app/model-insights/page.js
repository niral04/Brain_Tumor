'use client'

import Image from 'next/image'

export default function ModelInsightsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col">
      

      {/* Main Content */}
      <main className="flex-1 px-6 py-12 max-w-6xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Model Insights</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Here are the key performance metrics of our deep learning model. 
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-700 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-medium text-gray-600 mb-2">Test Accuracy</h3>
            <p className="text-4xl font-bold text-green-600">98.25%</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-700 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-medium text-gray-600 mb-2">Test Loss</h3>
            <p className="text-4xl font-bold text-red-600">0.0727</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">Loss Curve</h3>
            <Image
              src="/loss.png"
              alt="Loss Curve"
              width={600}
              height={400}
              className="rounded-lg border"
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">Accuracy Curve</h3>
            <Image
              src="/accuracy.png"
              alt="Accuracy Curve"
              width={600}
              height={400}
              className="rounded-lg border"
            />
          </div>
        </div>

        {/* Confusion Matrix */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-12 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">Confusion Matrix</h3>
          <Image
            src="/confusion.png"
            alt="Confusion Matrix"
            width={800}
            height={500}
            className="rounded-lg border mx-auto"
          />
        </div>

        {/* Classification Report */}
<div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
  <h3 className="text-2xl font-semibold text-blue-800 mb-6 text-center">Classification Report</h3>

  {/* Class-based Metrics */}
  <h4 className="text-lg font-semibold text-red-600 mb-3">Class-wise Metrics</h4>
  <div className="overflow-x-auto mb-8">
    <table className="w-full text-sm border-collapse border border-gray-200 text-center">
      <thead>
        <tr className="bg-blue-100">
          <th className="border px-4 py-2">Class</th>
          <th className="border px-4 py-2">Precision</th>
          <th className="border px-4 py-2">Recall</th>
          <th className="border px-4 py-2">F1-Score</th>
          <th className="border px-4 py-2">Support</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-blue-50">
          <td className="border px-4 py-2">Glioma</td>
          <td className="border px-4 py-2">0.98</td>
          <td className="border px-4 py-2">0.98</td>
          <td className="border px-4 py-2">0.98</td>
          <td className="border px-4 py-2">300</td>
        </tr>
        <tr className="hover:bg-blue-50">
          <td className="border px-4 py-2">Meningioma</td>
          <td className="border px-4 py-2">0.98</td>
          <td className="border px-4 py-2">0.96</td>
          <td className="border px-4 py-2">0.97</td>
          <td className="border px-4 py-2">306</td>
        </tr>
        <tr className="hover:bg-blue-50">
          <td className="border px-4 py-2">No Tumor</td>
          <td className="border px-4 py-2">0.99</td>
          <td className="border px-4 py-2">0.99</td>
          <td className="border px-4 py-2">0.99</td>
          <td className="border px-4 py-2">405</td>
        </tr>
        <tr className="hover:bg-blue-50">
          <td className="border px-4 py-2">Pituitary</td>
          <td className="border px-4 py-2">0.99</td>
          <td className="border px-4 py-2">0.99</td>
          <td className="border px-4 py-2">0.99</td>
          <td className="border px-4 py-2">300</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Overall Accuracy */}
  <h4 className="text-lg font-semibold text-orange-600 mb-3">Overall Accuracy</h4>
  <div className="overflow-x-auto mb-8">
    <table className="w-full text-sm border-collapse border border-gray-200 text-center">
      <thead>
        <tr className="bg-blue-100">
          <th className="border px-4 py-2">Metric</th>
          <th className="border px-4 py-2">Score</th>
          <th className="border px-4 py-2">Total Samples</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-orange-50 font-semibold">
          <td className="border px-4 py-2">Accuracy</td>
          <td className="border px-4 py-2">0.98</td>
          <td className="border px-4 py-2">1311</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Macro & Weighted Averages */}
  <h4 className="text-lg font-semibold text-purple-600 mb-3">Averages</h4>
  <div className="overflow-x-auto">
    <table className="w-full text-sm border-collapse border border-gray-200 text-center">
      <thead>
        <tr className="bg-blue-100">
          <th className="border px-4 py-2">Metric</th>
          <th className="border px-4 py-2">Precision</th>
          <th className="border px-4 py-2">Recall</th>
          <th className="border px-4 py-2">F1-Score</th>
          <th className="border px-4 py-2">Support</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-purple-50 font-medium">
          <td className="border px-4 py-2">Macro Avg</td>
          <td className="border px-4 py-2">0.98</td>
          <td className="border px-4 py-2">0.98</td>
          <td className="border px-4 py-2">0.98</td>
          <td className="border px-4 py-2">1311</td>
        </tr>
        <tr className="bg-purple-50 font-medium">
          <td className="border px-4 py-2">Weighted Avg</td>
          <td className="border px-4 py-2">0.98</td>
          <td className="border px-4 py-2">0.98</td>
          <td className="border px-4 py-2">0.98</td>
          <td className="border px-4 py-2">1311</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


      </main>

     
    </section>
  )
}
