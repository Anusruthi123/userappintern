import React from 'react'
import Button from '@mui/material/Button';
import {useEffect,useState } from 'react';
import { TextField } from '@mui/material';
import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom'

const Add = (user) => {
const [form,setForm]=useState({
  userId:'',
  userName:'',
  email:''
})
let navigate=useNavigate();
// letincrementCounter=()=>
  // setCount(count+1)
//}
const location=useLocation()
  function valueUpdate(e) {
    setForm({...form,[e.target.name]:e.target.value})
  }
  function submitInfo() {
    if (location.state!=null) {
      axios.put('http://localhost:4000/userupdation/'+location.state.user._id,form).then((res)=> {
        alert('Data updated');

      }).catch((error)=>{
        console.log(error);
      })
    } else {
      axios.post('http://localhost:4000/newuser',form).then((res)=> {
        navigate('/')
      }).catch((error)=>{
        console.log(error)
      })
    }

  }
  useEffect(()=>{
    if(location.state!=null){
      setForm({...form,
        userId:location.state.user.userId,
        userName:location.state.user.userName,
        email:location.state.user.email,

      })
    }
  },[]) 


  return (

    <>
    <div>
        
      <TextField id="outlined-basic" label="UserId" variant="outlined" name="userId" value={form.userId} 
      onChange={valueUpdate}/><br/>
      <TextField id="filled-basic" label="Name" variant="filled" name="userName" value={form.userName}
      onChange={valueUpdate}/><br/>
      <TextField id="standard-basic" label="Email" variant="standard" name="email" value={form.Email} 
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