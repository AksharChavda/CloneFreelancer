import React from 'react';
import { Button } from './UI/button';
import { Avatar, AvatarImage, AvatarFallback } from './UI/Avatar';
import { Progress } from './UI/progress';
import image from '../assets/Group 1.png';
import profile from '../assets/profile-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import { FaRegCompass } from "react-icons/fa6";
import { useUser } from '../contexts/UserContexts';
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { PiDesktopBold } from "react-icons/pi";
export default function Dashboard() {
  const navigate = useNavigate();
  const profileClicked = () => {
    navigate('/profile');
  };
  const logoNav = () => {
    navigate('/dashboard');
  };

  const { user } = useUser();

  if (!user) {

  }
  return (
    <div className="min-h-screen bg-[#FDFCFC]">
      <header className="bg-NavBg text-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-60">
          <div className="flex items-center space-x-4 h-20">
            <img src={image} alt="Logo" className="h-12 w-50 ml-0 lg:ml-10 cursor-pointer" onClick={logoNav} />
            <span className="text-xl font-bold"></span>
          </div>
          <nav className="flex flex-wrap items-center space-x-6 text-xl lg:text-2xl mt-2 lg:mt-0">
            <a href="/browse" className="mx-auto">
              {/* <img src={browse} alt="Browse" className="h-12 w-30" /> */}
              <div className='flex justify-center items-center px-10'> <FaRegCompass className="h-12 w-30 mr-2"
              />
                <p className='text-2xl'>Browse</p>
              </div>
            </a>
            <Button className="bg-pink-600 hover:bg-pink-700 py-2 px-2 rounded-lg mt-2 lg:mt-0">Post a Project</Button>
            <div className="flex items-center space-x-2 mt-2 lg:mt-0">
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
        <div className="bg-[#2c2c2c] px-5 lg:px-60">
          <div className="container mx-auto flex flex-wrap items-center space-x-2 lg:space-x-7 py-2 px-2 lg:px-12 text-lg lg:text-2xl h-20">
            {['Dashboard', 'Lists', 'Tasklists', 'My Projects', 'Inbox', 'Feedback', 'Free Credit', 'Project Updates'].map((item) => (
              <a key={item} href="#" className="text-white hover:underline mt-2 lg:mt-0">
                {item}
              </a>
            ))}
          </div>
        </div>
      </header>
      <main className="container mx-auto flex flex-wrap lg:flex-nowrap space-y-6 lg:space-y-0 lg:space-x-4 py-6 px-5 lg:px-72 mt-10 lg:mt-10">
        <div className="w-full lg:w-3/5 bg-cardBg px-6 py-6 rounded-lg shadow-xl shadow-slate-400 opacity-1">
          <div className="flex items-center space-x-4">
            <img src='https://www.f-cdn.com/assets/main/en/assets/default-notification-image.svg' alt="Icon" className="h-16 w-16  py-2 px-2" />
            <div>
              <p className="text-xl lg:text-2xl font-semibold">
                You are almost ready to start earning money as a freelancer, simply complete the following steps:
              </p>
              <p className="text-sm lg:text-lg text-gray-500">12 days ago</p>
            </div>
          </div>
          <div className="mt-6 space-y-4 px-4 lg:px-20">
            <div className="flex flex-wrap items-center mt-10">
              <MdEmail className="h-8 w-8 text-black-700 mr-5" />
              <div className="flex-1">
                <p className="font-semibold">Email Address</p>
                <p className="text-xl text-gray-600">Verify your email address to make your profile more secure</p>
              </div>
              <Button variant="outline" className="mt-5 lg:mt-0 ml-auto text-sm lg:text-xl bg-[#FCFCFD] h-10 w-full lg:w-auto px-5  hover:bg-gray-200">
                Already Verified
              </Button>
            </div>
            <div className="flex flex-wrap items-center py-10">
              <FaUser className="h-8 w-8 text-black-700 mr-5" />
              <div className="flex-1">
                <p className="font-semibold">Update your profile</p>
                <p className="text-xl text-gray-600">A complete profile increases your chance of getting hired</p>
              </div>
              <Button variant="outline" className="ml-auto mt-5 lg:mt-0 text-sm lg:text-xl bg-[#FCFCFD] h-10 w-full lg:w-auto px-5 font-semibold border rounded-lg border-black hover:bg-gray-200 ">
                Profile Page
              </Button>
            </div>
            <div className="flex flex-wrap items-center">
              <PiDesktopBold className="h-8 w-8 text-black-700 mr-5" />
              <div className="flex-1">
                <p className="font-semibold">Place your first bid</p>
                <p className="text-xl text-gray-600">Browse through projects and place your first bid</p>
              </div>
              <a href="#" className="ml-auto text-pink-600 hover:underline ml-auto mt-5 lg:mt-0 text-sm lg:text-xl font-semibold">
                Browse Projects
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/5 p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-m">Set up your account</p>
              <p className="text-m text-gray-500">15% done</p>
            </div>
            <Progress value={15} className="w-full" />
            <p className="text-lg text-gray-500">
              Having a complete verified account will increase the chances of getting jobs.
            </p>
            <p className="font-semibold">Complete your account setup by:</p>
            <div className="border border-pink-600 p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <UserIcon className="h-6 w-6 text-pink-600" />
                <p>Add your full name</p>
              </div>
              <p className="text-pink-600">+ 5%</p>
            </div>
            <hr />
            <div>
              <p className="font-semibold">Balance</p>
              <div className="flex items-center space-x-2">
                <img src="https://shorturl.at/2hqSc" alt="Flag" className="h-7 w-10" />
                <p>Indian Rupee</p>
              </div>
              <a href="#" className="text-pink-600 hover:underline flex items-center space-x-1">
                <PlusIcon className="h-4 w-4" />
                <span>Add funds</span>
              </a>
              <p className="text-lg font-semibold">₹0.00 INR</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ComputerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  );
}

function MailOpenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}