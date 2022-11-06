import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Users from './components/users/Users';
import NotFound from './components/notFound/NotFound';
import RepoDetails from './components/repoDetails/RepoDetails';
import Home from './components/home/Home';
import {ErrorBoundary} from 'react-error-boundary';
import FallBack from './components/fallback/FallBack';
import ErrorPage from './components/errorBoundary/ErrorPage';


function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={FallBack}>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/repo" element={<Users/>}>
        <Route path="/repo/:reponame" element={<RepoDetails/>}/>
        </Route>
        <Route path="/error" element={<ErrorPage/>}/>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
