import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import Recommendations from '../components/HomeComponents/Recommendations/Recommendations';
import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';
const home = () => {
    return (
        <div className="Home-Page -z-10 bg-white dark:bg-[#0d1117]">
            <Banner />
            <MyExpertise />
            <Recommendations />
            <ClientReviews />
            <Footer />

        </div>
    )
}

export default home