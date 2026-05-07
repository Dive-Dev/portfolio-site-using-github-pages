export default function Resume() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

  return (
    <div className="min-h-screen px-4 pt-24 pb-12 bg-white sm:px-6 md:px-12">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          My Resume <span className="text-blue-600">📄</span>
        </h1>

        <p className="mt-3 text-sm text-gray-600 md:text-base">
          View or download my professional resume
        </p>
      </div>

      {/* PDF Viewer */}
      <div className="max-w-4xl mx-auto mt-10 overflow-hidden border border-gray-200 shadow-sm rounded-xl">

        <iframe
          src={resumeUrl}
          title="Resume"
          className="w-full h-[500px] sm:h-[600px] md:h-[700px]"
        />

        {/* Fallback */}
        <div className="p-4 text-sm text-center text-gray-500 border-t">
          If the resume is not visible,&nbsp;
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            open it in a new tab
          </a>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row">

        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 font-medium text-center text-blue-600 border border-blue-200 rounded-xl hover:border-blue-500"
        >
          View Fullscreen
        </a>

        <a
          href={resumeUrl}
          download
          className="px-6 py-3 font-semibold text-center text-white bg-blue-600 rounded-xl hover:bg-blue-700"
        >
          Download Resume
        </a>

      </div>

    </div>
  )
}