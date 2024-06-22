export default function Skill({title, description}){
    return (
        <li className="flex list-disc">
        <p className="font-bold mr-2">{title}:</p>
        <p>{description}</p>
    </li>
    );
    
}