"use client"
import { useState } from "react";
import useAuthorise from "@/app/auth/hooks/useAuthorise"
import axios from "axios";
import { useSelector } from "react-redux";

const AddNewProject = () => {
    const [project, setProject] = useState({
        title: "",
        description: "",
        tags: [],
        liveLink: "",
        sourceLink: "",
        thumbnail: null
    })
    const user = useSelector(store => store.user.user);
    useAuthorise();
    const handleSubmit = (event) => {
        event.preventDefault();
        // setProject({
        //     title: "",
        //     description: "",
        //     tags: [],
        //     thumbnail: "",
        //     liveLink: "",
        //     sourceLink: ""
        // })
        submitProject()
    };

    const submitProject = async () => {
        await axios.post('/api/users/project/addproject', {
            project,
            email: user.email,
            author: user.name
        });
    }
    return (
        <form
            className="w-full lg:w-1/2 bg-gray-200 p-4 absolute right-0 top-0"
            onSubmit={handleSubmit}
        >
            <h1 className="p-3 text-3xl font-medium">Add New Project</h1>
            <div className="my-4">
                <label htmlFor="title" className="block font-medium mb-1">
                    Title:
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={project.title}
                    onChange={(e) => setProject({
                        ...project,
                        title: e.target.value
                    })}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block font-medium mb-1">
                    Description:
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={project.description}
                    onChange={(e) => setProject({
                        ...project,
                        description: e.target.value
                    })}
                    className="w-full border border-gray-300 rounded px-3 py-2 resize-none"
                    rows="5"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="tags" className="block font-medium mb-1">
                    Tags:
                </label>
                <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={project.tags}
                    onChange={(e) => setProject({
                        ...project,
                        tags: e.target.value
                    })}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                />
            </div>

            <div className="my-4">
                <label htmlFor="liveLink" className="block font-medium mb-1">
                    Live Link:
                </label>
                <input
                    type="text"
                    id="liveLink"
                    name="liveLink"
                    value={project.liveLink}
                    onChange={(e) => setProject({
                        ...project,
                        liveLink: e.target.value
                    })}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                />
            </div>

            <div className="my-4">
                <label htmlFor="sourceLink" className="block font-medium mb-1">
                    Source Link:
                </label>
                <input
                    type="text"
                    id="sourceLink"
                    name="sourceLink"
                    value={project.sourceLink}
                    onChange={(e) => setProject({
                        ...project,
                        sourceLink: e.target.value
                    })}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="thumbnail" className="block font-medium mb-1">
                    Upload Thumbnail:
                </label>
                <input
                    type="file"
                    id="thumbnail"
                    name="thumbnail"
                    accept="image/*"
                    onChange={(e) => {
                        const selectedFile = e.target.files[0];
                        if (selectedFile) {
                            const reader = new FileReader();
                            reader.onload = () => {
                                setProject({
                                    ...project,
                                    thumbnail: reader.result // This is the base64-encoded data
                                });
                            };
                            reader.readAsDataURL(selectedFile);
                        }
                    }}
                    className="border border-gray-300 rounded px-3 py-2"
                />
            </div>

            <div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded"
                >
                    Add
                </button>
            </div>
        </form>
    );
};

export default AddNewProject;
