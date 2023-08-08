"use client"

import { IMAGE_API } from '@/utils/constants';
import { mockData } from '@/utils/mockdata';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import MoreFromAuthor from '../components/MoreFromAuthor';

const Project = (request) => {
    const [data, setData] = useState({
        id: null,
        title: '',
        author: '',
        description: '',
        tags: [],
        likeCount: null,
        commentCount: null,
        thumbnailid: ''
    })
    const [projects, setProjects] = useState([]);
    const { id } = request.params;
    // create api to fetch specific projects
    useEffect(() => {
        fetchProjectDetails()
        const user = mockData.find(data => data.id == id)
        setData(user);
        // id DB is configured
        // const projects = mockData.find(data => data.id == id)
        // setProjects(projects);
        // for trial only
        setProjects(mockData);
    }, [])

    const fetchProjectDetails = async () => {
        const res = await axios.get('')
    }
    return (
        (data.id) && (
            <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-800">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={IMAGE_API + data.thumbnailid} alt="thumbnail" className="w-full h-60 sm:h-96 bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{data.title}</a>
                            <p className="text-xs text-gray-600">By
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">{data.author}</a>
                            </p>
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
                <MoreFromAuthor author={data.author} projects={projects} />
            </div >
        ))
}

export default Project