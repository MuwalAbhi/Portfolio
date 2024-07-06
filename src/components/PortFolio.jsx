import React from "react";
import pic from "../../public/abhi.jpg"

function PortFolio() {
 
  const cardItem = [
    {
      id: 1,
      logo: "https://th.bing.com/th/id/OIP.qtxvbuVcVvPSy-vYZlLwoQHaHa?w=162&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "BookStore",
      desc:"In this project I have created a web app where users can browse and read books.",
      link:"https://github.com/MuwalAbhi/BookStore/tree/main"
    },
    {
      id: 2,
      logo: pic,
      name: "portfolio",
      desc:"This is my portfolio project where I have presented my projects and experience.",
      link:"https://github.com/MuwalAbhi/Portfolio",
    },
    {
      id: 3,
      logo: "https://th.bing.com/th/id/OIP.Gumz-ykx_9V55B5Whie8rAHaHa?w=196&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "Online Voting System",
      desc:"Voters can vote using their voting id only once when the voting window is open.",
      link:""
    },
    {
      id: 4,
      logo: "https://th.bing.com/th?id=OIP.-wcXcPg9mUaWmMJuoWXgHgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      name: "RoomBooking",
      desc:"Users can browse different rooms and can book their selected room online.",
      link:"https://github.com/MuwalAbhi/HotelBooking",
    },
   
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name,desc ,link}) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                 {desc}
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
              <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"  >
                  Source code
                </button>
      </a>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
