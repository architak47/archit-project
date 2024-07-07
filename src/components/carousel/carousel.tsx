"use client";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroSection from '@/components/homepage/hero-section';

interface HeroData {
  _id: number;
  imageSrc: string;
  titleOne: string;
  titleTwo: string;
  paragraph: string;
  buttonLabel: string;
}

const herodata: HeroData[] = [
  {
    _id: 1,
    imageSrc: "/Images/Illustration.svg",
    titleOne: "Lessons and insights",
    titleTwo: "from 8 years",
    paragraph: "Where to grow your business as a photographer: site or social media?",
    buttonLabel: "Register",
  },
  {
    _id: 2,
    imageSrc: "/Images/Illustration.svg",
    titleOne: "Lessons and insights",
    titleTwo: "from 8 years",
    paragraph: "Where to grow your business as a photographer: site or social media?",
    buttonLabel: "Register",
  },
  {
    _id: 3,
    imageSrc: "/Images/Illustration.svg",
    titleOne: "Lessons and insights",
    titleTwo: "from 8 years",
    paragraph: "Where to grow your business as a photographer: site or social media?",
    buttonLabel: "Register",
  },
];

export default function HeroCarousel() {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop
      autoPlay
      interval={2000}
      showStatus={false}
      showIndicators={true}
      className="bg-[#F5F7FA] h-screen px-14 lg:px-36"
    >
      {herodata.map((item) => (
        <HeroSection 
          key={item._id}
          imageSrc={item.imageSrc} 
          titleOne={item.titleOne} 
          titleTwo={item.titleTwo}  
          paragraph={item.paragraph} 
          buttonLabel={item.buttonLabel}
        />
      ))}
    </Carousel>
  );
}
