import { Link } from "react-router-dom";
import { CTA } from "../components";
import webdevIcon from '../assets/webdev-icon.svg';
import cloudIcon from '../assets/cloud-icon.svg';
import designIcon from '../assets/design-icon.svg';

const Deals = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Special{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Deals
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        At AIR-Moyen, we value our customers and always strive to provide the best services at competitive prices. For the next three months, enjoy a <span className='text-red-600 font-bold'>50% discount</span> on all our web development, cloud services, and graphic design offerings. <span className='text-blue-600 font-bold'>Hurry, the deal ends in November!</span>
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        <div className='lg:w-[400px] w-full'>
          <div className='block-container w-12 h-12'>
            <div className='btn-back rounded-xl bg-blue-500' />
            <div className='btn-front rounded-xl flex justify-center items-center'>
              <img
                src={webdevIcon}
                alt='Web Development'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
          <div className='mt-5 flex flex-col'>
            <h4 className='text-2xl font-poppins font-semibold'>
              Web Development
            </h4>
            <p className='mt-2 text-slate-500'>
              Professional and responsive websites tailored to your needs. Starting at $500.
            </p>
          </div>
        </div>

        <div className='lg:w-[400px] w-full'>
          <div className='block-container w-12 h-12'>
            <div className='btn-back rounded-xl bg-green-500' />
            <div className='btn-front rounded-xl flex justify-center items-center'>
              <img
                src={cloudIcon}
                alt='Cloud Services'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
          <div className='mt-5 flex flex-col'>
            <h4 className='text-2xl font-poppins font-semibold'>
              Cloud Services
            </h4>
            <p className='mt-2 text-slate-500'>
              Optimize your infrastructure with our cloud solutions. Starting at $300.
            </p>
          </div>
        </div>

        <div className='lg:w-[400px] w-full'>
          <div className='block-container w-12 h-12'>
            <div className='btn-back rounded-xl bg-red-500' />
            <div className='btn-front rounded-xl flex justify-center items-center'>
              <img
                src={designIcon}
                alt='Graphic Design'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
          <div className='mt-5 flex flex-col'>
            <h4 className='text-2xl font-poppins font-semibold'>
              Graphic Design
            </h4>
            <p className='mt-2 text-slate-500'>
              Creative designs to enhance your brand's visual identity. Starting at $150.
            </p>
          </div>
        </div>
      </div>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        We're always working on exciting projects. Stay tuned for more updates and check out some of our upcoming works soon.
      </p>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Deals;
