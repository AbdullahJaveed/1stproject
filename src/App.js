import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import { Home } from './component/home';
import { Footer } from './component/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Aboutus } from './component/aboutUs';
import { Contact } from './component/Contactus';
import { Privacy } from './component/PrivacyPlicies';
import { Menu } from './component/menu';


function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/> }/>
      
      <Route path="/about" element={<h1><Aboutus/></h1>}/>
      <Route path="/contact" element={<h1><Contact/></h1>}/>
      <Route path="/PrivacyAndPolicies" element={<h1><Privacy/></h1>}/>
      <Route path="/menu" element={<h1><Menu/></h1>}/>
      </Routes>
      </BrowserRouter>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
