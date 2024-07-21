import { CTA } from "../components";
import { skills } from "../constants";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Welcome to{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          AIR-Moyen
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          AIR-Moyen is a leading web development business specializing in comprehensive web solutions, cloud services, and graphic design. We bring your digital dreams to life with creativity and technical expertise.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Our Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Our Services</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>We offer a wide range of services to meet your digital needs:</p>
        </div>

        <div className='mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <ServiceItem
            title="Web Development"
            description="Custom website design and development, e-commerce solutions, CMS integration, and more."
            price="Starting at $500"
          />
          <ServiceItem
            title="Cloud Services"
            description="Cloud infrastructure setup, maintenance, and optimization. Expertise in AWS, Azure, and Google Cloud."
            price="Starting at $300"
          />
          <ServiceItem
            title="Graphic Design"
            description="Branding, logo design, marketing materials, and other graphic design services to make your business stand out."
            price="Starting at $200"
          />
          <ServiceItem
            title="SEO Optimization"
            description="Improve your website's visibility on search engines and drive more organic traffic."
            price="Starting at $250"
          />
          <ServiceItem
            title="Content Creation"
            description="High-quality content creation for blogs, social media, and marketing campaigns."
            price="Starting at $150"
          />
          <ServiceItem
            title="Maintenance & Support"
            description="Ongoing website maintenance and technical support to ensure your site runs smoothly."
            price="Starting at $100/month"
          />
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

const ServiceItem = ({ title, description, price }) => (
  <div className='service-item p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
    <h4 className='text-xl font-poppins font-semibold text-blue-600'>{title}</h4>
    <p className='text-base text-slate-600 mt-2'>{description}</p>
    <p className='text-sm text-slate-500 mt-4 font-medium'>{price}</p>
  </div>
);

export default About;
