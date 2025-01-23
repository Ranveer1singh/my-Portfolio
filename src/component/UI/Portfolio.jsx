import React, {useState} from "react";
import data from "../../assets/data/portfolioData";

const Portfolio = () => {

  const [nextItems,setNextItems] = useState(3);
  const [portfolios,setPortfolios] = useState(data);
console.log('data', data);

  const loadMoreHandler = () => {
    setNextItems(prev => prev+3)
  }

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

        <div className="flex items-center justify-between flex-wrap mt-12">
          {portfolios?.slice(0,nextItems)?.map((Portfolio, index) => (
            <div
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration ="1000"
              key={index} // You should add a unique key to each mapped element
              className="group max-w-full sm:w-[48.5%] mb:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img className="rounded-[10px]" src={Portfolio.imgUrl} alt="" />
              </figure>
              <div className="w-full h-full bg-primaryolor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <button className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200">
                  see details
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">

            {
              nextItems <   portfolios.length && data.length > 6 && (<button onClick={loadMoreHandler}
              className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
              >Load</button>
    
            )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
