
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MovieGrid from './pages/MovieGrid';
import MovieDetail from './pages/MovieDetail';
import MovieList from './pages/MovieList';
import MovieTicketPlan from './pages/MovieTicketPlan';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route index element={<Home/>} ></Route>
                  <Route path='/movie-grid' element={<MovieGrid />} ></Route>
                  <Route path='/movie-details' element={<MovieDetail />} ></Route>
                  <Route path='/movie-list' element={<MovieList />} ></Route>
                  <Route path='/movie-ticket-plan' element={<MovieTicketPlan />} ></Route>
              </Route>
              <Route path='/sign-in' element={<SignIn/>} ></Route>
              <Route path='/sign-up' element={<SignUp/>} ></Route>
              <Route path='*' element={<NoPage/>} ></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
