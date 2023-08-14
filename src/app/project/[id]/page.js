"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import MoreFromAuthor from '../components/MoreFromAuthor';
import axios from 'axios';
import Image from 'next/image';

const Project = (request) => {
    const [data, setData] = useState({
        _id: null,
        title: '',
        author: '',
        description: '',
        tags: [],
        likeCount: null,
        commentCount: null,
        thumbnail: ''
    })
    const [projects, setProjects] = useState([]);
    const { id } = request.params;
    useEffect(() => {
        fetchProjectDetails();
    }, [])

    useEffect(() => {
        fetchMoreProjects();
    }, [data])

    const fetchProjectDetails = async () => {
        try {
            const response = await axios.get(`/api/users/project/${id}`);
            setData(response.data.res)
        } catch (error) {
            console.log(error)
        }
    }
    const fetchMoreProjects = async () => {
        try {
            const userEmail = data.userEmail
            const res = await axios.get(`/api/users/project/morefromauthor/${userEmail}`)
            setProjects(res.data.response)
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        (data._id) ? <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-800">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <Image
                    src={"http://res.cloudinary.com/dv1fxqrsi/image/upload/v1691949903/" + data.thumbnail}
                    alt="thumbnail"
                    className="w-full h-60 sm:h-96 bg-gray-500"
                    width={1024}
                    height={1096}
                />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
                    <div className="space-y-2">
                        <p className="inline-block text-2xl font-semibold sm:text-3xl">{data.title}</p>
                        <div className="text-xs text-gray-600">By
                            <p className="text-xs hover:underline"> {data.author}</p>
                        </div>
                    </div>
                    <div className="text-gray-800">
                        <p>{data.description}</p>
                    </div>
                    <div className="links flex flex-row justify-center border border-red-500 space-x-5 p-3">
                        <Link href={data?.liveLink} target="_blank" className='text-green-500 font-bold'>{"<live/>"}</Link>
                        <Link href={data?.sourceLink} target="_blank" className='text-green-500 font-bold'>{"<source/>"}</Link>
                    </div>
                </div>
            </div>
            {
                projects.length > 0 ? <MoreFromAuthor author={data.author} projects={projects} /> : <p className='text-center text-xl m-3'>No more Data from Author Account</p>
            }
        </div > : <h1 className='text-center text-xl m-3'>Loading...</h1>
    )
}

export default Project