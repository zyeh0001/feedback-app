import './App.css';
import Header from './Components/Header';
import FeedbackList from './Components/FeedbackList';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
import About from './Components/pages/AboutPage';
import AboutIconLink from './Components/AboutIconLink';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FeebackProvider } from './Components/context/FeedbackContext';

function App() {
  return (
    <FeebackProvider>
      <Router>
        <div className='App container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <Header />
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path='/about' element={<About />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeebackProvider>
  );
}

export default App;
