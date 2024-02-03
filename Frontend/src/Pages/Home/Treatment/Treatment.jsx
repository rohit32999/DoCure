import React from 'react';
import treatment from '../../../assets/images/treatment.png';


const Treatment = () => {
    return (
        <div data-aos="fade-right" data-aos-duration="1000" className='bg-gradient-to-r from-sky-200 via-sky-100 to-sky-500 '>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center container px-3  ">

                <div className='text-center'>
                    <h1 className="text-3xl justify-start pt-5 pb-5 font-bold">What Kind Of
                        <br />
                        Treatment We Provide.</h1>
                    <div className="avatar">
                        <div className="w-44 mask mask-hexagon">
                            <img src={treatment} alt='treatment' />
                        </div>
                    </div>
                </div>

                <div>
                    <div tabIndex={0} className="collapse my-5 collapse-plus border border-indigo-500 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What do we treat?
                        </div>
                        <div className="collapse-content">
                            <p tabIndex={0}>
                            Common health issues. Ask anything you would normally. You can have an instant video conference with one of our 
                                doctors via a digital consultation from anywhere, at any time of the day. Get diet advices, health monitoring 
                                and follow-ups.</p>
                        </div>
                    </div>

                    <div tabIndex={1} className="collapse collapse-plus border border-indigo-500 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            How does it work?
                        </div>
                        <div className="collapse-content">
                            <p tabIndex={1}>
                            You can register on our website and access several medical services easily. The basic video consultation service is 
                                straightforward: search for your relevant doctor with easy filters, talk to your doctor directly as included 
                                in your DoCare healthcare package or pay just prior to the on-demand consultation. Then access your 
                                prescription uploaded by the doctor and you can order medicine or tests as recommended</p>
                        </div>
                    </div>

                    <div tabIndex={2} className="collapse my-5 collapse-plus border border-indigo-500 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Who provides consultation on DocService?
                        </div>
                        <div className="collapse-content">
                            <p tabIndex={2}>
                            Only certified MBBS doctors can provide consultation via the DoCare app.
                            </p>
                        </div>
                    </div>
                    <div tabIndex={3} className="collapse my-5 collapse-plus border border-indigo-500 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            When are the doctors available for consultation?
                        </div>
                        <div className="collapse-content">
                            <p tabIndex={3}>
                               
                            Doctors are available according to their time availability. Our platform is available 24/7. 
                                Any doctor can come online at any time if they want and you shall be notified accordingly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;