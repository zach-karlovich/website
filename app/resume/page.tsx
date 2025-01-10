'use client'

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-nord6">Resume</h1>
        <a 
          href="/resume/KARLOVICH-2024-UVA.pdf" 
          target="_blank"
          className="btn btn-primary"
          download
        >
          Download PDF
        </a>
      </div>
      
      {/* Experience Section */}
      <div className="content-card mb-6">
        <h2 className="text-2xl font-bold text-nord8 mb-4">Professional Experience</h2>
        
        <div className="bg-nord2 p-6 rounded-lg shadow-lg mb-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-nord6">Lead, Instrumentation Engineer</h3>
              <p className="text-nord4 italic">Naval Surface Warfare Center, Dahlgren Division</p>
            </div>
            <span className="text-nord4 text-sm">September 2022 - Present</span>
          </div>
          <div className="text-nord4 mt-4">
            <p>Lead instrumentation and analysis operations at the Shock Physics Facility, developing Python-based computer vision solutions and predictive models for velocity measurements in materials testing using light gas guns. Implemented automated workflows and version control practices to enhance testing efficiency.</p>
          </div>
        </div>

        <div className="bg-nord2 p-6 rounded-lg shadow-lg mb-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-nord6">Lead, Advanced Instrumentation and Analysis Group</h3>
              <p className="text-nord4 italic">Naval Surface Warfare Center, Dahlgren Division</p>
            </div>
            <span className="text-nord4 text-sm">June 2018 - September 2022</span>
          </div>
          <div className="text-nord4 mt-4">
            <p>Led a seven-engineer team supporting DoD projects and established the High Energy Laser Measurement Support Laboratory, while developing automated solutions for processing large climatic datasets and contributing to DoD test method standards.</p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="content-card mb-6">
        <h2 className="text-2xl font-bold text-nord8 mb-4">Technical Skills</h2>
        <div className="bg-nord2 p-6 rounded-lg shadow-lg">
          <div className="space-y-4">
            <div className="border-b border-nord3 pb-3">
              <h3 className="text-nord6 font-bold mb-2">Programming & Version Control</h3>
              <p className="text-nord4">Python, Git</p>
            </div>
            <div className="border-b border-nord3 pb-3">
              <h3 className="text-nord6 font-bold mb-2">Data Science</h3>
              <p className="text-nord4">Pandas, NumPy, Matplotlib, Scikit-learn, Seaborn</p>
            </div>
            <div className="border-b border-nord3 pb-3">
              <h3 className="text-nord6 font-bold mb-2">Systems</h3>
              <p className="text-nord4">Linux, Raspberry Pi, Arduino, Ansible, Docker</p>
            </div>
            <div>
              <h3 className="text-nord6 font-bold mb-2">Documentation</h3>
              <p className="text-nord4">LaTeX</p>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="content-card mb-6">
        <h2 className="text-2xl font-bold text-nord8 mb-4">Education</h2>
        <div className="bg-nord2 p-6 rounded-lg shadow-lg space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-nord6">University of Virginia</h3>
              <p className="text-nord4">M.S. Data Science</p>
              <p className="text-nord4 text-sm italic">Expected Fall 2026</p>
            </div>
          </div>
          <div className="flex justify-between items-start pt-4 border-t border-nord3">
            <div>
              <h3 className="text-xl font-bold text-nord6">Virginia Polytechnic Institute and State University</h3>
              <p className="text-nord4">B.S. Biological Sciences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
  
  