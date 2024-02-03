import React from 'react';

const Contact = () => {
    return (
        <div>
            <section id='contact' className="mt-10 h-screen overflow-hidden bg-white px-10">
                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div data-aos="fade-up" data-aos-duration="800" className="w-full md:w-3/4 flex items-center justify-center"> {/* Increased form width */}
                            <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12 w-full"> {/* Increased form width */}
                                <h2 data-aos="fade-up" data-aos-duration="800" className="text-3xl font-bold text-center mb-8">Connect With Us</h2> {/* Heading with AOS */}
                                <form>
                                    <div className="mb-6">
                                        <input type="text" placeholder="Your Name" className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none" />
                                    </div>
                                    <div className="mb-6">
                                        <input type="email" placeholder="Your Email" className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none" />
                                    </div>
                                    <div className="mb-6">
                                        <input type="text" placeholder="Your Phone" className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none" />
                                    </div>
                                    <div className="mb-6">
                                        <textarea rows={6} placeholder="Your Message" className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none" defaultValue={""} />
                                    </div>
                                    <div>
                                        <button type="submit" className="bg-primary border-primary w-full rounded border p-3 text-white transition hover:bg-opacity-90">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
