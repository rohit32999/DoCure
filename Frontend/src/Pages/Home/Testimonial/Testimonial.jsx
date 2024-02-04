import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import Adrita from '../../../assets/images/Adrita.jpg';
import Rohit from '../../../assets/images/Rohit.jpg';
import Soumyajit from '../../../assets/images/Soumyajit.jpg';
import Abhirup from '../../../assets/images/Abhirup.jpg';
import Heya from '../../../assets/images/Heya.jpg';
import Review from './Review';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Rohit Chakrabarti',
            img: Rohit,
            review: 'DoCure is a really cool app, and a very helpful one in times of need!',
            location: 'Shrirampur'
        },
        {
            _id: 2,
            name: 'Abhirup Saha',
            img: Abhirup,
            review: 'DoCure has supported me at times of need, grateful to the app!',
            location: 'Kolkata'
        },
        {
            _id: 3,
            name: 'Heya Banerjee',
            img: Heya,
            review: 'DoCure, though being a new app, has a very good opinion in most of our minds!',
            location: 'Chuchura'
        },
        {
            _id: 1,
            name: 'Adrita Chatterjee',
            img: Adrita,
            review: 'DoCure has helped me a lot in my tough times. Hope to see it emerging more in future!',
            location: 'Kankinara'
        },
        {
            _id: 1,
            name: 'Soumyajit Mondal',
            img: Soumyajit,
            review: 'I was in dire need of a app like this. Good that I got to know about it as soon as it was launched!',
            location: 'Memari'
        },
    ];


    // This is for responsive Carousel
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    return (
        <section className='bg-sky-100 p-5 my-16'>
            <div className='flex flex-col lg:flex-row justify-between'>
            <div className='lg:pl-10'>
              <h4 className='text-2xl text-primary font-bold' data-aos="fade-right" data-aos-duration="800">Testimonial</h4>
              <h2 className='lg:text-4xl sm:text-3xl mt-5' data-aos="fade-right" data-aos-duration="800">What Our Patients Say</h2>
              </div>
              <figure>
              <img className='w-20 lg:w-48' src={quote} alt='' />
            </figure>
          </div>

          <div className='mt-4'>
            <Carousel responsive={responsive} infinite={true}>
              {reviews.map((review) => (
                <Review key={review._id} review={review}></Review>
              ))}
            </Carousel>
          </div>
        </section>
      );
    };

export default Testimonial;