export default function Experience({ companyName, title, description, start, end }) {
    const descriptionItems = description.map((element, index) => (
        <li className="list-disc ml-4" key={index}>{element}</li>
    ));

    return (
        <div className="mb-4">
            <div className="flex">
                <p className="font-bold mr-1">{title.toUpperCase()}</p>
                <p className="italic">| {companyName}</p>
                <p className="mr-2 ml-auto italic">{start}-{end}</p>
            </div>
            <ul>
                {descriptionItems}
            </ul>
        </div>
    );
}