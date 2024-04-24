import React, { useState } from 'react'
import Search from './Search'
import ImageContainer from './ImageContainer'
import Imagedata from './Imagedata'

function Main55() {

    let [txt,settxt]=useState('')
    let [data,setdata]=useState([])
  return (
    <div><Search txt={txt} setxt={settxt}/>
    <ImageContainer txt={txt} setdata={setdata} Data={data}/>
  </div>
  ) 
}

export default Main55