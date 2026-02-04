'use client';

import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import Recommendations from '../components/HomeComponents/Recommendations/Recommendations';
import Certificate from '../components/HomeComponents/Certificate/Certificate';
import Cursos from '../components/HomeComponents/Cursos/Cursos';

const Home = () => {
    return (
        <div className="Home-Page -z-10 bg-[#0d1117]">
            <Banner />
            <MyExpertise />
            <Recommendations />
            <Certificate />
            <Cursos />
            <Footer />
        </div>
    );
};

export default Home;