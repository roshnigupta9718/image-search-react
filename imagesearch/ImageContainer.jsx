import axios from 'axios'
import React, { useEffect } from 'react'
import Imagedata from './Imagedata'

function ImageContainer({txt ,setdata,Data}) {
  let key="b55qKkWupSs9RNFYjjSTwIhwaYGcAz4hiH5pIEUT1JI"
    let getImg= async()=>{
      // console.log('imgcons')
      await axios.get(`https://api.unsplash.com/search/photos?client_id=${key}&query=${txt}`)
      .then(val=>setdata(val?.data?.results))
      .catch(err=>console.log(err))
      
    }
    useEffect(()=>{
      if(txt){
        getImg()
      }
    },[txt])
  return (
    <div className='border border-3 border-warning p-4'>ImageContainer
    <h6>total results {Data.length}</h6>
    <Imagedata  data={Data}/></div>
  
  )
}

export default ImageContainer