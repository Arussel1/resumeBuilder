import { useState } from 'react';

export default function ExperienceInput({ setExperience, experienceArray }) {
    const [key, setKey] = useState(0);
    const initialState = {
        companyName: "",
        title: "",
        description: [""],
        start: "",
        end: "",
        id: key
    };
    const [localExperience, setLocalExperience] = useState(initialState);

    function changeExperience(e, index) {
        const { name, value } = e.target;
        if (name === 'description') {
            const newDescription = [...localExperience.description];
            newDescription[index] = value;
            setLocalExperience(localExperience => ({
                ...localExperience,
                description: newDescription
            }));
        } else {
            setLocalExperience(localExperience => ({
                ...localExperience,
                [name]: value
            }));
        }
    }

    function addDescription() {
        setLocalExperience(localExperience => ({
            ...localExperience,
            description: [...localExperience.description, ""]
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setExperience([...experienceArray, localExperience]);
        setKey(key + 1);
        setLocalExperience(initialState);
    }

    return (
        <form id='experienceInput' className='flex flex-col bg-yellow-100 s:max-w-s lg:max-w-xs xl:max-w-s rounded-lg mx-auto py-4 px-12 mb-8' onSubmit={handleSubmit}>
            <label htmlFor="companyName">Company Name:</label>
            <input
                className='bg-gray-200 focus:bg-white rounded-lg h-8 pl-2'
                name="companyName"
                value={localExperience.companyName}
                onChange={changeExperience}
                placeholder='Company A'
            />
            <label htmlFor="title">Title: </label>
            <input
                className='bg-gray-200 focus:bg-white rounded-lg h-8 pl-2'
                name="title"
                value={localExperience.title}
                onChange={changeExperience}
                placeholder='Software Engineer'
            />
            <label htmlFor="description">Description: </label>
            {localExperience.description.map((desc, index) => (
                <div key={index} className='mb-4 flex items-center'>
                    <input
                        className='bg-gray-200 focus:bg-white rounded-lg h-8 pl-2 flex-grow'
                        name="description"
                        value={desc}
                        onChange={(e) => changeExperience(e, index)}
                        placeholder={`Description ${index + 1}`}
                    />
                </div>
            ))}
            <button type="button" onClick={addDescription} className='mt-2 bg-green-500 text-white rounded-lg py-2 px-4 hover:bg-green-900'>Add Description</button>
            <label htmlFor="start">Start Date:</label>
            <input
                className='bg-gray-200 rounded-lg focus:bg-white h-8 pl-2'
                name="start"
                value={localExperience.start}
                onChange={changeExperience}
                placeholder='Jan 2100'
            />
            <label htmlFor="end">End Date:</label>
            <input
                className='bg-gray-200 rounded-lg focus:bg-white h-8 pl-2'
                name="end"
                value={localExperience.end}
                onChange={changeExperience}
                placeholder='May 2200'
            />
            <button type="submit" className='mt-4 bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-900'>Submit</button>
        </form>
    )
}