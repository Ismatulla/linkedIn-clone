
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import login from '../images/login.svg'
import JoinNow from './JoinNow';
import SignInTo from './SignInTo';
import { useState } from 'react';
function Login(props) {
  const [show, setShow] = useState(false)
  const [signIn, setSignIn] = useState(false)
  const joinShowHandler = () => {
    setSignIn(signIn)
    setShow(!show)
  }
  const signInShowHandler = () => {
    setShow(show)
    setSignIn(!signIn)
  }
  return (
    <div>
      <Container>
        <Nav>
          <Link to='/'>
            <img src={login} alt="no logo found" className='login' />
          </Link>
          <div>
            <Join onClick={joinShowHandler}> Join Now </Join>
            <SignIn onClick={signInShowHandler}>Sign in</SignIn>
          </div>
        </Nav>
        <Section>
          <Hero>
            <h1>Welcome to your <br /> professional community</h1>
            <img src='https://static-exp1.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4' alt="" className='loginHero' />
          </Hero>
        </Section>
        <SignUp>
          <JoinNow join={show} signInTo={signIn} />
        </SignUp>
        <SignInNow>
          <SignInTo signInTo={signIn} join={show} />
        </SignInNow>
      </Container>
    </div >
  );
}
const Container = styled.div`
padding:0;
position:relative
`
const Nav = styled.div`
max-width:1128px;
margin:auto;
padding:12px 0 16px;
display:flex;
align-items:center;
position:relative;
justify-content:space-between;
flex-wrap:nowrap;
& .login{
  width:125px;
  height:65px;
 
  @media(max-width:768px){
    padding:0 5px
  }
  
}
`
const Join = styled.a`
font-size:16px;
padding:10px 12px;
text-decoration:none;
color:rgba(0,0,0,0.6);
margin-right:12px;
cursor:pointer;
&:hover{
  background-color:rgba(0,0,0,0.08);
  color:rgba(0,0,0,0.9);
  text-decoration:none
};
border-radius:4px;
`
const SignIn = styled.a`
box-shadow:inset 0 0 0 1px #0a66c2;
color:#0a66c2;
border-radius:24px;
transition-duration:167ms;
font-size:16px;
font-weight:600;
line-height:40px;
padding:10px 24px;
text-align:center;
background-color: rgba(0,0,0,0);
&:hover{
  background-color:rgba(112,181,249,0.15);
  color:#0a66c2;
  text-decoration:none
}
cursor:pointer;
`
const Section = styled.section`
align-content:start;
min-height:700px;
max-width:1100px;
padding-bottom:138px;
padding-top:40px;
padding:60px 0;
position:relative;
flex-wrap:wrap;
width:100%;
align-items:center;
margin:auto;
@media(max-width:768px){
  margin:auto;
  min-height:0px;
}

`
const Hero = styled.div`
width:100%;
h1{
  padding-bottom:0;
  font-size:56px;
  color:#8f5849;
  font-weight:200;
  line-height:70px;
  @media(max-width:768px){
    text-align:center;
    font-size:20px;
    width:100%;
    line-height:2;
  }
}
img{
  z-index:-1;
  width:700px;
  height:670px;
  position:absolute;
  bottom:-2px;
  right:-150px;
  @media(max-width:768px){
    width:100%;
    top:230px;
    position:initial;
  }
}
`
const Form = styled.div`
margin-top:100px;
width:408px;
@media(max-width:768px){
  margin-top:20px;
}
`
const SignUp = styled.div`
/* @media(max-width:768px){
  min-width:400px
} */
`;
const SignInNow = styled(SignUp)``;
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

export default Login 