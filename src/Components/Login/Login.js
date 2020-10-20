import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Image, Row } from 'react-bootstrap';
import './Login.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase";
import firebaseConfig from '../../Configs/firebaseConfig';
import Google from '../../images/icons/google.png';
import Logo from '../../images/logos/logo.png'

const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            sessionStorage.setItem('userName', result.user.displayName)
            sessionStorage.setItem('photo', result.user.photoURL)
            sessionStorage.setItem('email', result.user.email)
            storeAuthToken();
            history.replace(from);
            // ...
        }).catch(function (error) {
        });
    }
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
            sessionStorage.setItem('token', idToken)
            // Send token to your backend via HTTPS
            // ...
        }).catch(function (error) {
            // Handle error
        });
    }
    return (
        <Col>
            <Image className="_logo" src={Logo}></Image>
            <Row className="d-flex justify-content-center">
                <Col className="login-box" xs={10} sm={8} md={6} lg={5}>
                    <h2>Login With</h2>
                    <Col className="login-button" onClick={handleGoogleSignin}>
                        <Image className="google-icon" src={Google}></Image>
                        <p>Continue with Google</p>
                    </Col>
                    <small>Don't have a account?<Link onClick={handleGoogleSignin}>Create Acoount</Link></small>
                </Col>
            </Row>
        </Col>
    );
};

export default Login;