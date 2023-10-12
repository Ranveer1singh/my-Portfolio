import React from "react";

function Footer() {
  return (
    <footer className="bg-[#12141e] pt-12">
      {/*=============footer top ==============*/}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful product
            </h2>
            <a href="https://mail.google.com/mail/u/0/#inbox">
              <button
                className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300
                py-2 px-4 rounded-[8px]"
              >
                <i class="ri-mail-line"></i>Hire Me
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              "Thank you for exploring my portfolio – your visit is much
              appreciated! 🚀🌟"
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-white text-[15px] font-[600]">
                Follow Me
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-white text-[18px] font-[600]"
                >
                  <i class="ri-youtube-line"></i>
                </a>
              </span>
              <span>
                <a href="https://github.com/Ranveer1singh" className="text-white text-[18px] font-[600]">
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/ranveer-singh-tomar-0896961b4/"
                  className="text-white text-[18px] font-[600]"
                >
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#instagram"
                  className="text-white text-[18px] font-[600]"
                >
                  <i class="ri-instagram-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*=============footer top end ==============*/}
    </footer>
  );
}

export default Footer;
