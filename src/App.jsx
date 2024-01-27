import Container from "react-bootstrap/esm/Container";

import { Posts } from "./components/posts";
import Header from "./components/header";
import Body from "./components/Body";
import Anime from "./components/Anime";
import Register from "./components/forms/Register";
import Users from "./components/Users";
import FormPage from "./pages/FormPage";
import SocialPage from "./pages/SocialPage";
import LandingPage from "./pages/LandingPage";
import Login from "./components/forms/Login";
import { Route, Routes } from "react-router-dom";

export default function App() {

  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage><Anime/></LandingPage>} />
        <Route path='/login' element={<FormPage><Login /></FormPage>} />
        <Route path='/register' element={<FormPage><Register/></FormPage>} />
        <Route path='/users' element={<SocialPage><Users/></SocialPage>} />
        <Route path='/posts' element={<SocialPage><Posts/></SocialPage>} />
      </Routes>
    </Container>
  )
}