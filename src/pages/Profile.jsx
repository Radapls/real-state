/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Profile.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Monday, 9th January 2023
 */

import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Profile() {

    const auth = getAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email
    });

    function onLogOut(params) {
        auth.signOut()
        navigate("/")
    }

    const {name, email} = formData

    return (
    <>
    <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
        <h1 className='text-3xl text-center font-bold mt-6'>My Profile</h1>
        <div className='w-full md:w-[50%] mt-6 px3 '>
            <form>
                <input
                    type="text"
                    id='name'
                    value={name}
                    disabled
                    className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-lg transition ease-in-out'
                />

                <input
                    type="text"
                    id='email'
                    value={email}
                    disabled
                    className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-lg transition ease-in-out'
                />

                <div className='mb-6 flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                    <p className='flex items-center'>Do you want to change your name?
                        <span className=' font-semibold text-red-600 hover:text-red-800 transition ease-in-out duration-200 ml-1 cursor-pointer'>Edit</span>
                    </p>

                    <p onClick={onLogOut} className='text-blue-600 hover:text-blue-800 font-semibold transition ease-in-out cursor-pointer'>Sign Out</p>
                </div>
            </form>
        </div>
    </section>
    </>
  )
}
