import { useState } from 'react';

export default function EducationInput({setEducation, educationArray}){
    const [key,setKey] = useState(0);
    const initialState = {
        school: "",
        location: "",
        degree: "",
        course: "",
        start: "",
        end: "",
        id: key
    };
    const [localEducation, setLocalEducation] = useState({initialState});

    function changeEducation(e){
        const { name, value } = e.target;
        setLocalEducation(localEducation => ({
            ...localEducation,
            [name]: value
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        setEducation([...educationArray,localEducation])
        setKey(key+1);
        setLocalEducation(initialState);

    }
    return (
        <form id='educationInput' className='flex flex-col bg-yellow-100 s:max-w-s lg:max-w-xs xl:max-w-s rounded-lg mx-auto py-4 px-12 mb-8' onSubmit={handleSubmit}>
            <label htmlFor="school" >School:</label>
            <input 
             className='bg-gray-200 focus:bg-white  rounded-lg h-8 pl-2' 
             name="school"
             value={localEducation.school}
             onChange={changeEducation}
             placeholder='XYZ University'
            />
            <label htmlFor="location">Location: </label>
            <input 
             className='bg-gray-200 focus:bg-white rounded-lg h-8 pl-2'
             name="location"
             value={localEducation.location}
             onChange={changeEducation}
             placeholder='City, Country'
            /> 
            <label htmlFor="degree">Degree: </label>
            <input 
             className='bg-gray-200 focus:bg-white rounded-lg h-8 pl-2'
             name="degree"
             value={localEducation.degree}
             onChange={changeEducation}
             placeholder='Bachelor of ABC'
            />
            <label htmlFor="course">Revelant Course: </label>
            <input 
             className='bg-gray-200 focus:bg-white rounded-lg h-8 pl-2'
             name="course"
             value={localEducation.course}
             onChange={changeEducation}
             placeholder='Intro to ABC, etc'
            />
            <label htmlFor="start">Start Date:</label>
            <input 
             className='bg-gray-200 rounded-lg focus:bg-white h-8 pl-2'
             name="start"
             value={localEducation.start}
             onChange={changeEducation}
             placeholder='Jan 2100'
            />
            <label htmlFor="end">End Date:</label>
            <input 
             className='bg-gray-200 rounded-lg focus:bg-white h-8 pl-2'
             name="end"
             value={localEducation.end}
             onChange={changeEducation}
             placeholder='May 2200'
            />
            <button type="submit" className='mt-4 bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-900'>Submit</button>
        </form>
            
    )
}
