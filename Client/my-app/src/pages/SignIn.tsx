import { async } from '@firebase/util'
import { Button, Col, Row } from 'antd'
// import Title from 'antd/lib/skeleton/Title'
import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation  } from 'react-router-dom'
import { auth, signInWithFacebook, signInWithGoogle } from '../firebase/config'
// import {  } from "react-router-dom";
type Props = {}

const SignIn = (props: Props) => {
  const navigate = useNavigate();
  // const history = useLocation();
  // const [ifLogin, setLogin] = useState(false);
  
  
  const handlerLogin =   () => {
        signInWithGoogle();
  }
 
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/")
      console.log("useEff");

    }
     
  },[])

  return (
    <div>

      <Row justify='center' >
        <Col span={8}>
            <h1 style={{textAlign:"center"}}>Login </h1>
            <Button style={{width:"100%", marginBottom:5}} onClick={() => signInWithGoogle()}>Login with Google</Button>
            <Button style={{width:"100%"}} onClick={() => signInWithFacebook()}>Login with Facebook</Button>
            
        </Col>
      </Row>
    </div>


  )
}

export default SignIn