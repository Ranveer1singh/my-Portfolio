import React from "react";
const mynumber = "+91-8889332916";
function handleClick() {
  alert(`Reach Out ${mynumber}`)
}

const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex item-center">
      <div className="container">
        <div className="flex item-center justify-between">
          {/* =======logo========*/}
          <div className=" mt-4 flex items-center gap-[10px] ">
            <span
              className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] 
                    rounded-full flex items-center justify-center"
            >
              R
            </span>

            <div className="leading-[20px] p">
              <h2 className="text-xl text-smallTextColor font-[700]">Software</h2>
              <p className="text-smallTextColor text-[16px] font-[500]">
                Developer
              </p>
            </div>
          </div>
          {/*=========logo enn============== */}
          {/*=========menu start============== */}
          <div className="menu">
            <ul className="flex item-center gap-10">
              <li>
                <a className="text-smallTextColor font[600]" href="#about">About</a>
              </li>
              <li>
                <a className="text-smallTextColor font[600]" href="#services">Services</a>
              </li>
              <li>
                <a className="text-smallTextColor font[600]" href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a className="text-smallTextColor font[600]" href="#contact">Contact</a>
              </li>
              <li>
                <a className="text-smallTextColor font[600]" href="#achivements">Achivements</a>
              </li>
            </ul>
          </div>
          {/*=========menu end============== */}  
          {/*=========menu right============== */}
          <div className="flex items-center gap-4">
            <button onClick={handleClick} className="flex items-center gap-2 text-smallTextColor font[600] 
            border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px]
            hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-700">
            <i class="ri-send-plane-line"></i>Let's Talk
            </button>
            <span className="text-2xl text-smallTextColor md:hidden cursor-pointer"><i class="ri-menu-line"></i></span>
          </div>
          {/*=========menu right end============== */}
        </div>
      </div>
    </header>
  );
};

export default Header;
