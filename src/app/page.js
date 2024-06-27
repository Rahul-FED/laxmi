import Header from '@/components/common/header/Header'
import React from 'react'
import './page.module.css'
import '../styles/_colors.module.scss'
import Ourpopular from '@/components/elements/Ourpopular'
import BestPackage from '@/components/elements/bestpackage/BestPackage'
import Making from '@/components/elements/making/Making'
import Footer from '@/components/common/footer/Footer'

const page = () => {
  return (
    <div className='pagewrapper'>
  
      <Ourpopular/>
      <BestPackage/>
      <Making/>

    </div>
  )
}

export default page