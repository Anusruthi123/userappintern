import React from 'react'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { TextField } from '@mui/material';



const Add = (user) => {
const [form,setForm]=useState({
  userId:'',
  userName:'',
  email:''
})
// letincrementCounter=()=>
  // setCount(count+1)
//}
let submitInfo=()=>{
  console.log(form)
  }
  let valueUpdate=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  return (

    <>
    <div>
        
      <TextField id="outlined-basic" label="UserId" variant="outlined" name="userId"// value={form.userId} 
      onChange={valueUpdate}/><br/>
      <TextField id="filled-basic" label="Name" variant="filled" name="userName" //value={form.userName}
      onChange={valueUpdate}/><br/>
      <TextField id="standard-basic" label="Email" variant="standard" name="email" //value={form.Email} 
      onChange={valueUpdate}/>
      

    </div>
    <br/>
     <Button variant="contained" onClick={submitInfo}>Submit</Button>
     <br/>
     {/* {count} */}
 </>

  )
  

}

export default Add