import React from 'react'
import Card from '../../components/Card/Card'
import Slider from '../../components/Slider/Slider'

export default function Home() {
  return (
    <div className='page'>


      {/* Ads title starting here */}
      <div className='ads-title'>
        <h1 className='pt-2 mb-6 text-2xl'>Exclusive Deals Today</h1>
      </div>

      {/* Cards area starting here */}
      <div className="grid grid-cols-4 gap-4 mr-4">
        <div><Card titleText='Veggies' bodyText='Deal 20% off shop now' to='/' Icon={require("../../assets/img/c2.png")}/></div>
        <div><Card titleText='Clothes' bodyText='Deal 20% off shop now' to='/' Icon={require("../../assets/img/c2.png")}/></div>
        <div><Card titleText='Kitchen Utils' bodyText='Deal 20% off shop now' to='/' Icon={require("../../assets/img/c3.png")}/></div>
        <div><Card titleText='Electronics' bodyText='Deal 20% off shop now' to='/'  Icon={require("../../assets/img/c3.png")}/></div>
      </div>

      
      
    </div>
  )
}

