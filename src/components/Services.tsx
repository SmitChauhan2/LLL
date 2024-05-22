import React from 'react'
import ServiceCard from './ServiceCard';
export const Services = () => {
    const servicesData = [
        {
          title: 'Website Development',
          description: 'Crafting captivating web solutions: From sleek corporate websites to dynamic online experiences, we design with a focus on detail and our clients\' business goals, ensuring stunning visuals and seamless user engagement.',
        },
        {
          title: 'Mobile App Development',
          description: 'Creating intuitive and engaging mobile applications tailored to your business needs. Our apps offer seamless performance and a great user experience on both iOS and Android platforms.',
        },
        {
          title: 'Digital Marketing',
          description: 'Developing comprehensive digital marketing strategies that enhance online presence, drive traffic, and increase conversions. Our services include SEO, SEM, social media marketing, and content creation.',
        },
        {
          title: 'UI/UX Design',
          description: 'Designing user-centric interfaces that are visually appealing and easy to use. Our approach ensures a smooth user experience and enhances customer satisfaction.',
        },
        {
          title: 'Cloud Services',
          description: 'Providing scalable and secure cloud solutions that help businesses achieve operational efficiency. Our services include cloud migration, management, and support.',
        },
      ];
  return (
    <>
    <div className=' ml-10 mr-10 mb-5 flex flex-col lg:flex-row text-left py-20 lg:py-40 justify-between'>
      <div className='flex-1 space-y-8 lg:space-y-16'>
        <h1 className='text-4xl lg:text-6xl'>Unlock Our <span className='text-green-500'><br />Services</span></h1>
        <p className='text-gray-600'>
          We craft innovative & intuitive solutions that not only meet but exceed our clients' business goals, seamlessly blending creativity and functionality to <span className='text-green-500'>drive success</span>
        </p>
      </div>
      <div className='flex-1 h-auto lg:h-[340px] py-4 px-4 lg:px-8 overflow-y-scroll'>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  </>
  )
}
