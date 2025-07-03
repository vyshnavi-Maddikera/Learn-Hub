import Image from 'next/image'
import HomeImg from '../assets/home.png'
import FieldCard from '@/components/FieldCard';
import { Fields } from '@/data';
import OnlineEduImg from '../assets/online-edu.png'
import FeatureCard from '@/components/FeatureCard';

export default function Home() {

  return (
    <>
      <div className="p-6 mt-28 md:p-16 font-raleway">
        <div className="flex flex-col md:flex-row items-center justify-evenly">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight">
              Explore Quality Education & Courses
            </h1>
            <p className="mt-4 text-base md:text-xl lg:text-2xl">
              Unlock your potential with our diverse online courses.
            </p>
            <div className="relative flex items-center w-1/2 h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden mt-6 border border-gray-500">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search something.." />
            </div>
          </div>

          <Image src={HomeImg} alt="Online Education Image" />

        </div>
      </div>

      <div className="mx-auto p-8 lg:px-40 font-raleway">
        <h1 className="text-3xl font-semibold mb-8 text-center">Explore Different Fields</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {Fields.map((field, index) => (
            <FieldCard key={index} {...field} />
          ))}
        </div>
      </div>

      <div className="py-16  font-raleway">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
          Discover Our Awesome Features
        </h2>
        <div className="mx-auto flex flex-col-reverse lg:flex-row font-raleway items-center justify-center gap-5">
          {/* Image on the left */}

          <Image
            src={OnlineEduImg}
            alt="Feature Image"
            width={500}
            height={350}
            objectFit="cover"
          />


          {/* Heading and Description on the right */}
          <div className="w-full md:w-1/2 text-center md:text-left px-4">


            <div className="py-16">
              <div className="mx-auto">
                <FeatureCard
                  title="🌟"
                  description="Explore a world of knowledge and possibilities."
                  imageUrl="/your-image.jpg"
                  reverse={false}
                />

                <FeatureCard
                  title="📚"
                  description="Access a diverse range of courses and resources."
                  imageUrl="/your-image-2.jpg"
                  reverse={true}
                />
                <FeatureCard
                  title="🎓"
                  description="Learn from expert instructors and industry professionals."
                  imageUrl="/your-image.jpg"
                  reverse={false}
                />

                <FeatureCard
                  title="💡"
                  description="Expand your skills and unlock new career opportunities."
                  imageUrl="/your-image-2.jpg"
                  reverse={true}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

    </>

  )
}
