import Link from 'next/link';
import React from 'react'

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="w-48 h-48 rounded-full overflow-hidden">
                <img
                    className="object-cover w-full h-full"
                    src="https://avatars.githubusercontent.com/u/87599400?s=400&v=4"
                    alt="Profile"
                />
            </div>
            <div className="mt-4 text-center space-y-3">
                <h1 className="text-2xl font-bold">Hello, I am  Alok Verma</h1>
                <p className="mt-2 text-lg">
                    I am a Master of Computer Applications (MCA) student and a passionate web developer.
                </p>
                <p className="mt-2">
                    I have experience working with MERN stack (MongoDB, Express, React, Node.js) and also
                    building projects with React and Next.js.
                </p>
                <p className="mt-2">
                    I love to create interactive and user-friendly web applications that solve real-world
                    problems and provide value to users.
                </p>
                <p className="mt-2">Feel free to explore my portfolio to see some of my projects!</p>
                <Link
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                    href="https://github.com/alokVerma749"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    My GitHub Profile
                </Link>
            </div>
        </div>
    )
}

export default About;