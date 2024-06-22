import { useState } from 'react';

export default function ProjectInput({ setProject, projectArray }) {
    const [key, setKey] = useState(0);
    const initialState = {
        title: "",
        languages: "",
        description: [""],
        id: key
    };
    const [localProject, setLocalProject] = useState(initialState);

    function changeProject(e, index) {
        const { name, value } = e.target;
        if (name === 'description') {
            const newDescription = [...localProject.description];
            newDescription[index] = value;
            setLocalProject(localProject => ({
                ...localProject,
                description: newDescription
            }));
        } else {
            setLocalProject(localProject => ({
                ...localProject,
                [name]: value
            }));
        }
    }

    function addDescription() {
        setLocalProject(localProject => ({
            ...localProject,
            description: [...localProject.description, ""]
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setProject([...projectArray, localProject]);
        setKey(key + 1);
        setLocalProject(initialState);
    }

    return (
        <form id='projectInput' className='flex flex-col bg-yellow-100 s:max-w-s lg:max-w-xs xl:max-w-s rounded-lg mx-auto py-4 px-12 mb-8' onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
                className='bg-gray-200 focus:bg-white rounded-lg h-8 pl-2'
                name="title"
                value={localProject.title}
                onChange={changeProject}
                placeholder='App ABC'
            />
            <label htmlFor="languages">Languages:</label>
            <input
                className='bg-gray-200 rounded-lg focus:bg-white h-8 pl-2'
                name="languages"
                value={localProject.languages}
                onChange={changeProject}
                placeholder='Java, Python, etc.'
            />
            <label htmlFor="description">Description: </label>
            {localProject.description.map((desc, index) => (
                <div key={index} className='mb-4 flex items-center'>
                    <input
                        className='bg-gray-200 focus:bg-white rounded-lg h-8 pl-2 flex-grow'
                        name="description"
                        value={desc}
                        onChange={(e) => changeProject(e, index)}
                        placeholder={`Description ${index + 1}`}
                    />
                </div>
            ))}
            <button type="button" onClick={addDescription} className='mt-2 bg-green-500 text-white rounded-lg py-2 px-4 hover:bg-green-900'>Add Description</button>
            <button type="submit" className='mt-4 bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-900'>Submit</button>
        </form>
    )
}