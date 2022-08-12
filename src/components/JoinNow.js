import Form from 'react-bootstrap/Form';
import { Badge } from 'react-bootstrap';
import googleLogo from '../images/google.svg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { connect } from 'react-redux';
import { signInAPI } from '../actions';
import styled from 'styled-components';
function JoinNow(props) {
    console.log(props.user)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleEmailAddress = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }
    const navigate = useNavigate()
    const joinNow = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
                if (auth) navigate('/home')
            })
            .catch(error => alert(error.message))
        setEmail('')
        setPassword('')
    }
    return (
        <Container>
            {props.user && navigate('/home')}
            {props.join === true && props.signInTo !== true && (
                <Form style={{
                    padding: '20px',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    minHeight: '5rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '2rem'
                }
                }>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name </Form.Label>
                        <Form.Control type="text" placeholder="enter your full name" aria-required='true' required o />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" aria-required='true' required onChange={handleEmailAddress} value={email} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password (6 or more character)</Form.Label>
                        <Form.Control type="password" placeholder="Password" aria-required='true' required onChange={handlePassword} value={password} />
                    </Form.Group>
                    <Form.Text className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        By clicking Agree & Join, you agree to the linkedin
                        <Badge bg="transparent" text="primary" style={{ fontSize: '14px', cursor: 'pointer' }}>User Agrement Privacy Policy and Cookie Policy</Badge>
                    </Form.Text>
                    <Badge type='submit' pill bg="primary" className='w-100 p-3 mb-3' style={{ fontSize: '16px', cursor: 'pointer' }} onClick={joinNow}>
                        Agree & Join
                    </Badge>{' '}
                    <div className="d-flex justify-content-center mb-3">or</div>
                    <Google className="mb-3" onClick={() => props.signIn()}>  <img src={googleLogo} alt="not found" />  Continue with Google</Google>
                    <Form.Text className='d-flex justify-content-center mb-3'>Already on LinkedIn? <Badge bg="transparent" text="primary" style={{ fontSize: '14px', cursor: 'pointer' }} >Sign in</Badge></Form.Text>
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

`
const Google = styled.button`
display:flex;
justify-content:center;
background-color:#fff;
align-items:center;
height:56px;
width:100%;
border-radius:28px;
box-shadow:inset 0 0 0 1px rgb(0 0 0 / 60%),
inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb(0 0 0 / 0);
vertical-align:middle;
transition-duration:167ms;
font-size:20px;
color:rgba(0,0,0,0.6);
&:hover{
  background-color:rgba(207,207,207,0.25);
  color:rgba(0,0,0,0.75);
}
`;
const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.userState.user,
    }
}
const mapDispatchToProps = (dispatch) => ({
    signIn: () => dispatch(signInAPI()),
})


export default connect(mapStateToProps, mapDispatchToProps)(JoinNow)
//export default JoinNow