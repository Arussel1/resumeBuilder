export default function Education({school, location, degree, course, start, end, id }){
    return (
        <div className=" mb-4" id={id}>
            <div className="flex">
                <p className="font-bold mr-1">{school}</p>
                <p className="italic">| {degree}</p>
                <p className=" mr-2 ml-auto italic">{start}-{end}</p>
            </div>
            <p className="italic">{location}</p>
            <p>Revelant course: {course}</p>
        </div>
    );
}