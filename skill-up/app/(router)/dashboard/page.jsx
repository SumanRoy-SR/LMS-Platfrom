"use client"
import React, { useEffect, useState } from 'react'
import WelcomeBannerDashboard from './_components/WelcomeBannerDashboard'
import { useUser } from '@clerk/nextjs'
import SideBanners from '../courses/_components/SideBanners';
import InProgressCourseList from './_components/InProgressCourseList';
import GlobalApi from '@/app/_utils/GlobalApi';
import ProgressCourseItem from './_components/ProgressCourseItem';

function Dashboard() {
  const {user}=useUser();

  const [userEnrolledCourses,setUserEnrolledCourse] = useState([]);

  useEffect(()=>{
    user && getAllUserEnrolledCourses();
  },[user])

  //Get all user enrolled course list
  const getAllUserEnrolledCourses=()=>{
    GlobalApi.getUserAllEnrolledCourseList(user.primaryEmailAddress.emailAddress).then(resp=>{
      console.log(resp);
      setUserEnrolledCourse(resp.userEnrolledCourses);
    })
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 p-5 gap-5'>
      {/* Left Container */}
      <div className='col-span-3'>
        {/* Banner */}
        <WelcomeBannerDashboard user={user}/>
      {/* In Progress Course List */}
        <InProgressCourseList userEnrolledCourses={userEnrolledCourses}/>
      </div>
      {/* Right Container */}
      <div className='p-5 bg-white rounded-xl'>
        <SideBanners/>
      </div>
    </div>
  )
}

export default Dashboard