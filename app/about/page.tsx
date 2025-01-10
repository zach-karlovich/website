'use client'

import { FaLinux, FaRaspberryPi, FaGithub, FaDocker, FaBrain, FaRobot } from 'react-icons/fa'
import { SiHomeassistant, SiPlex, SiArduino, SiAnsible, SiPython, SiPytorch, SiScikitlearn, SiOpenai } from 'react-icons/si'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-nord6 mb-6">About Me</h1>
      
      {/* Introduction Section */}
      <div className="content-card mb-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:flex-grow space-y-4">
            <p className="text-nord4">
              Hello! I'm Zach Karlovich, a Virginia native with a passion for solving complex problems and exploring the 
              outdoors.
            </p>
            <p className="text-nord4">
              My journey has led me from studying biology at Virginia Tech to pursuing a Master's in Data Science at UVA, 
              while building a career that combines engineering with data science.
            </p>
          </div>
          <div className="md:w-72 flex-shrink-0">
            <div className="relative">
              <img
                src="/images/z-k-f.jpg"
                alt="Zach and family on a boat"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                style={{
                  border: '3px solid var(--nord8)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Professional Section */}
      <div className="content-card mb-6">
        <h2 className="text-2xl font-bold text-nord8 mb-4">Professional</h2>
        <div className="space-y-4">
          <p className="text-nord4">
            At the Naval Surface Warfare Center Dahlgren Division, I lead critical instrumentation and testing operations 
            at the Shock Physics Facility.
          </p>
          <p className="text-nord4">
            Here, I develop innovative solutions like computer vision systems for velocity measurements and machine learning 
            models for predictive analysis. My work spans from high-speed video analysis to materials testing with light gas guns.
          </p>
        </div>
      </div>

      {/* Beyond Work Section */}
      <div className="content-card mb-6">
        <h2 className="text-2xl font-bold text-nord8 mb-4">Beyond Work</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:flex-grow space-y-4">
            <p className="text-nord4">
              When I'm not in the lab or coding, you'll find me pursuing my passion for endurance sports. I'm an avid 
              runner and cyclist, regularly tracking my activities on {' '}
              <a 
                href="https://www.strava.com/athletes/51932129" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-nord8 hover:text-nord9 underline"
              >
                Strava
              </a>.
            </p>
            <p className="text-nord4">
              Whether it's hitting the trails with Finn or exploring new cycling routes around Fredericksburg, 
              I believe in maintaining an active lifestyle that complements my technical work.
            </p>
          </div>
          <div className="md:w-72 flex-shrink-0">
            <div className="relative">
              <img
                src="/images/z-bike.jpg"
                alt="John on a mountain bike trail"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                style={{
                  border: '3px solid var(--nord8)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hobbies Section */}
      <div className="content-card mb-6">
        <h2 className="text-2xl font-bold text-nord8 mb-4">Hobbies</h2>
        <div className="space-y-4 mb-6">
          <p className="text-nord4">
            I'm an enthusiastic tinkerer of electronics and home automation systems. My home network is a playground 
            where I run various self-hosted services including Home Assistant for automation and Plex for media management.
          </p>
          <p className="text-nord4">
            As a dedicated Linux user and advocate for Free and Open Source Software (FOSS), I enjoy the freedom and 
            flexibility of managing my own systems and contributing to the open-source community.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <div className="flex flex-col items-center">
            <FaLinux size={32} className="text-nord4 hover:text-nord8 transition-colors duration-200" />
            <span className="text-nord4 text-sm mt-1">Linux</span>
          </div>
          <div className="flex flex-col items-center">
            <FaRaspberryPi size={32} className="text-nord4 hover:text-nord8 transition-colors duration-200" />
            <span className="text-nord4 text-sm mt-1">Raspberry Pi</span>
          </div>
          <div className="flex flex-col items-center">
            <SiHomeassistant size={32} className="text-nord4 hover:text-nord8 transition-colors duration-200" />
            <span className="text-nord4 text-sm mt-1">Home Assistant</span>
          </div>
          <div className="flex flex-col items-center">
            <SiPlex size={32} className="text-nord4 hover:text-nord8 transition-colors duration-200" />
            <span className="text-nord4 text-sm mt-1">Plex</span>
          </div>
          <div className="flex flex-col items-center">
            <SiArduino size={32} className="text-nord4 hover:text-nord8 transition-colors duration-200" />
            <span className="text-nord4 text-sm mt-1">Arduino</span>
          </div>
          <div className="flex flex-col items-center">
            <FaDocker size={32} className="text-nord4 hover:text-nord8 transition-colors duration-200" />
            <span className="text-nord4 text-sm mt-1">Docker</span>
          </div>
          <div className="flex flex-col items-center">
            <SiAnsible size={32} className="text-nord4 hover:text-nord8 transition-colors duration-200" />
            <span className="text-nord4 text-sm mt-1">Ansible</span>
          </div>
          <div className="flex flex-col items-center">
            <FaGithub size={32} className="text-nord4 hover:text-nord8 transition-colors duration-200" />
            <span className="text-nord4 text-sm mt-1">Git</span>
          </div>
        </div>
      </div>

      {/* Interests Section */}
      <div className="content-card">
        <h2 className="text-2xl font-bold text-nord8 mb-4">Interests</h2>
        <div className="space-y-4 mb-6">
          <p className="text-nord4">
            I'm deeply fascinated by the transformative potential of Artificial Intelligence and Machine Learning.
          </p>
          <p className="text-nord4">
            This website itself is a testament to the power of these technologies - built using AI-assisted development 
            tools. I'm excited to explore how AI can enhance our problem-solving capabilities and create more efficient 
            solutions in both professional and personal projects.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <div className="flex flex-col items-center">
            <FaBrain size={32} className="text-nord4 hover:text-nord8 transition-colors duration-200" />
            <span className="text-nord4 text-sm mt-1">Machine Learning</span>
          </div>
          <div className="flex flex-col items-center">
            <FaRobot size={32} className="text-nord4 hover:text-nord8 transition-colors duration-200" />
            <span className="text-nord4 text-sm mt-1">AI</span>
          </div>
          <div className="flex flex-col items-center">
            <SiPython size={32} className="text-nord4 hover:text-nord8 transition-colors duration-200" />
            <span className="text-nord4 text-sm mt-1">Python</span>
          </div>
          <div className="flex flex-col items-center">
            <SiPytorch size={32} className="text-nord4 hover:text-nord8 transition-colors duration-200" />
            <span className="text-nord4 text-sm mt-1">PyTorch</span>
          </div>
          <div className="flex flex-col items-center">
            <SiScikitlearn size={32} className="text-nord4 hover:text-nord8 transition-colors duration-200" />
            <span className="text-nord4 text-sm mt-1">Scikit-learn</span>
          </div>
          <div className="flex flex-col items-center">
            <SiOpenai size={32} className="text-nord4 hover:text-nord8 transition-colors duration-200" />
            <span className="text-nord4 text-sm mt-1">OpenAI</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
  
  