import { useState } from 'react';

export default function SkillInput({ setSkill, skillArray }) {
    const [key, setKey] = useState(0);
    const initialState = {
        title: "",
        description: "",
        id: key
    };
    const [localSkill, setLocalSKill] = useState(initialState);

    function changeSkill(e, index) {
        const { name, value } = e.target;
        setLocalSKill(localSkill => ({
                ...localSkill,
                [name]: value
            }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        setSkill([...skillArray, localSkill]);
        setKey(key + 1);
        setLocalSKill(initialState);
    }

    return (
        <form id='skillInput' className='flex flex-col bg-yellow-100 s:max-w-s lg:max-w-xs xl:max-w-s rounded-lg mx-auto py-4 px-12 mb-8' onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
                className='bg-gray-200 focus:bg-white rounded-lg h-8 pl-2'
                name="title"
                value={localSkill.title}
                onChange={changeSkill}
                placeholder='Languages'
            />
            <label htmlFor="description">Description:</label>
            <input
                className='bg-gray-200 rounded-lg focus:bg-white h-8 pl-2'
                name="description"
                value={localSkill.description}
                onChange={changeSkill}
                placeholder='Java, Python, etc.'
            />
            <button type="submit" className='mt-4 bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-900'>Submit</button>
        </form>
    )
}