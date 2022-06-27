import { async } from '@firebase/util'
import { Button, Col, Row } from 'antd'
import { FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
// import Title from 'antd/lib/skeleton/Title'
import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { auth } from '../firebase/config'
// import {  } from "react-router-dom";
type Props = {}

const SignIn = (props: Props) => {
  const navigate = useNavigate();


  const handlerLogin = () => {
    const prodider = new FacebookAuthProvider();
    signInWithPopup(auth, prodider).then((result) => {
      console.log(result);

      const id = result.user.uid;
      const name = result.user.displayName;
      const email = result.user.email;
      const image = result.user.photoURL;
      // console.log(result.user);

      localStorage.setItem("user", JSON.stringify({ id, name, email, image }));
    }).then(() => {

      navigate("/");
    }).catch((error) => {
      console.log(error);

    });
  }
  const handlerLoginGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      // console.log(result);
      const id = result.user.uid;
      const name = result.user.displayName;
      const email = result.user.email;
      const image = result.user.photoURL;
      console.log(result.user);

      localStorage.setItem("user", JSON.stringify({ id, name, email, image }));

    }).then(() => {

      navigate("/");
    })
      .catch((error) => {
        console.log(error);

      });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user is empty");

    } else {
      console.log("unauthorized");

    }

  })

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/")

    }

  }, [])

  return (
    <div>

      <Row justify='center' >
        <Col span={8}>
          <h1 style={{ textAlign: "center" }}>Login </h1>
          <Button style={{ width: "100%", marginBottom: 5 }} onClick={() => handlerLoginGoogle()}>Login with Google</Button>
          <Button style={{ width: "100%" }} onClick={() => handlerLogin()}>Login with Facebook</Button>

        </Col>
      </Row>
    </div>


  )
}

export default SignIn