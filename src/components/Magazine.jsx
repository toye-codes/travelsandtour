import '../styles/Magazine.css'
import { ArrowRight, Twitter, Facebook, Linkedin } from "lucide-react";
import React from 'react'

const Magazine = () => {
  return (
    <section className="Magazine-section pl-10 pr-10 bg-slate-200 font-poppins pb-16" id='blog'>
      <div className="magazine-header">
        <h3 className="text-2xl font-bold pt-5 pb-3">Travel Magazine</h3>
        <button className="flex align-top gap-2 p-1.5 border-2 border-black  text-sm hover:bg-blue-500 hover:text-white hover:border-none hover:p-2 transition duration-500">
          View All
          <span>
            <ArrowRight size={24} />
          </span>
        </button>
      </div>

      <section className="magazine-info mt-10 p-4 bg-white">
        <h3 className="text-xl font-bold mb-1 ">
          Five Festivals to look forward to this year
        </h3>
        <p className="text-sm font-poppins">by Admin - 08.12.2024</p>
        <hr className=" border-black border-2 mt-2 mb-5 w-24" />
        <p className="mb-3">
          As we look ahead to the new year, there are several must-see festivals
          and events to mark on your calendar. From vibrant cultural
          celebrations to cutting-edge music lineups, these upcoming festivals
          promise an array of enriching experiences.
        </p>
        <p className="mb-3">
          Whether you're drawn to the dynamic energy of a world-class arts
          festival or the enchanting atmosphere of a traditional harvest
          celebration, there's something to pique every interest.
        </p>

        <p className="mb-3">
          These five festivals offer a tantalizing glimpse of the remarkable
          cultural diversity and artistic vitality waiting to be explored in the
          months to come. With a mix of time-honored traditions and innovative
          programming, each event is sure to leave a lasting impression on
          attendees.
        </p>
        <hr className="font-bold border-1 border-grey-400 w-full mt-2 mb-4 shadow-lg bg-black" />

        <div className="social-media flex justify-between gap-5">
          <div className="flex gap-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer">
              <Facebook
                size={40}
                className="border-2 border-gray-500 rounded-full p-2 text-gray-500"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer">
              <Twitter
                size={40}
                className="border-2 border-gray-500 rounded-full p-2 text-gray-500"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer">
              <Linkedin
                size={40}
                className="border-2 border-gray-500 rounded-full p-2 text-gray-500"
              />
            </a>
          </div>

          <div className="View More">
            <button className="flex align-top gap-2 p-1.5 border-2 border-black  text-sm hover:bg-blue-500 hover:text-white hover:border-none hover:p-2 transition duration-500">
              View More
              <span>
                <ArrowRight size={24} />
              </span>
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {articleCard.map((article) => (
            <Article
              key={article.id}
              image={article.image}
              name={article.name}
              date={article.date}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

const Article = ({ name, image, date }) => {
    return (
      <div className="blog-articles">
        <img src={image} alt={name} className="w-full" />

        <div className=" bg-slate-100 text-lg pt-2 pl-2 pb-2 rounded-sm">
          <p className="name font-400 text-xl pb-1">{name}</p>
          <p className='pb-2'> {date} </p>
        </div>
      </div>
    );
}


const articleCard = [
  {
    id: "thailaand",
    name: "Thailand by train eastern and oriental express",
    image: "https://i.ibb.co/B6W7K1m/Frame-35.png",
    date: `03.5.2024`,
  },

  {
    id: "NewYork",
    name: "Thailand by train eastern and oriental express",
    image: "https://i.ibb.co/RN38wPC/Frame-36.png",
    date: `03.5.2024`,
  },

  {
    id: "Germany",
    name: "Thailand by train eastern and oriental express",
    image: "https://i.ibb.co/7zDVy2s/Frame-37.png",
    date: `03.5.2024`,
  },

  {
    id: "Spain",
    name: "Thailand by train eastern and oriental express",
    image: "https://i.ibb.co/wJMj0vw/Frame-38.png",
    date: `03.5.2024`,
  },
];

// https://i.ibb.co/RN38wPC/Frame-36.png
// https://i.ibb.co/7zDVy2s/Frame-37.png
// https://i.ibb.co/wJMj0vw/Frame-38.png

export default Magazine