import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pd-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
          Get In Touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.734091139095!2d77.4556328742758!3d23.252761457700803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c420898a8122d%3A0x2a151b4464914273!2sIndrapuri%20A%20sector%2C%20Sector%20A%2C%20Indrapuri%2C%20Bhopal%2C%20Madhya%20Pradesh%20462022!5e0!3m2!1sen!2sin!4v1697001572897!5m2!1sen!2sin"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div
            className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg-flex items-center bg-indigo-100 
          px-4 lg:px-8 py-8"
          >
            <form className="w-full">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter Your email"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <textarea
                  type="text"
                  placeholder="write your massage"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <button className="w-full p-3 focus:outline-none rounded-[10px] 
              bg-smallTextColor text-headingColor hover:bg-headingColor hover:text-white text-center 
              ease-linear duration-150 ">Send Massage</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
// service_90q3fyh
// service_itn55pn