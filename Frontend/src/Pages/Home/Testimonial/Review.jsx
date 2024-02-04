import React from 'react';

const Review = ({ review }) => {
    const { name, img, review: userReview, location } = review;

    return (
<<<<<<< HEAD
        <div className=" xl:w-4/5 h-auto mx-auto mb-8 md:mb-0" data-aos="fade-left" data-aos-duration="800">
=======
        <div className=" xl:w-4/5 h-auto mx-auto mb-8 md:mb-0" data-aos="fade-right" data-aos-duration="800">
>>>>>>> 36f7b4d1ef013de2007562ff79650c6b0960df9e
          <div className="card border-4 border-sky-500 shadow-xl">
            <div className="card-body p-4 md:p-6">
              <p className="text-sm md:text-base max-w-full overflow-ellipsis whitespace-normal break-words">{userReview}</p>
              <div className="flex items-center mt-4 md:mt-6">
                <div className="avatar mr-4 md:mr-6">
                  <div className="w-10 md:w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                    <img src={img} alt="" className="object-cover w-full h-full rounded-full" />
                  </div>
                </div>
                <div>
                  <h5 className="text-md md:text-lg">{name}</h5>
                  <p className="text-xs md:text-sm">{location}</p>
                </div>
              </div>
            </div>
            </div>
    </div>
  );
};

export default Review;