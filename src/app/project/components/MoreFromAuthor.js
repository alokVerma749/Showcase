import Card from '@/app/components/Card'

const MoreFromAuthor = ({ author, projects }) => {
    return (
        <div>
            <h1 className='font-bold text-3xl text-center'>More from {author}</h1>
            <div className="container flex flex-wrap flex-row">
                {projects.map((project, index) => <Card key={project._id} data={project} />)}
            </div>
        </div>
    )
}

export default MoreFromAuthor;