import React from 'react'
import Header from '../Components/Header/Header'
import { Router } from "react-router";

export default function DefaultLayout() {
  return (
    <div className='header'>
        <Header/>
        {/* <Switch></Switch> */}
    </div>
  )
}
