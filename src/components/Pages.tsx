import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects, setFilters, setSearchQuery, filterProjects } from '../redux/projectSlice';
import { RootState, AppDispatch } from '../redux/store';
import { UserProvider, useUser } from '../contexts/UserContexts';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import browse from '../assets/Page.png';
import profile from '../assets/profile-removebg-preview.png';
import image from '../assets/Group 1.png';
import FilterSection from './Filters';
import '../styles/Pages.css';
import '../styles/FilterSection.css';
import { IoSearch } from "react-icons/io5";
import { Button } from './UI/button';
import { Avatar, AvatarImage, AvatarFallback } from './UI/Avatar';
import { FaRegCompass } from 'react-icons/fa6';

const ProjectList: React.FC = () => {
    const { user } = useUser();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { projects, filteredProjects, filters, loading, error, searchQuery } = useSelector((state: RootState) => state.projects);

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    useEffect(() => {
        dispatch(filterProjects());
    }, [filters, projects, searchQuery, dispatch]);

    const handleProjectClick = (id: number) => {
        navigate(`/project/${id}`);
    };

    const handleFilterChange = (newFilters: typeof filters) => {
        dispatch(setFilters(newFilters));
    };

    const handleSearchQueryChange = (query: string) => {
        dispatch(setSearchQuery(query.toLowerCase()));
    };

    const profileClicked = () => {
        navigate('/profile');
    };

    const logoClicked = () => {
        navigate('/dashboard');
    };

    if (loading) {
        return (
            <div>
                <header className="bg-NavBg text-white fixed w-full z-50">
                    <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-20">
                        <div className="flex items-center space-x-4 h-20">
                            <img src={image} alt="Logo" className="h-12 w-50 ml-10" onClick={logoClicked} />
                        </div>
                        <nav className="flex items-center space-x-6 text-lg md:text-2xl">
                            <a href="/browse" className="mx-auto">
                                <div className='flex justify-center items-center px-10'>
                                    <FaRegCompass className="h-12 w-30 mr-2" />
                                    <p>Browse</p>
                                </div>
                            </a>
                            <Button className="bg-pink-600 hover:bg-pink-700 py-2 px-2 rounded-lg">Post a Project</Button>
                            <div className="flex items-center space-x-2">
                                <Avatar>
                                    <AvatarImage src={profile} onClick={profileClicked} />
                                    <AvatarFallback></AvatarFallback>
                                </Avatar>
                                <div className="text-sm">
                                    <p>@{user?.firstName}</p>
                                    <p>₹0.00 INR</p>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="bg-NavBg px-4 md:px-24 mx-auto">
                        <h2 className='text-2xl md:text-3xl mb-3 ml-10  '>Browse</h2>
                        <div className="relative py-8 ml-10">
                            <IoSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-700 text-2xl" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={e => handleSearchQueryChange(e.target.value.toLowerCase())}
                                className="w-full md:w-4/5 pl-12 pr-4 py-3 rounded-full text-black text-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>
                    </div>
                </header>
                <div className="project-list-container  flex flex-col md:flex-row px-4 md:px-20">
                    <FilterSection onFilterChange={handleFilterChange} />
                    <div className="project-list ml-0 md:ml-6 flex-1">
                        <h1 className="text-5xl md:text-3xl mb-6 mt-6">Project List</h1>
                        <ul>
                            {Array(5)
                                .fill(0)
                                .map((_, index) => (
                                    <li key={index} className="project-item">
                                        <Skeleton height={20} width="60%" style={{ margin: '10px', background: '#f9f9f9' }} />
                                        <Skeleton count={4} style={{ margin: '6px' }} />
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <header className="bg-NavBg text-white fixed w-full z-50">
                <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-20">
                    <div className="flex items-center space-x-4 h-20">
                        <img src={image} alt="Logo" className="h-12 w-50 ml-10" onClick={logoClicked} />
                    </div>
                    <nav className="flex items-center space-x-6 text-lg md:text-2xl ">
                        <a href="/browse" className="mx-auto">
                            <div className='flex justify-center items-center px-10'>
                                <FaRegCompass className="h-12 w-30 mr-2" />
                                <p>Browse</p>
                            </div>
                        </a>
                        <Button className="bg-pink-600 hover:bg-pink-700 py-2 px-2 rounded-lg">Post a Project</Button>
                        <div className="flex items-center space-x-2">
                            <Avatar>
                                <AvatarImage src={profile} onClick={profileClicked} />
                                <AvatarFallback></AvatarFallback>
                            </Avatar>
                            <div className="text-sm">
                                <p>@{user?.firstName}</p>
                                <p>₹0.00 INR</p>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="bg-NavBg px-4 md:px-24 mx-auto">
                    <h2 className='text-2xl md:text-3xl mb-3 ml-10'>Browse</h2>
                    <div className="relative py-8 ml-10">
                        <IoSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-700 text-2xl" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e) => handleSearchQueryChange(e.target.value)}
                            className="w-full md:w-4/5 pl-12 pr-4 py-3 rounded-full text-black text-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                </div>
            </header>
            <div className="project-list-container  flex flex-col md:flex-row px-4 md:px-20 ">
                <FilterSection onFilterChange={handleFilterChange} />

                <div className="project-list ml-0 md:ml-6 flex-1">
                    <h1 className="text-5xl md:text-3xl mb-6 mt-6">Project List</h1>
                    <ul>
                        {filteredProjects.map(project => (
                            <li key={project.id} className="project-item cursor-pointer mb-6 p-4 bg-white rounded-lg shadow-md" onClick={() => handleProjectClick(project.id)}>
                                <h2 className="text-xl font-bold">{project.title}</h2>
                                <p className="text-gray-700">{project.description}</p>
                                <p className="budget text-lime-400">Budget: ${project.budget}</p>
                                <p className="category">Category: {project.category}</p>
                                {project.hourlyRate && <p className="text-lime-400">Hourly Rate: ${project.hourlyRate}</p>}
                                <p className="text-gray-600">Skills: {project.skills.join(', ')}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ProjectList;
