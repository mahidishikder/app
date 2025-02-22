import React from 'react';
import Banner from '../../components/Banner/Banner';
import Review from '../../components/Review/Review';
import OurTeam from '../../components/OurTeam/OurTeam';
import Download from '../../components/Download/Download';
import Navbar from '../../components/Navber/Navber';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div >
      <div>
      <Navbar></Navbar>
      <Banner />
      </div>
      <Review />
      <OurTeam />
      <Download />
      <Footer></Footer>
    </div>
  );
}

export default Home;
