import "../index.css"


const Footer = () => {
  return (
    <section className="">
      <section className="pb-2  lg:pl-12 bg-blue-900 text-white font-poppins lg:block flex ">
        <h3 className="w-32 lg:w-full lg:ml-0 lg:text-2xl pt-10 text-xl font-semibold ml-10 mb-5 lg:mb-5">
          Travels And Tours
        </h3>

        <div className="flex justify-between md:gap-48">
          <div className="flex justify-between gap-5 lg:gap-60 lg:text-xl text-base  font-semibold pt-5">
            <div className="">
              <a href="#About">
                <p className="pb-3">About</p>
              </a>
              <a href="#Blog">
                <p className="pb-3">Blog</p>
              </a>
              <a href="#FAQ">
                <p className="pb-3">FAQ</p>
              </a>
              <a href="#T&T">
                <p className="pb-3">T&T</p>
              </a>
            </div>

            <div className="w-28 lg:w-full">
              <a href="#Contact">
                <p className="pb-3">Contact</p>
              </a>
              <a href="#Privacy-policy">
                <p className="pb-3">Privacy Policy</p>
              </a>
              <a href="#Terms-of-service">
                <p className="pb-3">Terms of Service</p>
              </a>
              <a href="#Security">
                <p className="pb-3">Security</p>
              </a>
            </div>
          </div>

          <div className="lg:flex gap-3 lg:mr-20 md:mt-10 mt-5">
            <div>
              <select className="bg-transparent border-2 p-3 lg:text-xl text-base mb-5 text-white">
                <option value="English">English</option>
                <option value="English">Others</option>
              </select>
            </div>

            <div>
              <select className="bg-transparent border-2 pl-3 pr-4 pt-3 pb-3 text-base lg:text-xl text-white lg:">
                <option value="Us">US</option>
                <option value="English">Others</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Footer