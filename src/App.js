import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import getUserAuth from './actions';
import { useEffect } from 'react';
function App(props) {
  let location = useLocation()
  useEffect(() => {
    props.getUserAuth()
  }, [])
  return (
    <div className="App">
      {location.pathname === '/home' ? <Header /> : ""},
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth())
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
