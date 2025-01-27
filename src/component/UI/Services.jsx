import React from "react";
import Frontendimg from "../../assets/images/front-end.png";
import backendimg from "../../assets/images/backend.png";
import UIimg from "../../assets/images/design.png";
import appsimg from "../../assets/images/apps.png";
const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            What do i help
          </h2>
          <p className="lg:max-w-[600] lg:max-auto text-headingColor font-[500] text-[16px] leading-7">
            "Bringing your vision to life is what I do best. With expertise in a{" "}
            
            variety of technologies, I can help you turn your expectations into{" "}
            
            reality. Choose the technology, and I'll make it happen."
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm text-semibold">
              {/*============vertical line running through the middle ============== */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>
              {/*============vertical line running through the middle end ============== */}
              {/*============ card left ============== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Frontend Developer
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-6">
                          "Mastering the frontend craft with precision.
                          Proficient in HTML, CSS with a specialization in
                          Tailwind and Bootstrap. I bring functionality to life
                          with the art of JavaScript and DOM manipulation."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2
                    transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                    justify-center"
                  >
                    <figure>
                      <img src={Frontendimg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/*============ card left end ============== */}
              {/*============ card right end ============== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Backend Developer
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-6">
                          "Mastering Node.js for robust backend solutions,
                          optimizing efficiency with Express.js, and excelling
                          in data management with MongoDB."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2
                    transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                    justify-center"
                  >
                    <figure>
                      <img src={backendimg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/*============ card right end ============== */}
              {/*============ card left ============== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1400"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Mern Stack Developer
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-6">
                          "Continuously advancing my MERN stack skills:
                          enhancing UI/UX with React.js and mastering the art of
                          Node.js and MongoDB for expert web development."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2
                    transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                    justify-center"
                  >
                    <figure>
                      <img src={UIimg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/*============ card left end ============== */}
              {/*============ card right end ============== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Data Scienctist
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-6">
                          "Proficient in data science with Python, leveraging
                          key libraries such as NumPy, Pandas, Matplotlib, and
                          Scikit-Learn to analyze and extract valuable insights
                          from data."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2
                    transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                    justify-center"
                  >
                    <figure>
                      <img src={appsimg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/*============ card right end ============== */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
