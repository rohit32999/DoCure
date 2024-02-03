import React from 'react';
import { Link } from 'react-router-dom';
import Picture from '../../../assets/trusted/output.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Banner() {
    return (
        <div className="hero py-5 bg-sky-100" data-aos="fade-up" data-aos-duration="800">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Picture} className="rounded-lg lg:w-1/2 md:w-full shadow-2xl" alt='' />
                <div className='lg:px-5 md:px-5 py-10 text-justify'>
                    <h1 className='text-4xl font-bold'>Greetings!</h1>
                    <h1 className='text-4xl text-green-600 pt-3 font-bold'>Welcome To,</h1>
                    <h1 className="text-8xl text-indigo-500 pt-3 font-bold pb-5">DoCure!</h1>
                    <Card>
                        <CardContent className="border-4 border-green-600">
                            <Typography variant="body1">
                            You came to the right place. Get support for stress, family issues, 
                            life balance from your home. Consulting a healthcare professional, buying medicine, ordering lab tests, 
                            and improving your health and wellbeing, all can be done 24/7 with DocTime!
                            The perfect place for you! Starting from timely virtual treatment, to appointment scheduling,
                            patient portals and automation of administrative tasks, our DoCure is an all in one website
                            for reaching out to the people all over the world!
                            </Typography>  
                        </CardContent>
                        </Card>

                    <div className='my-5 text-center font-bold flex gap-2 pt-5'>
                        <Link to='/login'>
                            <button className="btn normal-case text-white hover:bg-green-600 bg-indigo-600 rounded-full btn-lg">
                                <span className='ml-2'>
                                    Free Consultation!
                                </span>
                            </button>
                        </Link>

                        <Link to='/services'>
                            <button className="btn normal-case btn-outline text-white hover:bg-indigo-600 bg-green-600 btn-lg rounded-full">
                                <span className='ml-2'>
                                    Book an Appointment!
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;