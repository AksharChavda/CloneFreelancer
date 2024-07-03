import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import '../styles/profile.css'
import { Button } from './UI/button';
import { Avatar, AvatarImage, AvatarFallback } from './UI/Avatar';
import image from '../assets/Group 1.png';
import profileimg from '../assets/profile-removebg-preview.png';
import title from '../assets/title.png';
import { useNavigate } from 'react-router-dom';
import { FaRegCompass } from "react-icons/fa6";
const profileSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
  city: z.string(),
  zip: z.string(),
  state: z.string(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

const profile: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema)
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log(data);
  };
  const navigate = useNavigate();
  const profileClicked = () => {
    navigate('/profile');
  };
  const logoNav = () => {
    navigate('/dashboard');
  };
  return (
    <>
      {/* <Navbar />   */}
      <header className="bg-NavBg text-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-5 lg:px-20">
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
                <AvatarImage src={profileimg} onClick={profileClicked} />
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
      <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
        <div className="form-section">
          <h2 >Profile Details</h2>
          <div className="separator" />
          <div className="form-group-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" {...register('firstName')} />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" {...register('lastName')} />
              {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
          </div>
        </div>
        <div className="form-section">
          <div className="separator" />
          <h2 className='p-d'>Address</h2>
          <div className="form-group">
            <label>Address</label>
            <input type="text" {...register('address')} />
            {errors.address && <p>{errors.address.message}</p>}
          </div>
          <div className="form-group">
            <label>City / Town</label>
            <input type="text" {...register('city')} defaultValue="Surat" />
            {errors.city && <p>{errors.city.message}</p>}
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label>ZIP / Postal Code</label>
              <input type="text" {...register('zip')} />
              {errors.zip && <p>{errors.zip.message}</p>}
            </div>
            <div className="form-group">
              <label>State / Region</label>
              <input type="text" {...register('state')} defaultValue="GJ" />
              {errors.state && <p>{errors.state.message}</p>}
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form></>
  );
};

export default profile;