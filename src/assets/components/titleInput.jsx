import { useState } from 'react';

export default function TitleInput({ setTitle }){
    const [localTitle, setLocalTitle] = useState({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
    });
    const [showForm, setshowForm] = useState(false);

    function changeTitle(e){
        const { name, value } = e.target;
        setLocalTitle(prevTitle => ({
            ...prevTitle,
            [name]: value
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        setTitle(localTitle);
    }
    return (
        <form className='flex flex-col bg-yellow-100 s:max-w-s lg:max-w-xs xl:max-w-s rounded-lg mx-auto py-4 px-12 mb-8' onSubmit={handleSubmit}>
            <label htmlFor="name" >Full Name:</label>
            <input 
             className='bg-gray-200 focus:bg-white  rounded-lg h-8 pl-2 ' 
             name="name"
             value={localTitle.name}
             onChange={changeTitle}
             placeholder='Alexander Graham'
            />
            <label htmlFor="email">Email: </label>
            <input 
             className='bg-gray-200 focus:bg-white rounded-lg h-8 pl-2'
             name="email"
             value={localTitle.email}
             onChange={changeTitle}
             placeholder='abc@email.com'
            /> 
            <label htmlFor="phone">Phone Number: </label>
            <input 
             className='bg-gray-200 focus:bg-white rounded-lg h-8 pl-2'
             name="phone"
             value={localTitle.phone}
             onChange={changeTitle}
             placeholder='+1 (123)-456-7890'
            />
            <label htmlFor="linkedin">LinkedIn Profile: </label>
            <input 
             className='bg-gray-200 focus:bg-white rounded-lg h-8 pl-2'
             name="linkedin"
             value={localTitle.linkedin}
             onChange={changeTitle}
             placeholder='https://www.linkedin.com/in/....'
            />
            <label htmlFor="github">GitHub Profile:</label>
            <input 
             className='bg-gray-200 rounded-lg focus:bg-white h-8 pl-2'
             name="github"
             value={localTitle.github}
             onChange={changeTitle}
             placeholder='https://github.com/....'
            />
            <button type="submit" className='mt-4 bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-900'>Submit</button>
        </form>
            
    )
}
