"use client"
import React, { useState } from "react";

const tagSuggestions = ["Web", "Mobile", "AI", "Design", "Game", "Data Science"];

const AddNewProject = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [thumbnail, setThumbnail] = useState(null);
    const [tagInput, setTagInput] = useState("");
    const [tagSuggestionsVisible, setTagSuggestionsVisible] = useState(false);

    const handleTagInputChange = (event) => {
        const inputValue = event.target.value;
        setTagInput(inputValue);
        setTagSuggestionsVisible(inputValue.trim().length > 0);
    };

    const handleTagSuggestionClick = (tag) => {
        if (!tags.includes(tag)) {
            setTags((prevTags) => [...prevTags, tag]);
        }
        setTagInput("");
        setTagSuggestionsVisible(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process the form data here, e.g., send it to the server
        const newProject = {
            title,
            description,
            tags,
            thumbnail,
        };
        console.log(newProject);
        // Clear the form fields after submission
        setTitle("");
        setDescription("");
        setTags([]);
        setThumbnail(null);
    };

    return (
        <form
            className="w-full lg:w-1/2 bg-gray-200 p-4 absolute right-0"
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                    value={tagInput}
                    onChange={handleTagInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                />
                {tagSuggestionsVisible && (
                    <ul className="mt-2 border border-gray-300 rounded">
                        {tagSuggestions.map((tag) => (
                            <li
                                key={tag}
                                onClick={() => handleTagSuggestionClick(tag)}
                                className="cursor-pointer p-2 hover:bg-gray-100"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                )}
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
                    onChange={(e) => setThumbnail(e.target.files[0])}
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
