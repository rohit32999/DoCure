import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards'
import Trusted from './Trusted/Trusted';
import Treatment from './Treatment/Treatment';
import Exceptional from './Exceptional/Exceptional';
import Testimonial from './Testimonial/Testimonial';
import Contact from './Contact/Contact';
import SubscriptionPlan from './SubscriptionPlan/SubscriptionPlan';
import Services from '../Services/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // values from 0 to 3000, with step 50ms
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
        });
    }, []);
    return (
        <div>
             <Banner data-aos="fade-up"></Banner>
            {/* <Trusted data-aos="fade-up"></Trusted> */}
            {/* <InfoCards data-aos="fade-up"></InfoCards> */}
            <Treatment data-aos="fade-up"></Treatment>
            <Services data-aos="fade-up"></Services>
            {/* <Exceptional data-aos="fade-up"></Exceptional> */}
            <Testimonial data-aos="fade-up"></Testimonial>
            {/* <SubscriptionPlan data-aos="fade-up"></SubscriptionPlan> */}
            <Contact data-aos="fade-up"></Contact> 
        </div>
    );
};

export default Home;