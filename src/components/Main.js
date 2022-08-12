import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import photo from '../images/picture-image-svgrepo-com.svg'
import video from '../images/svg-video.svg'
import user from '../images/user.svg'
import event from '../images/calendar-add-event-svgrepo-com.svg'
import article from '../images/articles-journal-svgrepo-com.svg'
import collapse from '../images/collapse.png'
import thumbUp from '../images/thumb-up.svg'
import clappingImg from '../images/clapping-img.svg'
import like from '../images/like.svg'
import comments from '../images/comments.svg'
import share from '../images/share.svg'
import send from '../images/send.svg'
import PostModal from './PostModal';
import spinner from '../images/spinner.svg'
import { connect } from 'react-redux'
import { getArticlesAPI } from '../actions';
import ReactPlayer from 'react-player';
function Main(props) {
    const [showModal, setShowModal] = useState('closed')
    useEffect(() => {
        props.getArticles()
    }, [])
    const handleClick = (e) => {
        e.preventDefault()
        if (e.target !== e.currentTarget) return
        switch (showModal) {
            case "opened":
                setShowModal("closed")
                break;
            case "closed":
                setShowModal("opened")
                break;
            default:
                setShowModal("closed")
                break;
        }
    }
    return (
        <>
            {
                props.articles.length == 0 ?
                 <img src={spinner}/> :
                    <Container>
                        <ShareBox>
                            <div>
                                {
                                    props.user && props.user.photoURL ? (
                                        <img src={props.user.photoURL} />
                                    ) : (
                                        <img src={user} alt="not found" />
                                    )
                                }
                                <button disabled={props.loading ? true : false} onClick={handleClick}>Start a post</button>
                            </div>
                            <div>
                                <button>
                                    <img src={photo} alt="not found" />
                                    <span>Photo</span>
                                </button>
                                <button>
                                    <img src={video} alt="not found" />
                                    <span>Video</span>
                                </button>
                                <button>
                                    <img src={event} alt="not found" />
                                    <span>Event</span>
                                </button>
                                <button>
                                    <img src={article} alt="not found" />
                                    <span>Article</span>
                                </button>
                            </div>
                        </ShareBox>
                        <Content>
                            {
                                props.loading && <img src={spinner} />
                            }
                            {props.articles.length > 0 && props.articles.map((article, key) => (
                                <Article key={key}>
                                    <SharedActor>
                                        <a>{
                                            props.user && props.user.photoURL ? (
                                                <img src={article.actor.image} />
                                            ) : (
                                                <img src={user} alt="not found" />
                                            )
                                        }
                                            <div>
                                                <span>{article.actor.title}</span>
                                                <span>{article.actor.description}</span>
                                                <span>{article.actor.date.toDate().toLocaleDateString()}</span>
                                            </div>
                                        </a>
                                        <button>
                                            <img src={collapse} alt="not found" />
                                        </button>
                                    </SharedActor>
                                    <Description>
                                        {article.description}
                                    </Description>
                                    <SharedImg>
                                        <a>
                                            {!article.sharedImg && article.video ? <ReactPlayer width={'100%'} url={article.video} /> : (article.sharedImg && <img src={article.sharedImg} />)}
                                        </a>
                                    </SharedImg>
                                    <SocialCounts>
                                        <li>
                                            <button>
                                                <img src={thumbUp} alt="notfound" />
                                                <img src={clappingImg} alt="notfound" />
                                                <span>75</span>
                                            </button>
                                        </li>
                                        <li><a>{article.comments}</a></li>
                                    </SocialCounts>
                                    <SocialActions>
                                        <button>
                                            <img src={like} alt="" />
                                            <span>like</span>
                                        </button>
                                        <button>
                                            <img src={comments} alt="" />
                                            <span>Comments</span>
                                        </button>
                                        <button>
                                            <img src={share} alt="" />
                                            <span>Share</span>
                                        </button>
                                        <button>
                                            <img src={send} alt="" />
                                            <span>Send</span>
                                        </button>
                                    </SocialActions>
                                </Article>
                            ))}
                        </Content>

                        <PostModal showModal={showModal} handleClick={handleClick} />
                    </Container>
            }
        </>
    );
}

