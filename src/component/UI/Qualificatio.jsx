import React from "react";

const Qualificatio = () => {
  return (
    <section id="qualification">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h1 
          data-aos ="fade-down"
          data-aos-duration = "1000"
          data-aos-delay = "300"
          className="text-headingColor font-[800] text-[3rem] mb-5 border-b border-solid border-smallTextColor">
            Education{" "}
          </h1>
        </div>
        <div className="flex items-start justify-between">
          <div className="flex items-center mt-5 flex-col">
            <h3 className="text-smallTextColor text-[1.5rem] font-[500]">
              Full Stack Development
            </h3>
            <p>
              <ul>
                <li>Sheriyansh Coding school Bhopal</li>
                <li>Mern Stack Development</li>
                <li>
                  <span className="text-[1rem]">Jan/2023 - Dec/2023</span>
                </li>
              </ul>
            </p>
            <h3 className="text-smallTextColor text-[1.5rem] font-[500] mt-5">
              Master Of Computer Applications
            </h3>
            <p>
              <ul>
                <li>L.N.C.T University Bhopal</li>
                <li>AI/Ml</li>
                <li>SGPA = 7.8</li>
                <li>
                  <span className="text-[1rem]">Sept/2022 - June/2024</span>
                </li>
              </ul>
            </p>
            <h3 className="text-smallTextColor text-[1.5rem] font-[500] mt-5">
              Bachelors Of Computer Applicatio
            </h3>
            <p>
              <ul>
                <li>Barkatullah University Bhopal</li>
                <li>68.70%</li>
                <li>
                  <span className="text-[1rem]">july/2018 - June/2021</span>
                </li>
              </ul>
            </p>
          </div>
          <div className="flex items-center mt-5 flex-col">
            <h3 className="text-smallTextColor text-[1.5rem] font-[500]">
              Higher Secondary School
            </h3>
            <p>
              <ul>
                <li>Vardhaman Public School</li>
                <li>P.C.M</li>
                <li>58.94%</li>
                <li>
                  <span className="text-[1rem]">2017 - 2018</span>
                </li>
              </ul>
            </p>
            <h3 className="text-smallTextColor text-[1.5rem] font-[500] mt-5">
              Secondary School
            </h3>
            <p>
              <ul>
                <li>M.G.M Hr Sec School</li>
                <li>All Subject</li>
                <li>6.6 CGPA</li>
                <li>
                  <span className="text-[1rem]">2015 - 2016</span>
                </li>
              </ul>
            </p>
          </div>
          <div className="flex items-center text-center mt-5 flex-col">
            <h1 className="text-smallTextColor text-[1.5rem] font-[500]">
              Certificates
            </h1>
            <p>
              <ul>
                <li className="mt-4">
                  <a
                    className="hover:text-smallTextColor hover:font-[800] ease-in-out duration-400"
                    href="https://www.linkedin.com/posts/ranveer-singh-tomar-0896961b4_thesheriyanshcodingschool-html5-css-activity-7070313790239629314-z4DA?utm_source=share&utm_medium=member_desktop"
                  >
                   Sheriyansh coding school :- <br /> Front-End Wed-Development
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    className="hover:text-smallTextColor hover:font-[800] ease-in-out duration-400"
                    href="https://www.linkedin.com/posts/ranveer-singh-tomar-0896961b4_1000-free-courses-with-free-certificates-activity-7063194169048989696-eAB4?utm_source=share&utm_medium=member_desktop"
                  >
                   Great Learning :- <br />SQl Basic
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    className="hover:text-smallTextColor hover:font-[800] ease-in-out duration-400"
                    href="https://www.linkedin.com/posts/ranveer-singh-tomar-0896961b4_data-analysis-using-python-activity-7054140051902857217-R7-q?utm_source=share&utm_medium=member_desktop"
                  >
                    Samatrix.io :- <br />Data Analysis Using Python
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    className="hover:text-smallTextColor hover:font-[800] ease-in-out duration-400"
                    href="https://www.linkedin.com/posts/ranveer-singh-tomar-0896961b4_forage-certificate-activity-7108356716966129664-cou-?utm_source=share&utm_medium=member_desktop"
                  >
                    {" "}
                    Accenture :- <br />
                    Data Analytics and Visualization job Simulation
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    className="hover:text-smallTextColor hover:font-[800] ease-in-out duration-400"
                    href="https://www.linkedin.com/posts/ranveer-singh-tomar-0896961b4_nodejs-backenddev-neverstoplearning-activity-7118088957891874817-V0i9?utm_source=share&utm_medium=member_desktop"
                  >
                    Simplilearn :- <br /> Node JS{" "}
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    className="hover:text-smallTextColor hover:font-[800] ease-in-out duration-400"
                    href="https://www.linkedin.com/posts/ranveer-singh-tomar-0896961b4_ranveer-singh-tomar-has-successfully-completed-activity-7118087016126267392-zAnG?utm_source=share&utm_medium=member_desktop"
                  >
                    Simplilearn :- <br />React JS for beginners
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualificatio;
