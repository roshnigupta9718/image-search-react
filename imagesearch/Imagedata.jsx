import React from 'react'

import imgstyle from './imgstyle.module.css'
function Imagedata({data}) {
  return (
    <div  className={imgstyle.main}>
  {data && data.map((ele)=>(
   < div key ={ele.id} className={imgstyle.imgdiv}>
   
   <img src={ele?.urls?.raw} alt=""/>
   
   </div>
  ))}
    </div>
  )
}

export default Imagedata