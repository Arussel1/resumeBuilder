import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from './assets/components/title.jsx'
import Education from './assets/components/education.jsx'
import Experience from './assets/components/experience.jsx'
import Project from './assets/components/project.jsx'
import Skills from './assets/components/skill.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="resume">
    <Title 
      name="Alexdander Napol" 
      email="noal@example.com" 
      phone="+1123456789" 
      linkedin="https:/napol.linkedin" 
      github="https:/napol.github" 
    />
    <div className="education">
      <p className="font-bold text-xl">EDUCATION</p>
      <hr className="h-0.5 bg-gray-800 mb-2" />
      <Education
        school="University X"
        location="Toronto, ON"
        degree="Bachelor of Computer Science"
        course="Object-Oriented Programming, Introduction to Software Enginneering"
        start="Jan 2023"
        end="May 2027"
      />
    </div>
    <div className="experience">
      <p className="font-bold text-xl">EXPERIENCE</p>
      <hr className="h-0.5 bg-gray-800 mb-2" />
      <Experience
        title="Software Engineering"
        companyName="Random Startup"
        start="Jan 2022"
        end="Jan 2023"
        description={[
          "Test 12",
          "Test 23"
        ]}
      />
    </div>
    <div className="projects">
      <p className="font-bold text-xl">PROJECTS</p>
      <hr className="h-0.5 bg-gray-800 mb-2" />
      <Project
        title="Resume Generator"
        language="HTML, CSS, Javascript, ReactJS, TailwindCSS"
        description={[
          "Test 1",
          "Test 2"
        ]}
      />
    </div>
    <div className="skills">
    <p className="font-bold text-xl">SKILLS</p>
    <hr className="h-0.5 bg-gray-800 mb-2" />
    <Skills 
    title="Languages"
    description="HTML,CSS, Javascript/Typescript, ReactJS, Vue, Node.js"
    />
    </div>
    </div>
   
  </React.StrictMode>,
)
