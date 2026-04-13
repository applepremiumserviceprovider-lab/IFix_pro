import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import HomePage from './Pages/HomePage.jsx';
import ServicesPage from './Pages/ServicePage.jsx';
import WhyUsPage from './Pages/WhyUsPage.jsx';
import Footer from './components/Footer.jsx';
import './scrollbar.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={
          <div className="custom-scrollbar overflow-x-hidden snap-y snap-mandatory h-screen overflow-y-auto scrollbar-thin">
            <NavBar />
            <section id="home" className="snap-start snap-always min-h-screen">
              <HomePage />
            </section>

            <section id="services" className="snap-start snap-always min-h-screen">
              <ServicesPage />
            </section>

            <section id="why-us" className="snap-start snap-always min-h-screen">
              <WhyUsPage />
            </section>

            <section id="contact" className="snap-start snap-always min-h-screen">
              <ContactPage />
            </section>
            <Footer />
          </div>
        }/>
      </Routes>
    </Router>
  );
};

export default App;