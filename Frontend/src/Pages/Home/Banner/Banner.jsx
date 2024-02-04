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
                        <CardContent className="border-2 rounded-lg border-sky-400 bg-indigo-100">
                            <Typography variant="body1">
                            Try DoCure today to get exclusive management facilities for hospitals, book appointments with doctors online and get an online checkup free of cost from the comfort of your home using our ML powered Chatbot.
                            </Typography>  
                        </CardContent>
                        </Card>

                    <div className='my-5 text-center font-bold flex gap-2 pt-5'>
                        <Link to='/login'>
                            <button className="btn normal-case text-white hover:bg-indigo-600 bg-green-600 rounded-full btn-lg">
                                <span className='ml-2'>
                                    Free Consultation!
                                </span>
                            </button>
                        </Link>

                        <Link to='/signup'>
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