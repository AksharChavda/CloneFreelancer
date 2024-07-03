import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/ProjectDetails.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Button } from './UI/button';
import { Avatar, AvatarImage, AvatarFallback } from './UI/Avatar';
import image from '../assets/Group 1.png'
import profile from '../assets/profile-removebg-preview.png'
import { FaRegCompass } from "react-icons/fa6";
import Flag from 'react-world-flags';

interface Project {
    id: number;
    title: string;
    description: string;
    explanation: string;
    budget: number;
    category: string;
    type: string;
    hourlyRate?: number;
    skills: string[];
}

interface client {
    id: number;
    name: string;
    location: string;
}

interface CountryCodes {
    dial_code: string;
    name: string;
    code: string
}

const ProjectDetail: React.FC = () => {
    const Navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [client, setClient] = useState<client | null>(null);
    const [CountryCodes, setCountryCodes] = useState<CountryCodes | null>(null);

    useEffect(() => {
        if (!id) {
            setError('Invalid project ID');
            setLoading(false);
            return;
        }

        // Fetch client data
        fetch(`/client.json`)
            .then(res => res.json())
            .then(data => {
                const clientData = data.find((client: client) => client.id === parseInt(id));
                if (clientData) {
                    setClient(clientData);
                    // Fetch country codes based on client's location
                    fetch(`/CountryCodes.json`)
                        .then(resp => resp.json())
                        .then(data => {
                            const country = data.find((country: CountryCodes) => country.name === clientData.location);
                            if (country) {
                                setCountryCodes(country);
                            } else {
                                setError('Country code not found for client location.');
                            }
                            setLoading(false);
                        })
                        .catch(error => {
                            console.error('Error fetching the country:', error);
                            setError('Failed to fetch country. Please try again later.');
                            setLoading(false);
                        });
                } else {
                    setError('Client not found for the given project ID.');
                    setLoading(false);
                }
            })
            .catch(error => {
                console.error('Error fetching the client:', error);
                setError('Failed to fetch client. Please try again later.');
                setLoading(false);
            });

        // Fetch project data
        fetch(`/projects.json`)
            .then(response => response.json())
            .then(data => {
                const projectData = data.find((proj: Project) => proj.id === parseInt(id));
                if (projectData) {
                    setProject(projectData);
                } else {
                    setError('Project not found for the given ID.');
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching the project:', error);
                setError('Failed to fetch project. Please try again later.');
                setLoading(false);
            });

    }, [id]);
    if (loading) {
        return (
            <div>
                {/* <Navbar /> */}
                <header className="bg-NavBg text-white ">
                    <div className="container mx-auto flex items-center justify-between py-4 px-20">
                        <div className="flex items-center space-x-4 h-20">
                            <img src={image} alt="Logo" className="h-12 w-50 ml-10" />
                            <span className="text-xl font-bold"></span>
                        </div>
                        <nav className="flex items-center space-x-6 text-2xl">
                            <a href="/browse" className="mx-auto">
                                <div className='flex justify-center items-center px-10'> <FaRegCompass className="h-12 w-30 mr-2"
                                />
                                    <p className='text-xl'>Browse</p>
                                </div>
                            </a>

                            <Button className="bg-pink-600 hover:bg-pink-700 py-2 px-2 rounded-lg ">Post a Project</Button>
                            <div className="flex items-center space-x-2">
                                <Avatar>
                                    <AvatarImage src={profile} />
                                    <AvatarFallback></AvatarFallback>
                                </Avatar>
                                <div className="text-sm">
                                    <p>@Username</p>
                                    <p>₹0.00 INR</p>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                <div className="project-detail">
                    <h1 className="p-t"><Skeleton width={300} style={{ background: "#f9f9f9" }} /></h1>
                    <p className="p-d"><Skeleton width={200} style={{ background: "#f9f9f9" }} /></p>
                    <p className="p-desc"><Skeleton count={3} style={{ background: "#f9f9f9" }} /></p>
                    <p className="budget"><Skeleton width={150} style={{ background: "#f9f9f9" }} /></p>
                    <p className="categoryy"><Skeleton width={150} style={{ background: "#f9f9f9" }} /></p>
                    <p className="hourly-rate"><Skeleton width={150} style={{ background: "#f9f9f9" }} /></p>
                    <p className="skill"><Skeleton width={300} style={{ background: "#f9f9f9" }} /></p>
                </div>


            </div>
        );
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!project) {
        return <div>Project not found</div>;
    }
    const profilNav = () => {
        Navigate('/profile')
    }
    const logoClicked = () => {
        Navigate('/dashboard')
    }
    const profileClicked = () => {
        Navigate('/profile')
    }

    return (
        <>
            {/* <Navbar /> */}
            <header className="bg-NavBg text-white ">
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
                                <p>@username</p>
                                <p>₹0.00 INR</p>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="detail-container">
                <div className="project-detail">
                    <h1 className='p-t'>{project.title}</h1>
                    <p className='p-d'>Project Details</p>
                    <p className='p-desc'>{project.explanation}</p>
                    <p className="budget">Budget: ${project.budget}</p>
                    <p className="categoryy">Category: {project.category}</p>
                    {project.hourlyRate && <p className="hourly-rate">Hourly Rate: ${project.hourlyRate}</p>}
                    <p className="skill">Skills: {project.skills.join(', ')}</p>
                </div>
                <div className="project-detail-right">
                    <h3 style={{
                        color: "black",
                        fontSize: "20px",
                        // marginBottom: "10px",
                        paddingBottom: "10px",
                        borderBottom: "1px solid black"
                    }}>About Client</h3>

                    <p style={{
                        color: "black",
                        fontSize: "14px",
                        marginBottom: "20px",
                        marginTop: "10px"


                    }}>{client?.name}</p>

                    <div className="group-loc">
                        <Flag
                            code={CountryCodes?.code} className='h-7 mr-5 '
                        /><p style={{
                            fontSize: "15px",
                            color: "black",

                        }}>{client?.location}</p>

                    </div>

                </div>
            </div>
        </>
    );
};

export default ProjectDetail;
