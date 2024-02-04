import React from 'react';
import mission from '../../../assets/images/mission.png';
import vision from '../../../assets/images/vision.png';

const About = () => {
    return (
        <div className='container'>
            <br></br>
            //<h1 className='text-5xl my-5 text-center font-bold'>About us</h1>
            <section>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                <div className="card  bg-base-100 rounded-md ">
                    <figure><img src={mission} className='rounded-lg image-full' alt="Shoes" /></figure>
                </div>
                <div className="card  bg-base-100 rounded-md ">
                    <figure><img src={vision} className='rounded-lg' alt="Shoes" /></figure>
                </div>
            </div>
            </section>

            <p className='my-6 px-10'>DoCure is an online Hospital Management System that caters to the day to day operations of the hospitals.
            DoCure offers specialist consultations with verified and certified doctors, online prescriptions, medicine delivery, 
            pathology and diagnostics tests, all while building valuable Electronic Health Records. DoCure is vertically integrated with pharmacies/ 
            medicine delivery suppliers, labs/ diagnostics centres, and payment providers for an end-to-end digital health experience. DoCure 
            systematically focuses on expanding access to affordable healthcare services to all. We promise to improve our 
            solutions continuously through our scalable technology and data analytics capabilities. Our passionate team is 
            committed to excellence and work extremely hard to ensure we make a positive contribution to the healthcare of 
            the future.</p>
        </div>
    );
};

export default About;