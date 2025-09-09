// import React, { useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Products from './components/Products';
// import Clients from './components/Clients';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   const [currentPage, setCurrentPage] = useState('home');

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'about':
//         return <About />;
//       case 'services':
//         return <Services />;
//       case 'products':
//         return <Products />;
//       case 'clients':
//         return <Clients />;
//       case 'contact':
//         return <Contact />;
//       default:
//         return <Hero />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black">
//       <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
//       <AnimatePresence mode="wait">
//         <main key={currentPage}>
//           {renderPage()}
//         </main>
//       </AnimatePresence>
//       <Footer setCurrentPage={setCurrentPage} />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Clients from './components/Clients';
import Contact from './components/Contact';

function App(): JSX.Element {
  return (
    <>
      <div className="min-h-screen bg-black">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;