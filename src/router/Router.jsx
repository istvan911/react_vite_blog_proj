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

export default function Router() {
  return (
    <>
    <BrowserRouter>
        <ScrollToTop/>
        <Header/>
            <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/authors' element={<Authors />}/>
            <Route path='/post/user/:id' element={<AuthorPost />}/>
            <Route path='/posts/categories/:category' element={<CategoryPosts />}/>
            <Route path='/create' element={<CreatePost />}/>
            <Route path='/myposts/:id' element={<Dashboard />}/>
            {/*<Route path='/' element={<DeletePost />}/>*/}
            <Route path='/post/:id/edit' element={<EditPost />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/logout' element={<Logout />}/>
            <Route path='/posts/:id' element={<PostDetail />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/profile/:id' element={<UserProfile />}/>
            <Route path='/aszf' element={<ASZF />}/>
            <Route path='/gdpr' element={<GDPR />}/>
            <Route path='/*' element={<ErrorPage />}/>
            </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}
