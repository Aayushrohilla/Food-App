import React from 'react';
import logo from '../assets/foodiemain.jpg';
import veggie from "../assets/veggie.avif";
import sushi from "../assets/sushi.avif";
import c1 from "../assets/c1.avif";
import c2 from "../assets/c2.avif";
import c3 from "../assets/c3.avif";
import c4 from "../assets/c4.avif";
import { Link, useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[rgb(255,82,0)] min-h-screen overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-20 gap-4">
        <img src={logo} alt="logo" className="h-[60px] md:h-[100px]" />

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-white text-sm sm:text-base">
          <p className="hover:underline cursor-pointer">foodie Corporate</p>
          <p className="hover:underline cursor-pointer">Partner with foodie</p>
          <button className="text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">
            Get the App <i className="fa-solid fa-arrow-right ml-2" />
          </button>
          <button className="bg-black px-4 py-2 rounded-lg hover:opacity-80 transition">
            Sign In
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="relative flex flex-col items-center md:flex-row md:justify-center px-4 md:px-0 overflow-hidden">
        {/* Left Image */}
        <img
          className="hidden md:block absolute left-0 bottom-0 h-[200px] md:h-[450px] w-[120px] md:w-[250px] object-cover"
          src={veggie}
          alt="veggie"
        />

        {/* Center Content */}
        <div className="w-full md:w-[70%] z-10 flex flex-col items-center gap-6 md:gap-10 text-center py-10">
          <h1 className="text-2xl md:text-[44px] text-white font-semibold leading-snug">
            Order food & groceries. <br className="hidden md:block" />
            Discover best restaurants. <span className="font-bold">Swiggy it!</span>
          </h1>

          {/* Search Bar */}
          <div className="w-full sm:w-[80%] md:w-[60%] relative">
            <input
              className="w-full h-[48px] md:h-[56px] rounded-lg p-4 text-sm md:text-base"
              type="text"
              placeholder="Search for restaurant, item or more"
            />
            <i className="fa-solid fa-magnifying-glass text-black absolute top-4 md:top-5 right-5" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full px-4 sm:px-0">
            <Link to="/restaurants">
              <img
                className="h-[110px] md:h-[220px] w-full object-contain rounded-md bg-white p-2"
                src={c1}
                alt="restaurants"
              />
            </Link>

            <img
              onClick={() => navigate('/instamart')}
              className="h-[110px] md:h-[220px] w-full object-contain rounded-md bg-white p-2 cursor-pointer"
              src={c2}
              alt="instamart"
            />

            <img
              className="h-[110px] md:h-[220px] w-full object-contain rounded-md bg-white p-2"
              src={c3}
              alt="card3"
            />

            <img
              className="h-[110px] md:h-[220px] w-full object-contain rounded-md bg-white p-2"
              src={c4}
              alt="card4"
            />
          </div>
        </div>

        {/* Right Image */}
        <img
          className="hidden md:block absolute right-0 bottom-0 h-[200px] md:h-[450px] w-[120px] md:w-[250px] object-cover"
          src={sushi}
          alt="sushi"
        />
      </div>
    </div>
  );
};

export default Landing;
