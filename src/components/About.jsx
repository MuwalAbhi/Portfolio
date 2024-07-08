import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import flutter from "../../public/flutter.jpeg";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";
import cpp from "../../public/cpp.jpeg";
import mySQL from "../../public/mysql.jpeg";
import mongodb from "../../public/mongodb.jpg";
import reactjs from "../../public/reactjs.png";
import node from "../../public/node.png";
function About() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id:5,
      logo: cpp,
      name:"C++",
    },
    {
      id:6,
      logo: flutter,
      name:"flutter",
    },
    {
      id:7,
      logo:mySQL,
      name:"mySQL"
    },
    {
      id:8,
      logo:mongodb,
      name:"MongoDB"
    },
    {
      id:9,
      logo:reactjs,
      name:"ReactJs"
    },
    {
      id:10,
      logo:node,
      name:"NodeJs"
    }
  ];
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Abhishek, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        {/* <span>
        ● Class X &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;91.67%, <br />
        &nbsp;&nbsp;&nbsp;&nbsp;Pragati Public Sr. Sec. School Kota <br />
        ●  Class XII &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;96.60% <br />
        &nbsp;&nbsp;&nbsp;&nbsp; Saraswati Sr. Sec. School Kota
        <br />
        </span> */}
        <br />
        <span className="font-semibold "> 
        ● Bachelor of Technology(B.Tech),  2021-2025</span><span>
       
        <br />
        &nbsp;&nbsp;&nbsp;PDPM IIITDMJ Jabalpur
        <br />
        &nbsp;&nbsp;&nbsp;Major in Computer Science & Engineering,
        <br />
        &nbsp;&nbsp;&nbsp;Relevant Courses: <br />
        &nbsp;&nbsp;&nbsp;   Data Structure & Algorithms, Data Science ,DataBase Management System, Computer Network, Operating System, OOPS, Next Generation Networks, Java &nbsp;&nbsp;&nbsp;Programming , Software Engineering , Artificial Intelligence, Cryptography.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
        <br />
       
        
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
         
          ●	 Get a rank of 15 in class 12 exams <br />
          ●	3* on Codechef  <br />
●400+ problem solved on Leetcode	 <br />
●Maintained a streak of 140 days on Leetcode	<br />
● Winner of IT Competition (2020)conducted by Govt. of Rajasthan.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
         Aim
        </h1>
        <p>
          My aim is to leverage my skills and creativity to deliver
          innovative software development solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
