import GlobalApi from '@/app/_utils/GlobalApi'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function SideBanners() {

  const [sideBannerList,setSideBannerList]=useState([]);
  useEffect(()=>{
    getSideBanners();
  },[])
  
  //Fetch Course List
  const getSideBanners=()=>{
    GlobalApi.getSideBanner().then(resp=>{
      console.log(resp);
      setSideBannerList(resp.SideBanners)
    })
  }
  return (
    <div>
      
      <div>
        <Image src='/skillup_explore.jpg' alt='banner'
        width={500}
        height={300}
        onClick={()=>window.open('https://www.theaims.ac.in/')}
        className='rounded-xl cursor-pointer'
        />
      </div>
      
      {sideBannerList?.map((item,index)=>(
        <div key={index}>
          <Image src={item.banner.url} alt='banner'
          width={500}
          height={300}
          className='rounded-xl'
          />
        </div>
      ))}
    </div>
  )
}

export default SideBanners