import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';
import Plans from './Pages/Plans/Plans';
import Trainers from './Pages/Trainers/Trainers';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route exact path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='plans' element={<Plans />} />
          <Route path='trainers' element={<Trainers />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;