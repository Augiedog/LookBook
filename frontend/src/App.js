import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpLoad from './component/UpLoad';
import NavBar from './component/home/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './component/home/home';
import SlideShow from './component/home/slideShow';
import Error404 from './component/Error404';
import LoginForm from './component/users/logIn';
import SignUpForm from './component/users/signUpForm';
import CurrentUserProvider from './contexts/currentUser';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ 'textAlign': 'center', 'color': 'blue' }}>Oma's Tree</h1>
      </header>

        <CurrentUserProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pictures/upload" element={<UpLoad />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signUp" element={<SignUpForm />} />
              <Route path="/pictures" element={<SlideShow />} />
              <Route path="/error" element={<Error404 />} />
            </Routes>
          </BrowserRouter>
        </CurrentUserProvider>

    </div>
  )

}

export default App;

