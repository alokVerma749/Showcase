import React from 'react'

const Card = () => {
    const project = {
        image: "isi",
        name: "Hello",
        description: "dojcnd",
        liveLink: "eokcd",
        githubLink: "sochdj"
    }
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img
                src={project.image}
                alt={project.name}
                className="w-full rounded-t-lg"
            />
            <h2 className="text-xl font-semibold my-2">{project.name}</h2>
            <p className="text-gray-600">{project.description}</p>

            <div className="mt-4 flex justify-around flex-row">
                <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:animate-pulse bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mr-2"
                >
                    Live Link
                </a>
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md"
                >
                    Github
                </a>
            </div>
        </div>
    )
}

export default Card