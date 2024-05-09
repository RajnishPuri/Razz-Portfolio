import React, { useState, useEffect } from 'react';
// import {imagegif} from '../images/imagegif.gif'

export default function Home() {
  const terms = ["MERN Developer", "Hackathon Winner", "Learner", "Programmer", "Freelancer"];
  const [currentTermIndex, setCurrentTermIndex] = useState(0);
  const [displayedTerm, setDisplayedTerm] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(200); // Adjust typing speed as needed
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
      // Typing
      setDisplayedTerm(currentWord.substring(0, currentLength + 1));

      if (currentLength === currentWord.length) {
        // If finished typing, start deleting
        setIsDeleting(true);
        // Pause before deleting
        setTypingSpeed(200); // Adjust pause duration before deleting
      }
    } else {
      // Deleting
      setDisplayedTerm(currentWord.substring(0, currentLength - 1));

      if (currentLength === 0) {
        // If finished deleting, move to the next word
        setIsDeleting(false);
        setCurrentTermIndex((prevIndex) => (prevIndex + 1) % terms.length);
        // Pause before typing the next word
        setTypingSpeed(200); // Adjust pause duration before typing the next word
      }
    }
  };

  return (
    <div className="absolute left-64 w-[calc(100vw-18rem)] flex items-center h-screen example">
      {/* text part */}
      <div className="text-white w-1/2 p-14">
        <h1 className="font-bold text-6xl">Hi,</h1>
        <div className="flex">
          <p className="font-bold text-6xl mr-4">I'm</p>
          <h1 className="font-bold text-6xl ">
            <span className="">R</span>
            <span className="">a</span>
            <span className="">j</span>
            <span className="">n</span>
            <span className="">i</span>
            <span className="">s</span>
            <span className="">h</span>
            <span className="">,</span>
          </h1>
        </div>
        <div className="mt-3 mb-4">
        <span className="font-bold text-4xl text-[#FFA500]" style={{ minWidth: `${longestWordLength}ch`, display: 'inline-block' }}>{displayedTerm}|</span>
        </div>
        <p className=" font-light text-md">
                    I'm a passionate web developer and graphic designer. I believe in
                    success through hard work & dedication. I want to join in as
                    Professional life to gain exposure, confidence & a sense of
                    achievement.
                </p>
        <div className="flex flex-wrap gap-3 mt-3">
          {/* Additional content here */}
          <div className=" w-fit p-2 border bg-[#07101F] border-[#07101F] text-[#FFA500] cursor-pointer hover:text-white">
                        <p>Quick Learner</p>
                    </div>
                    <div className=" w-fit p-2 border bg-[#07101F] border-[#07101F] text-[#FFA500] cursor-pointer hover:text-white">
                       <p>Good Problem Solving Skill</p>
                   </div>
                   <div className=" w-fit p-2 border bg-[#07101F] border-[#07101F] text-[#FFA500] cursor-pointer hover:text-white">
                       <p>Tech Enthusiast</p>
                    </div>
                    <div className=" w-fit p-2 border bg-[#07101F] border-[#07101F] text-[#FFA500] cursor-pointer hover:text-white">
                        <p>Eco-Friendly Person</p>
                    </div>
                     <div className=" w-fit p-2 border bg-[#07101F] border-[#07101F] text-[#FFA500] cursor-pointer hover:text-white">
                        <p>Punctuality and Integrity</p>
                    </div>
        </div>
        <button className="w-fit p-2 border bg-[#07101F] border-white mt-8 hover:text-[#FFA500] duration-300 hover:border-[#07101F]">MY RESUME</button>
      </div>
      {/* Image Part */}
      <div className="w-1/2">
        <div className="rounded-xl w-fit overflow-hidden">
          <img className="" src="https://miro.medium.com/max/1785/0*7Q3yvSIv_t0ioJ-Z.gif" alt="" />
        </div>
      </div>
    </div>
  );
}
