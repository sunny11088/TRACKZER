import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Contactus from './pages/Contactus/Contactus';
import Pone from './pages/Allproducts/Pone';
import Products from "./pages/Products/Products";
import Tmeic from "./pages/Tmeic/Tmeic";


import MainLtPccPanel from './pages/Products/MainLtPccPanel';
/*
import HvacMccPanel from './hvac-mcc-panel';
import Apfc500kvarPanel from './apfc-500kvar-panel';
import UpsPdbPanel from './ups-pdb-panel';
import ProcessMccPanel from './process-mcc-panel';
import MccVfdFeederPanel from './mcc-vfd-feeder-panel';
import AirCompressorMccPanel from './air-compressor-mcc-panel';
import PlantMldbPanel from './plant-mldb-panel';
import WaterSystemMccPanel from './water-system-mcc-panel';
import SolventMccPanel from './solvent-mcc-panel';
*/


function App() {
  return (
    <Router
      future={{
        v7_startTransition: true, // Opt-in for smoother state transitions
        v7_relativeSplatPath: true, // Opt-in for new relative path behavior in splat routes
      }}
    >
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/tmeic" element={<Tmeic />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/Allproducts/Pone" element={<Pone />} />
        <Route path="/Products/Pone" element={<Pone />} />


        <Route path="/products/main-lt-pcc-panel" element={<MainLtPccPanel />} />
     {/*   <Route path="/products/hvac-mcc-panel" element={<HvacMccPanel />} />
        <Route path="/products/apfc-500kvar-panel" element={<Apfc500kvarPanel />} />
        <Route path="/products/ups-pdb-panel" element={<UpsPdbPanel />} />
        <Route path="/products/process-mcc-panel" element={<ProcessMccPanel />} />
        <Route path="/products/mcc-vfd-feeder-panel" element={<MccVfdFeederPanel />} />
        <Route path="/products/air-compressor-mcc-panel" element={<AirCompressorMccPanel />} />
        <Route path="/products/plant-mldb-panel" element={<PlantMldbPanel />} />
        <Route path="/products/water-system-mcc-panel" element={<WaterSystemMccPanel />} />
        <Route path="/products/solvent-mcc-panel" element={<SolventMccPanel />} />*/}


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
