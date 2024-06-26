import { useState } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Title from './assets/components/title.jsx'
import Education from './assets/components/education.jsx'
import Experience from './assets/components/experience.jsx'
import Project from './assets/components/project.jsx'
import Skill from './assets/components/skill.jsx'
import TitleInput from './assets/components/titleInput.jsx'
import EducationInput from "./assets/components/educationInput.jsx";
import ExperienceInput from "./assets/components/experienceInput.jsx";
import ProjectInput from "./assets/components/projectInput.jsx";
import SkillInput from "./assets/components/skillsInput.jsx";
export default function App(){
  async function handleDownload() {
      const input = document.querySelector('.resume');
      const canvas = await html2canvas(input, {
          scale: 2,
          useCORS: true,
          logging: true
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgProps = pdf.getImageProperties(imgData);
      const imgWidth = pdfWidth;
      const imgHeight = (imgProps.height * pdfWidth ) / imgProps.width ;

      const yPos = (pdfHeight - imgHeight) / 2;

      pdf.addImage(imgData, 'PNG', 0, yPos, imgWidth, imgHeight);
      pdf.save("CV.pdf");
    }
    const [title, setTitle] = useState({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
    });

    // Education input handling and display
    const [educations,setEducations] = useState([]);
    const educationDisplay = educations.map(education =>{
       return <Education
        school= {education.school}
        location= {education.location}
        degree= {education.degree}
        course= {education.course}
        start= {education.start}
        end= {education.end}
        key = {education.key}
      />
    });

    // Exp input handling and display
    const [experiences,setExperiences] = useState([]);
    const experienceDisplay = experiences.map(experience =>{
       return <Experience
        companyName= {experience.companyName}
        title= {experience.title}
        description= {experience.description}
        start= {experience.start}
        end= {experience.end}
        key = {experience.key}
      />
    });
     // Project input handling and display
     const [projects,setProjects] = useState([]);
     const projectDisplay = projects.map(project =>{
        return <Project
         title= {project.title}
         languages= {project.languages}
         description= {project.description}
         key = {project.key}
       />
     });
     // Skill input handling and display
     const [skills,setSkills] = useState([]);
     const skillDisplay = skills.map(skill =>{
        return <Skill
         title= {skill.title}
         description= {skill.description}
         key = {skill.key}
       />
     });

    return (
        <div className="lg:flex">
        <div className="lg:mx-4 lg:my-10 md:mx-24 md:my-4 block">
        <button onClick={handleDownload} className='my-4 bg-red-500 text-white rounded-lg py-2 px-4 hover:bg-red-900'>Download CV</button>
        <TitleInput setTitle={setTitle}></TitleInput>
        <EducationInput setEducation={setEducations} educationArray={educations}></EducationInput>
        <ExperienceInput setExperience={setExperiences} experienceArray={experiences}></ExperienceInput>
        <ProjectInput setProject={setProjects} projectArray={projects}></ProjectInput>
        <SkillInput setSkill={setSkills} skillArray={skills}></SkillInput>
      </div>
      <div className="resume m-4 px-4">
      <Title 
       name={title.name} 
       email={title.email} 
       phone={title.phone} 
       linkedin={title.linkedin} 
      />
      <div className="education">
        <p className="font-bold text-xl mb-2">EDUCATION</p>
        <hr className="h-0.5 bg-gray-800 mb-2" />
            {educationDisplay}
      </div>
      <div className="experience">
        <p className="font-bold text-xl mb-2">EXPERIENCE</p>
        <hr className="h-0.5 bg-gray-800 mb-2" />
            {experienceDisplay}
      </div>
      <div className="projects">
        <p className="font-bold text-xl mb-2">PROJECTS</p>
        <hr className="h-0.5 bg-gray-800 mb-2" />
            {projectDisplay}
      </div>
      <div className="skills">
      <p className="font-bold text-xl mb-2">SKILLS</p>
      <hr className="h-0.5 bg-gray-800 mb-2" /> 
            {skillDisplay}
      </div>
      </div>
        </div>
    )

        
}