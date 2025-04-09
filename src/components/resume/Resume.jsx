import React from "react";

const Resume = () => {
  return (
    <div id="education" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Education
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-blue-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}

              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                PhD Stuent <br />
                Research Topic: Multimodal Aspect-Based Sentiment Analysis
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Faculty of Sciences - Fez
                </span>
                <span className=" text-[.9rem] font-semibold text-green-500 sm:text-base">
                  2024 – 2025
                </span>
              </div>
            </div>
            <br/>
            <div className=" relative">

              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Master Degree in Data Science and Intelligent Systems 
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Multidisciplinary Faculty - Nador
                </span>
                <span className=" text-[.9rem] font-semibold text-green-500 sm:text-base">
                  2022 –  2024
                </span>
              </div>
            </div>
            <br/>
            <div className=" relative">
              {/* design */}
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Bachelor of Science in Mathematics and Computer Science
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Polydisciplinary Faculty - Ouarzazate
                </span>
                <span className=" text-[.9rem] font-semibold text-green-500 sm:text-base">
                  2019 –  2022
                </span>
              </div>
            </div>

            <br/>
            <div className=" relative">
              {/* design */}
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                 Bachelor in Life and Earth Sciences
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                high school - Assoul Tinghir
                </span>
                <span className=" text-[.9rem] font-semibold text-green-500 sm:text-base">
                   2018 –  2019
                </span>
              </div>
            </div>

          </fieldset>
        </div>

      </div>
    </div>
  );
};

export default Resume;
