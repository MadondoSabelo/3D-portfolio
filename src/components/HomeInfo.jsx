import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1) {
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Welcome to
        <span className='font-semibold mx-2 text-white'>AIR-Moyen</span>
        👋
        <br />
        Your Premier Web Development Partner
      </h1>
    );
  }

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          We specialize in web development, cloud services, and graphic design. <br />
          Our team has years of experience and a track record of success.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Discover our portfolio and see the projects we've led to success. <br />
          Our work speaks for itself.
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          View our work
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Ready to start your project or need a consultation? <br />
          We're here to help.
        </p>

        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Get in touch
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
