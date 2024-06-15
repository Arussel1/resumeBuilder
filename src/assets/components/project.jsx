export default function Project({  title, language, description, }) {
    const descriptionItems = description.map((element, index) => (
        <li className="list-disc ml-4" key={index}>{element}</li>
    ));

    return (
        <div className="mb-4">
            <div className="flex">
                <p className="font-bold mr-1">{title.toUpperCase()}</p>
                <p className="italic">| {language}</p>
            </div>
            <ul>
                {descriptionItems}
            </ul>
        </div>
    );
}