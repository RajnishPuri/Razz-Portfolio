import React from 'react';
import { useState, useEffect } from 'react';

export default function Home() {
  const terms = ["MERN Developer", "Hackathon Winner", "Learner", "Programmer", "Freelancer"];
  const [currentTermIndex, setCurrentTermIndex] = useState(0);
  const [displayedTerm, setDisplayedTerm] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(200);
  const longestWordLength = Math.max(...terms.map(term => term.length));

  useEffect(() => {
    const interval = setInterval(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [displayedTerm, isDeleting, typingSpeed]);

  const handleTyping = () => {
    const currentWord = terms[currentTermIndex];
    const currentLength = displayedTerm.length;

    if (!isDeleting) {
      setDisplayedTerm(currentWord.substring(0, currentLength + 1));
      if (currentLength === currentWord.length) {
        setIsDeleting(true);
        setTypingSpeed(200);
      }
    } else {
      setDisplayedTerm(currentWord.substring(0, currentLength - 1));
      if (currentLength === 0) {
        setIsDeleting(false);
        setCurrentTermIndex((prevIndex) => (prevIndex + 1) % terms.length);
        setTypingSpeed(200);
      }
    }
  };
  return (
    <div className="w-full lg:h-screen flex flex-col lg:flex-row items-center justify-center p-4 lg:p-14 text-white lg:mt-0">
      <div className="text-center lg:text-left w-full lg:w-1/2">
        <h1 className="font-bold text-4xl md:text-6xl">Hi,</h1>
        <div className="flex justify-center lg:justify-start mt-2">
          <p className="font-bold text-4xl md:text-6xl mr-2">I&apos;m</p>
          <h1 className="font-bold text-4xl md:text-6xl">Rajnish,</h1>
        </div>
        <div className="mt-3 mb-4">
          <span
            className="font-bold text-2xl md:text-4xl text-[#FFA500]"
            style={{ minWidth: `${longestWordLength}ch`, display: 'inline-block' }}
          >
            {displayedTerm}|
          </span>
        </div>
        <p className="font-light text-sm md:text-md leading-relaxed max-w-lg mx-auto lg:mx-0">
          I am a passionate developer who thrives on learning, problem-solving, and building meaningful solutions. With dedication and a growth mindset, I aim to contribute, innovate, and make a difference.
        </p>
        <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
          {["Quick Learner", "Good Problem Solving Skill", "Tech Enthusiast", "Eco-Friendly Person", "Punctuality and Integrity"].map((skill, index) => (
            <div
              key={index}
              className="w-fit p-2 border bg-[#07101F] border-[#FFA500] text-[#fff] cursor-pointer hover:text-white transition-colors duration-300"
            >
              <p>{skill}</p>
            </div>
          ))}
        </div>
        <button className="w-fit p-2 border bg-[#07101F] border-white mt-8 hover:text-[#FFA500] hover:border-[#FFA500] duration-300" onClick={() => window.open("https://drive.google.com/file/d/1LKSVmPaNZX80pYxBdIRoRAFhGKStYL82/view?usp=sharing", "_blank")}>
          MY RESUME
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0 lg:mb-0 mb-10">
        <div className="rounded-xl overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <img className="w-full h-auto" src="https://miro.medium.com/max/1785/0*7Q3yvSIv_t0ioJ-Z.gif" alt="Developer GIF" />
        </div>
      </div>
    </div>
  );
}
