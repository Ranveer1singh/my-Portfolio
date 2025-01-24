import React, { useState } from "react";
import data from "../../assets/data/portfolioData";
import ProjectDeatail from "./ProjectDeatail";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(3);
  const [portfolios, setPortfolios] = useState(data);
  const [projectDeatils, SetProjectDeatils] = useState("");
  const [model, setModel] = useState(false);

  const ProjectModel = (portfolio) => {    
    SetProjectDeatils(portfolio);
    setModel(true);
  };
  // // console.log('data', data);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7b sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My Recent Projects
            </h3>
          </div>

          <div className="flex gap-3">
            <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
              All
            </button>
            <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
              Web Design
            </button>
            <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
              Data science
            </button>
          </div>
        </div>

        {/* <div className="grid grid-cols-3 "> */}
        <div className="flex items-center justify-between flex-wrap mt-12 ">
          {portfolios?.slice(0, nextItems)?.map((Portfolio, index) => (
            <div
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              key={index}
              className="group max-w-full  mb-4 m:w-[48.5%] mb:w-[31.8%] lg:w-[32.2%] relative z-[1]"
              style={{
                height : "250px",
                // backgroundColor : "#dadada"
              }}
            >
              <figure className="w-full h-full">
                <img
                  className="rounded-[10px] h-full"
                  src={Portfolio.imgUrl[0]}
                  alt=""
                />
              </figure>
              <div className="w-full h-full bg-primaryolor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <button
                onClick={()=> ProjectModel(Portfolio)}
                className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200">
                  see details
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          {nextItems < portfolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              Load
            </button>
          )}
        </div>
        {model && (
          <ProjectDeatail  data={projectDeatils} model={model} closeModal={() => setModel(false)}/>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
