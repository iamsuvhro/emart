import React from 'react'
import Card from '../components/Card/Card'
import Slider from '../components/Slider/Slider'

export default function Home() {
  return (
    <div className='page'>
      
      <div className="grid grid-cols-4 gap-4 mr-4">
        <div><Card titleText='Veggies' bodyText='Deal 20% off shop now' to='/'/></div>
        <div><Card titleText='Clothes' bodyText='Deal 20% off shop now' to='/'/></div>
        <div><Card titleText='Kitchen Utils' bodyText='Deal 20% off shop now' to='/'/></div>
        <div><Card titleText='Home Decor' bodyText='Deal 20% off shop now' to='/'/></div>
      </div>
      
      
    </div>
  )
}

