import { useEffect, useRef,useState } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const Home = () => {
    const el = useRef(null);

    const [show, setShow] = useState(false);
    const toggle = () => {
      setShow(!show);
    };

    useEffect(() => {
        const typedInstance = new Typed(el.current, {
          strings: ["<i>Your next home is just around the corner – let's find it together....</i>", "One simple search..."],
          typeSpeed: 100,
          smartBackspace: true,
          loop: true,
          showCursor: false,
        });
        return () => {
            typedInstance.destroy();
          };
        }, []);

    return(
        <>
        <section className="text-gray-600 relative">
          <div className="absolute inset-0 " style={{ backgroundImage: `url('https://ik.imagekit.io/Steve2003/todd-kent-178j8tJrNlc-unsplash.jpg?updatedAt=1717736128518')`, backgroundSize: 'cover', backgroundAttachment:'fixed' ,backgroundPosition: 'center', filter: 'blur(5px)', zIndex: -1 }}></div>
          <div className="container px-5 py-24 mx-auto relative z-10">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <div className="text-gray-900" ref={el}></div>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Discover Your Dream Home
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded" />
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-900">
                Explore a curated selection of homes tailored to your unique lifestyle. From modern apartments to charming houses, we help you find the perfect place to call home. Start your journey with us and experience seamless, personalized service every step of the way.
              </p>
            </div>
            <div className="flex flex-wrap -m-4  justify-center items-center" >
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6  rounded-md max-w-sm mx-auto h-auto shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://ik.imagekit.io/Steve2003/adam-winger-A4U4dEuN-hw-unsplash.jpg?updatedAt=1717732275106"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    BUY
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Find Your Perfect Home
                  </h2>
                  <p className="leading-relaxed text-base">
                    Discover a wide range of homes for sale, from cozy starter homes to luxurious estates. Our extensive listings and expert advice will guide you to the perfect purchase.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6  rounded-md max-w-sm mx-auto h-auto shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
                  <Link to="/Rent" onClick={toggle}>
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://ik.imagekit.io/Steve2003/jan-jakub-nanista-UHyrjKPsshk-unsplash.jpg?updatedAt=1717732358618"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    RENT
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Affordable Rentals for Every Budget
                  </h2>
                  <p className="leading-relaxed text-base">
                    Explore our rental listings to find your next apartment or house. We offer a variety of options to suit your lifestyle and budget, with flexible lease terms and comprehensive support.
                  </p>
                  </Link>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6  rounded-md max-w-sm mx-auto h-auto shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://ik.imagekit.io/Steve2003/vu-anh-TiVPTYCG_3E-unsplash.jpg?updatedAt=1717732487979"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    COMMERCIAL
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Prime Commercial Properties
                  </h2>
                  <p className="leading-relaxed text-base">
                    Find the ideal commercial space for your business. Our listings include retail, office, and industrial properties in prime locations, tailored to meet your business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </section>
        <div className="bg-gradient-to-r from-lime-100 to-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div>
        <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto ">
          <img
            src="https://ik.imagekit.io/Steve2003/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg?updatedAt=1717747311877"
            loading="lazy"
            alt="Photo by Martin Sanchez"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="md:pt-8">
        <p className="text-center font-bold text-indigo-500 md:text-left">
          Who we are
        </p>
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
          Our competitive advantage
        </h1>
        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
          At HastyHomes Realty, we believe in making your home search as seamless and enjoyable as possible. With a decade of experience in the real estate market, we have the expertise and resources to help you find the perfect home. Our dedicated team of professionals is committed to providing personalized service tailored to your unique needs.
          <br />
          <br />
          We offer a curated selection of homes, from modern apartments to charming houses, ensuring that every client finds their ideal living space. Our comprehensive listings, expert advice, and commitment to customer satisfaction set us apart from the competition.
        </p>
        <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
          About us
        </h2>
        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
          Founded in 2010, HastyHomes Realty has grown into a trusted name in real estate. Our mission is to help you navigate the home buying or renting process with ease and confidence. Whether you’re looking for your first home or seeking a lucrative investment property, we are here to assist you every step of the way.
          <br />
          <br />
          We pride ourselves on our transparency, integrity, and commitment to excellence. Our team is always ready to go the extra mile to ensure that your real estate journey is smooth and successful.
        </p>
      </div>
    </div>
  </div>
</div>


        </>
    );
};

export default Home;