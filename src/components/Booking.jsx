import "../index.css"
import { Mail, Twitter, Instagram, Linkedin, Facebook } from "lucide-react";
import { useState } from "react";


const benefitCard = [
  {
    id: "01",
    image: "https://i.ibb.co/7J4Z75K/01.png",
    benefit: "No Booking Charges",
    tips: "We don't charge you an exra for bppking an hotel room with us",
  },

  {
    id: "02",
    image: "https://i.ibb.co/kqf39DJ/02.png",
    benefit: "No Cancellation Fees",
    tips: "We don’t charge you for a cancellation or modification fee in case plans change",
  },

  {
    id: "03",
    image: "https://i.ibb.co/ZmXhNvM/03.png",
    benefit: "Instant Confirmation",
    tips: "Instant booking confirmation whether booking online or via the telephone",
  },

  {
    id: "04",
    image: "https://i.ibb.co/wLzD9WX/04.png",
    benefit: "Flexible Booking",
    tips: "You can book up to a year in advance until the moment of your stay",
  },
];

const Benefits = ({ image, benefit,tips}) => {
    return (
      <div className="pb-10 ">
        <div className="flex gap-10 ">
          <img src={image} alt={benefit} className="h-20 w-20 " />
          <div className="text-white ">
            <h3 className=" text-lg font-500 mt-2 mb-1 drop-shadow-2xl">
              {benefit}
            </h3>
            <p className=" text-base font-500 mt-2 mb-1 drop-shadow-2xl">
              {tips}
            </p>
          </div>
        </div>
      </div>
    );
}



const Booking = () => {

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [userMessge, setUserMessage] = useState("")


  const handleChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      e.preventDefault();
      return setEmailError("please input a valid Email")
    } else {
      e.preventDefault()
      setUserMessage("We've sent you a confirmation email. Thank you for subscribing")
    }

  }


  return (
    <section
      className="bg-[url('https://i.ibb.co/y63VLgm/booking.png')] 
      // bg-no-repeat bg-cover font-poppins pl-10 pr-10 pb-10">
      <h3
        className="text-white text-2xl  font-extrabold h-12 
            pt-14 ">
        Book With Confidence
      </h3>
      <hr className="mt-14" />

      <div className="mt-10">
        {benefitCard.map((benefit) => {
          return (
            <div key={benefit.id}>
              <Benefits
                image={benefit.image}
                benefit={benefit.benefit}
                tips={benefit.tips}
              />
            </div>
          );
        })}
      </div>

      <form action="submit" className="bg-white pb-7 rounded-sm">
        <p className="text-2xl md:text-4xl mb-4 lg:pl-9 pl-5 pt-5 mt-20">
          Subscribe To Our Newsletter
        </p>

        <p className="lg:text-lg text-sm font-normal w-9/12 mb-8 pl-5 md:pl-9  ">
          Enter your email and we will update you on regular promotional emails
          packed with special offers, great deals and huge discount.
        </p>

        <div className="flex lg:gap-12 md:gap-10 sm:gap-5 pl-3 lg:pl-8 ">
          <label htmlFor="email" className="flex relative p-2 ">
            <span className="absolute pt-3 md:pt-5 left-0 flex  pl-4 md:pl-9 text-gray-500">
              <Mail />
            </span>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={handleChange}
              className="text-center lg:w-96 lg:pb-3  lg:pt-3 lg:pr-3 p-2 lg:text-lg pl-5  bg-gray-200 border-2 border-black outline-none"
            />
          </label>

          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-sky-900 md:w-52 w-24 lg:h-14 md:mt-2 lg:text-xl text-sm  text-white rounded-sm
                 hover:text-sky-800 hover:bg-slate-50 hover:border-2 hover:border-solid duration-1000">
            Subscribe
          </button>
        </div>
        {emailError && (
          <p className="text-red-400 pl-8 lg:pl-16 text-2xl ">{emailError}</p>
        )}
        {userMessge && (
          <p className="text-black border-solid border-5 bg-white  pl-5 pt-5 lg:pl-16 lg:text-2xl text-base ">{userMessge}</p>
        )}

        <hr className="text-gray-950 font-extrabold text-6xl mt-5 mb-2 w-full" />

        <p className="md:pl-9 md:text-2xl md:font-normal pl-5">
          Follow us on our socials
        </p>

        <div className=" flex gap-10 pt-5 lg:pl-9 pl-5 pb-5">
          <div className="border-solid border-2 p-4 border-black bg-slate-400 text-white rounded-lg">
            <Facebook />
          </div>
          <div className="border-solid border-2 p-4 border-black bg-slate-400 text-white rounded-lg">
            <Twitter />
          </div>
          <div className="border-solid border-2 p-4 border-black bg-slate-400 text-white rounded-lg">
            <Instagram />
          </div>
          <div className="border-solid border-2 p-4 border-black bg-slate-400 text-white rounded-lg shadow-2xl drop-shadow-lg">
            <Linkedin />
          </div>
        </div>
      </form>
    </section>
  ); 
}

export default Booking