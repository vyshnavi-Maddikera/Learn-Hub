import Image from 'next/image';
import React from 'react';
import AboutImg from '@/assets/about-bg.png'

const AboutPage = () => {
    return (
        <div className="min-h-screen mt-28 font-raleway">
            <div className="p-4 text-center">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="mt-2 text-lg">Discover LearnHub</p>
            </div>
            <div className="max-w-6xl mx-auto p-6">
                <Image
                    src={AboutImg}
                    alt="About Us"
                    className="w-full h-auto rounded-lg"
                />
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg p-4">
                        <h2 className="text-2xl font-semibold">Our Mission</h2>
                        <p className="mt-2">
                            At our educational platform, our mission is to make quality education accessible to everyone, everywhere. We believe that knowledge is the key to personal and societal growth. We're committed to providing a wide range of courses, from academic subjects to practical skills, to help learners reach their full potential.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg p-4">
                        <h2 className="text-2xl font-semibold">Expert Instructors</h2>
                        <p className="mt-2">
                            We take pride in our team of dedicated and expert instructors. Our educators are passionate about teaching and bring real-world experience to the virtual classroom. They are here to guide, inspire, and empower learners on their educational journey. You'll have the opportunity to learn from the best in every field.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg p-4">
                        <h2 className="text-2xl font-semibold">Community & Support</h2>
                        <p className="mt-2">
                            Learning is not just about lessons; it's about the connections you make. Our platform fosters a vibrant and inclusive community of learners. We encourage collaboration, discussion, and networking. Our support team is always ready to assist you. We're more than an educational platform; we're your learning family.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
