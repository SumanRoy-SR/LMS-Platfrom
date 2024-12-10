"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';

const SkillUpPro = () => {

    const [subscriptionId, setSubscriptionId] = useState(null)

    // To create a subscription ID
    const createSubcription=async(planId)=>{
        axios.post("/api/create-subscription",JSON.stringify({
            plan_id:planId
        })).then(resp=>{
            console.log(resp.data);
            setSubscriptionId(resp.data.id)
        })
    }

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        Choose Your Membership Plan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-6 text-purple-600">
            Monthly
          </h3>
          <p className="text-4xl font-bold text-center mb-6">
            4.99$
            <span className="text-lg font-normal">/month</span>
          </p>
          <ul className="list-disc list-inside text-lg mb-6">
            <li>Access to All Courses</li>
            <li>Free Source Code</li>
            <li>Free App Membership</li>
            <li>Email & Instagram DM support</li>
          </ul>
          <Link href={'https://rzp.io/rzp/CuGFliQ'}>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full w-full">
            Get Started
          </button></Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-6 text-purple-600">
            Yearly
          </h3>
          <p className="text-4xl font-bold text-center mb-6">
            39.99$
            <span className="text-lg font-normal">/year</span>
          </p>
          <ul className="list-disc list-inside text-lg mb-6">
            <li>Access to All Courses</li>
            <li>Free Source Code</li>
            <li>Free App Membership</li>
            <li>Email & Instagram DM support</li>
          </ul>
          <Link href={'https://rzp.io/rzp/9gobanD'}>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full w-full">
            Get Started
          </button></Link>
        </div>
      </div>
      <p className="text-center mt-8 text-gray-600">
        Get your first month half price when you use the code{' '}
        <span className="font-bold">SkillUP</span> (monthly plan only).
      </p>
    </div>
  );
};

export default SkillUpPro;