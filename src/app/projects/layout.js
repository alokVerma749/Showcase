import Card from './components/card'

const Layout = ({ children }) => {
    return (
        <>
            <HeroSection />
            {children}
        </>
    )
}


const HeroSection = () => {
    const projects = [
        {
            name: 'Project 1',
            description: 'Description of Project 1 goes here.',
            image: 'https://mediaprotc.pe/wp-content/uploads/2021/06/javascript-banner.jpg',
            liveLink: 'https://example.com/project2',
            githubLink: 'https://github.com/user/project2',
        },
        {
            name: 'Project 2',
            description: 'Description of Project 2 goes here.',
            image: 'https://mediaprotc.pe/wp-content/uploads/2021/06/javascript-banner.jpg',
            liveLink: 'https://example.com/project2',
            githubLink: 'https://github.com/user/project2',
        },
        // Add more project objects as needed
    ];
    return (
        <div className="bg-gray-200 min-h-screen m-1">
            <header
                className="bg-gray-800 text-white text-center py-4 h-96"
                style={{
                    backgroundImage: "url('https://mediaprotc.pe/wp-content/uploads/2021/06/javascript-banner.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
            </header>

            <main className="container mx-auto py-8">
                <h1 className="text-3xl font-semibold bottom-0 text-center block mb-5">Projects Page</h1>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                    {projects.map((project, index) => (
                        <Card project={project} key={index} />
                    ))}
                </section>
            </main>
        </div>
    )
}

export default Layout