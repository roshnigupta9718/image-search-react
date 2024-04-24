import React from 'react'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Search({txt,setxt}) {
   
  return (
    <>
        <form>
        <Form.Control type="text" placeholder="search" className="my-4 m-auto w-50" 
            value={txt}
            onChange={(e)=>setxt(e.target.value)}
        />
        </form>
    </>
  )
}

export default Search