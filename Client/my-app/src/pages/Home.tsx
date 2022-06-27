import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../firebase/config'

type Props = {}

const Home = (props: Props) => {
  const navigate = useNavigate();
  const logout = () => {
    logOut();
    navigate("/");
  }
  return (
    <div>Home
      <div  style={{margin:"auto", width:"400px", background:"#4DAE51", borderRadius:"8px", padding:"15px"}}>
          <h3>My Profile</h3>
            <p>ID: {localStorage.getItem("user")? JSON.parse(localStorage.getItem("user") as string).id : ""}</p>
            <p>Name: {localStorage.getItem("user")  ? JSON.parse(localStorage.getItem("user") as string).name: ""}</p>
            <p>Email: {localStorage.getItem("user")  ? JSON.parse(localStorage.getItem("user") as string).email : ""}</p>
            <p> <img src={localStorage.getItem("user")  ? JSON.parse(localStorage.getItem("user") as string).image : ""} alt="" width={120} /></p>
           
            <Button  onClick={() => logout()}>Logout</Button>
      </div>
    </div>
  )
}

export default Home