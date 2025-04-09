import React from "react";

// Icons
const CourseraIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 1024 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="bg-white rounded-full border p-1"
  >
    <path
      fill="#0056D2"
      d="M861.9 653.2c-37.6 85.8-123.2 144.4-223.1 144.4H384c-132.5 0-240-107.5-240-240s107.5-240 240-240h272c69.5 0 129.6 28.5 173.6 74.4l-120.4 83.3H384c-34.8 0-63.1 28.3-63.1 63.1s28.3 63.1 63.1 63.1h271.9c93.4 0 171.9 62.8 206 149.7z"
    />
  </svg>
);

const DeepLearningIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="bg-white rounded-full border p-1"
  >
    <circle cx="50" cy="50" r="40" stroke="#F43F5E" strokeWidth="6" />
    <circle cx="50" cy="50" r="28" stroke="#F43F5E" strokeWidth="6" />
    <circle cx="50" cy="50" r="16" stroke="#F43F5E" strokeWidth="6" />
    <circle cx="50" cy="50" r="6" fill="#F43F5E" />
  </svg>
);

const DataCampIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-label="DataCamp" role="img" viewBox="0 0 512 512" width="35" height="35">
    <rect width="512" height="512" rx="15%" fill="#05192d"/>
    <path
      fill="#03EF62"
      d="m273.2 378.4v-95.3l150.4-85.8-36.6-20.9-113.8 64.9v-95.7c0-6.4-3.5-12.5-9.1-15.7L127.2 51.3a26.1 26.1 90 00-26.5.8A26.1 26.1 90 0088.4 74.4v268.9c0 9.1 4.6 17.5 12.3 22.3a26 26 90 0026.5.8l109.7-62.6V389c0 6.5 3.6 12.6 9.2 15.8l140.7 80.1 36.6-21-150.2-85.5zm-36.3-222.2V262l-112.2 64V91.8l112.2 64.4z"
    />
  </svg>
);

// Row-based data
const rows = [
  [
    { icon: <CourseraIcon />, label: "Machine Learning", link: "https://www.coursera.org/account/accomplishments/specialization/E1A1VCEKSQZP" },
    { icon: <CourseraIcon />, label: "Transformer Models and BERT Model", link: "https://www.coursera.org/account/accomplishments/verify/95MVNVREEF8H" },
    { icon: <DataCampIcon />, label: "Introduction to Data Science in Python", link: "https://www.datacamp.com/statement-of-accomplishment/course/660f8238e10ed34b61535e9523b114b939a8d0da?raw=1" }
  ],
  [
    { icon: <CourseraIcon />, label: "Deep Learning", link: "https://www.coursera.org/account/accomplishments/specialization/JL3AMF6XBJTP" },
    { icon: <CourseraIcon />, label: "Generative AI for Everyone", link: "https://www.coursera.org/account/accomplishments/verify/PAJCEY1HRMKJ" },
    { icon: <DeepLearningIcon />, label: "Pretraining LLMs", link: "https://learn.deeplearning.ai/accomplishments/83e08b71-af6f-47a5-b962-72be8c40430b?usp=sharing" }
  ],
  [
    { icon: <CourseraIcon />, label: "Natural Language Processing", link: "https://www.coursera.org/account/accomplishments/specialization/N8C64ON857ZO" },
    { icon: <DataCampIcon />, label: "Introduction to Python", link: "https://www.datacamp.com/statement-of-accomplishment/course/22460745f2da625c66abb75e8d682c037184f67b?raw=1" },
    { icon: <DeepLearningIcon />, label: "Large Multimodal Model Prompting with Gemini!", link: "https://learn.deeplearning.ai/accomplishments/2fa84eb7-251e-4e9f-a66f-63208d161447?usp=sharing" }
  ]
];

const Certificate = () => {
    return (
      <div className="max-w-6xl mx-auto mt-12 px-4">
        {/* Ensure the container is centered */}
        <div className="flex justify-center items-center flex-col gap-6">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-row justify-center gap-6">
              {row.map((cert, colIndex) => (
                <div
                  key={colIndex}
                  className="w-[350px] border-2 border-blue-400 shadow-md p-5 rounded-xl bg-white hover:scale-105 transition-transform"
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 text-center">
                    {cert.icon}
                    <p className="text-black font-semibold text-base">{cert.label}</p>
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Certificate;
