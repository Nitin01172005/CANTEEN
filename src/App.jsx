import React from 'react';
import AOS from 'aos';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Products';
import TopProducts from './components/TopProducts';
import Banner from './components/Banner';
import Subscribe from './components/Subscribe';
import Testionials from './components/Testionials';
import Footer from './components/Footer';
import Popup from './components/Popup';
import Subscription from './components/Subscription'
import About from './components/About';
import Mid from './components/Mid';


function App() {



  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  },[])

  return (
    <>
      <div className='bg-gray-900'>
      <Navbar />
      <About />
      <Home handleOrderPopup = {handleOrderPopup} />
      <Products handleOrderPopup = {handleOrderPopup}  />
      <TopProducts handleOrderPopup = {handleOrderPopup}  />
      <Banner />
      <Subscription />
      <Subscribe />
      <Mid />

      <Testionials />

      <Footer />
      <Popup  orderPopup={orderPopup} setOrderPopup={setOrderPopup}  />
       </div>
    </>
  )
}

export default App
