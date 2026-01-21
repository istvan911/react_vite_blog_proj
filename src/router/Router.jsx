import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from '../pages/Home'
import Authors from '../pages/Authors'
import AuthorPost from '../pages/AuthorPost'
import CategoryPosts from '../pages/CategoryPosts'
import CreatePost from '../pages/CreatePost'
import Dashboard from '../pages/Dashboard'
import DeletePost from '../pages/DeletePost'
import EditPost from '../pages/EditPost'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import PostDetail from '../pages/PostDetail'
import Register from '../pages/Register'
import UserProfile from '../pages/UserProfile'
import GDPR from '../pages/GDPR'
import ASZF from '../pages/ASZF'
import Cookie from '../components/Cookie'

export default function Router() {
  return (
    <>
    <BrowserRouter>
        <ScrollToTop/>
        <Cookie />
        <Header/>
            <Routes>
            <Route path={`${import.meta.env.BASE_URL}`} element={<Home />}/>
            <Route path={`${import.meta.env.BASE_URL}authors`} element={<Authors />}/>
            <Route path={`${import.meta.env.BASE_URL}post/user/:id`} element={<AuthorPost />}/>
            <Route path={`${import.meta.env.BASE_URL}posts/categories/:category`} element={<CategoryPosts />}/>
            <Route path={`${import.meta.env.BASE_URL}create`} element={<CreatePost />}/>
            <Route path={`${import.meta.env.BASE_URL}myposts/:id`} element={<Dashboard />}/>
            {/*<Route path='/' element={<DeletePost />}/>*/}
            <Route path={`${import.meta.env.BASE_URL}post/:id/edit`} element={<EditPost />}/>
            <Route path={`${import.meta.env.BASE_URL}login`} element={<Login />}/>
            <Route path={`${import.meta.env.BASE_URL}logout`} element={<Logout />}/>
            <Route path={`${import.meta.env.BASE_URL}posts/:id`} element={<PostDetail />}/>
            <Route path={`${import.meta.env.BASE_URL}register`} element={<Register />}/>
            <Route path={`${import.meta.env.BASE_URL}profile/:id`} element={<UserProfile />}/>
            <Route path={`${import.meta.env.BASE_URL}aszf`} element={<ASZF />}/>
            <Route path={`${import.meta.env.BASE_URL}gdpr`} element={<GDPR />}/>
            <Route path={`${import.meta.env.BASE_URL}*`} element={<ErrorPage errorMessage={'Hibás URL! Használd a menüt a navigáláshoz!'} />}/>
            </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}
