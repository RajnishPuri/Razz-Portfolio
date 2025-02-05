import React from 'react';
import Awsicon from '../icons/Awsicon';
import Cppicon from '../icons/Cppicon';
import Cssicon from '../icons/Cssicon';
import Dockericon from '../icons/Dockericon';
import Expressicon from '../icons/Expressicon';
import FirebaseIcon from '../icons/FirebaseIcon';
import Githubicon from '../icons/Githubicon';
import Htmlicon from '../icons/Htmlicon';
import Javascripticon from '../icons/Javascripticon';
import Mongoicon from '../icons/Mongoicon';
import Mysqlicon from '../icons/Mysqlicon';
import Nodeicon from '../icons/Nodeicon';
import Prismaicon from '../icons/Prismaicon';
import Reacticon from '../icons/Reacticon';
import Tailwindicon from '../icons/Tailwindicon';
import Typescripticon from '../icons/Typescripticon';

export default function About() {
  return (
    <div className="w-full flex flex-col overflow-x-hidden lg:p-4 p-2">
      <div className="w-full">
        <div className="text-white p-4 ">
          <div className="flex gap-2 mb-3">
            <h1 className="font-bold lg:text-5xl text-3xl text-[#FFA500]">About </h1>
            <h1 className="font-bold lg:text-5xl text-3xl">Myself</h1>
          </div>
          <div className="flex flex-col lg:flex-row p-4">
            <div className="h-fit gap-2 flex flex-col w-full lg:w-1/2">
              <div className="flex gap-2 font-medium text-xl">
                <p className="text-gray-400">Full Name: </p>
                <h1 className="text-[#ffa600]"> Rajnish Puri</h1>
              </div>
              <div className="flex gap-2 font-medium text-xl">
                <p className="text-gray-400">Age: </p>
                <p className="text-[#ffa600]"> 22</p>
              </div>
              <div className="flex gap-2 font-medium text-xl">
                <p className="text-gray-400">Nationality: </p>
                <p className="text-[#ffa600]"> Indian</p>
              </div>
              <div className="flex gap-2 font-medium text-xl">
                <p className="text-gray-400">Freelance: </p>
                <p className="text-[#ffa600]"> Available</p>
              </div>
              <div className="flex gap-2 font-medium text-xl">
                <p className="text-gray-400">Address: </p>
                <p className="text-[#ffa600]"> Bihar, India</p>
              </div>
            </div>
            <div className="h-fit gap-2 flex flex-col w-full lg:w-1/2 mt-4 lg:mt-0">
              <div className="flex gap-2 font-medium text-xl">
                <p className="text-gray-400">Email: </p>
                <p className="text-[#ffa600]"> rajnishpuri15@gmail.com</p>
              </div>
              <div className="flex gap-2 font-medium text-xl">
                <p className="text-gray-400">Language: </p>
                <p className="text-[#ffa600]"> Hindi, English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="text-white p-4">
          <div className="flex gap-2">
            <p className="font-bold lg:text-5xl text-3xl text-[#FFA500]">MY </p>
            <p className="font-bold lg:text-5xl text-3xl">EDUCATION</p>
          </div>

          <div className="flex flex-wrap w-full p-4">
            <div className="flex w-full lg:w-1/2 mb-3">
              <div className="ml-3">
                <h1 className="font-semibold text-2xl text-[#ffa600]">
                  Bihar Engineering University
                </h1>
                <p className="font-light text-sm text-gray-400">
                  Computer Science and Engineering (B.Tech)
                </p>
                <p>
                  <span className="text-gray-400 font-light text-sm">CGPA: </span>
                  <span className="text-[#ffa600] font-light text-sm">8.50</span>
                </p>
                <p className="font-light text-sm text-gray-400">2020-2024</p>
              </div>
            </div>
            <div className="flex w-full lg:w-1/2">
              <div className="ml-3">
                <h1 className="font-semibold text-2xl text-[#ffa600]">
                  Trident Public School
                </h1>
                <p className="font-light text-sm text-gray-400">
                  Intermediate
                </p>
                <p>
                  <span className="text-gray-400 font-light text-sm">Percentage: </span>
                  <span className="text-[#ffa600] font-light text-sm">86%</span>
                </p>
                <p className="font-light text-sm text-gray-400">2018-2020</p>
              </div>
            </div>
            <div className="flex w-full lg:w-1/2">
              <div className="ml-3">
                <h1 className="font-semibold text-2xl text-[#ffa600]">
                  D.A.V Public School
                </h1>
                <p className="font-light text-sm text-gray-400">
                  Matriculation
                </p>
                <p>
                  <span className="text-gray-400 font-light text-sm">Percentage: </span>
                  <span className="text-[#ffa600] font-light text-sm">80%</span>
                </p>
                <p className="font-light text-sm text-gray-400">2017-2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="text-white p-4">
          <div className="flex gap-2 lg:mb-3">
            <h1 className="font-bold text-5xl text-[#FFA500]">My </h1>
            <h1 className="font-bold text-5xl">Skills</h1>
          </div>
          <div className="flex flex-wrap w-full p-4"><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
            <Htmlicon />
            <Cssicon />
            <Typescripticon />
            <Javascripticon />
            <Cppicon />
            <Mongoicon />
            <Mysqlicon />
          </div>
          </div>
          <div className="flex flex-wrap w-full ml-4">
            <h4 className="form-text text-xl mt-12 mb-4 text-dark-blue-xxl dark:text-[#abb7db]">Libraries, Frameworks and Tools:</h4>
          </div>
          <div className="flex flex-wrap w-full p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
              <Reacticon />
              <Expressicon />
              <Nodeicon />
              <Prismaicon />
              <Tailwindicon />
              <FirebaseIcon />
              <Githubicon />
              <Dockericon />
              <Awsicon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
