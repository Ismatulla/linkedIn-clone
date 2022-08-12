import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Leftside from './Leftside';
import Rightside from './Rightside';
import Main from './Main';
import { connect } from 'react-redux';
function Home(props) {
    const navigate = useNavigate()
    return (
        <Container>
            <Content>
                {props.user && navigate('/')}
                <Section>
                    <h5><Link to='/home'>Hiring in a hurry? -</Link></h5>
                    <p>Find talented pros in record time with Upwork and keep business moving.</p>
                </Section>
            </Content>
            <Layout>
                <Leftside />
                <Main />
                <Rightside />
            </Layout>
        </Container>
    );
}

const Container = styled.div`
padding-top:52px;
max-width:100%;
`
const Content = styled.div`
max-width:1100px;
margin-left:auto;
margin-right:auto;
`
const Section = styled.section`
min-height:50px;
padding:16px 0;
text-align:center;
box-sizing:content-box;
text-decoration:underline;
display:flex;
justify-content:center; 
    a{
        font-weight:700;
        color:#0a66c2;
    }

p{
    font-size:16px;
    color:#434649;
    font-weight:600;
}
@media(max-width:768px){
flex-direction:column;
padding:0 5px;

}
`
const Layout = styled.div`
display:grid;
grid-template-areas:'leftside main rightside';
grid-template-columns:minmax(0,5fr) minmax(0,12fr) minmax(300px 7fr);
column-gap:25px;
row-gap:25px;
grid-template-rows:auto;
margin:25px 0;
padding:0 5px;
@media(max-width:768px){
    display:flex;
    flex-direction:column;
    padding:0 5px;
}
`


const mapeStateToProps = state => {
    return {
        user: state.userState.user
    }
}
export default connect(mapeStateToProps)(Home)