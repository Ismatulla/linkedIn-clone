import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Badge } from 'react-bootstrap';
import { auth } from '../firebase';
import styled from 'styled-components';
function SignInTo({ signInTo,join }) {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // sign in option
    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) navigate('/home')
            })
            .catch(error => alert(error.message))
    }
    return (
        <Container>
            {signInTo === true && join !== true && (
                <Form style={{
                    padding: '20px',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    minHeight: '5rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '8rem'
                }
                }>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" aria-required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Password (6 or more character)</Form.Label>
                        <Form.Control type="password" placeholder="Password" aria-required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Text className='d-flex justify-content-center mb-4'>
                        <Badge type='submit' pill bg="primary" className='w-100 p-3 mb-4' style={{ fontSize: '16px', cursor: 'pointer' }} onClick={signIn}>
                            Sign In
                        </Badge>{' '}</Form.Text>
                </Form >
            )}
        </Container>
    );
}
const Container = styled.div`
position:fixed;
margin-left:50%;
transform:translateX(-50%);
top:0;
animation:fadeIn 0.6s;
@media(max-width:768px){
  min-width:100%
}
`
export default SignInTo;