const Container = styled.div`
display:grid;
grid-template-areas:main;
`
const CommonCard = styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color:#fff;
border-radius:5px;
position:relative;
border:none;
box-shadow:0 0 0 1px rgb(0 0 0 /15%),0 0 0 rgb(0 0 0 /20%)
`
const ShareBox = styled(CommonCard)`
display:flex;
flex-direction:column;
color:#958b7b;
margin:0 0 8px;
background:#fff;
max-height:200px;
padding-right:24px;
div{
    button{
        outline:none;
        color:rgba(0,0,0,0.6);
        font-size:14px;
        line-height:1.5;
        min-height:48px;
        background:transparent;
        border:none;
        display:flex;
        align-items:center;
        font-weight:600;
    }
    &:first-child{
        display:flex;
        align-items:center;
        padding:8px 16px 0 16px;
        img{
            width:48px;
            border-radius:50%;
            margin-right:8px;
        }
        button{
            margin:4px 0;
            flex-grow:1;
            border-radius:35px;
            padding-left:16px;
            border:1px solid rgba(0,0,0,0.15);
            background-color:#fff;
            text-align:left; 
        }
    }
    &:nth-child(2){
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
        padding-bottom:4px;
        button{
            img{
                margin:0 4px 0 -2px
            }
            span{
                color:#70b5f9;
            }
        }
        }
}
`

const Article = styled(CommonCard)`
padding:0;
margin:0 0 8px;
overflow:visible;
`
const SharedActor = styled.div`
padding-right:40px;
flex-wrap:nowrap;
padding:20px 16px 0;
margin-bottom:8px;
align-items:center;
display:flex;
a{
    margin-right:12px;
    flex-grow:1;
    overflow:hidden;
    display:flex;
    text-decoration:none;
    img{
        width:48px;
        height:48px;
    }
    &>div{
        display:flex;
        flex-direction:column;
        flex-grow:1;
        flex-basis:0;
        margin-left:8px;
        overflow:hidden;
        span{
            text-align:left;
            &:firs-child{
                font-size:14px;
                font-weight:700;
                color:rgba(0,0,0,1)
            }
            &:nth-child(n+1){
                font-size:12px;
                color:rgba(0,0,0,0.6)
            }
        }
    }
}
button{
    border:none;
    position:absolute;
    right:12px;
    top:0;
    background:transparent;
    border:none;
    outline:none;
    img{
        width:48px;
        height:48px;
    }
}
`
const Description = styled.div`
padding:0 16px;
overflow:hidden;
color:rgba(0,0,0,0.9);
font-size:14px;
text-align:left;
`;
const SharedImg = styled.div`
margin-top:8px;
width:100%;
display:block;
position:relative;
background-color: #f9fafb;
img{
    object-fit:contain;
    width:100%;
    height:100%;
}
`
const SocialCounts = styled.ul`
line-height:1.3;
display:flex;
align-items:flex-start;
overflow:auto;
margin:0 16px;
padding:8px;
border-bottom:1px solid #e9e5df;
list-style:none;
li{
    margin-right:5px;
    font-size:12px;
    button{
        display:flex;
        border:none;
        background-color:#fff
    }
}
`
const SocialActions = styled.div`
align-items:center;
display:flex;
justify-content:flex-start;
margin:0;
min-height:40px;
padding:4px 8px;
button{
    display:inline-flex;
    align-items:center;
    padding:8px;
    color:#0a66c2;
    border:none;
   background-color:#fff;
    @media(min-width:768px){
span{
    margin-left:8px;
}
    }
}
`
const Content = styled.div`
text-align:center;
&>img{
    width:30px;
}
`
const mapStateToProps = state => {
    return {
        loading: state.articleState.loading,
        user: state.userState.user,
        articles: state.articleState.articles
    }
}
const mapDispatchToProps = dispatch => ({
    getArticles: () => dispatch(getArticlesAPI())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
/* export default Main */