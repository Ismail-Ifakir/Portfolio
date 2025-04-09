import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

const leftColumn = [
  {
    title: "Sentiment Analysis of Moroccan Arabic Dialect",
    description:
      "Master’s Degree Completion Project: DrijaBERT for embedding; CNN, LSTM, BiLSTM, and GRU as base classifiers; Logistic Regression as the meta-classifier; and Streamlit for the web application.",
    link: "https://github.com/Ismail-Ifakir/Sentiment-Analysis-of-Moroccain-Arabic-Dialect",
  },
  {
    title: "Multimodal Aspect-Based Sentiment Analysis",
    description:
      "RoBERTa for text embedding, ViT for image embedding and LSTM as the classifier.",
    link: "https://github.com/Ismail-Ifakir",
  },
  {
    title: "Generate Question from CVs",
    description:
      "Internship at 3D Smart Factory: Developed a question generation pipeline using spaCy, RoBERTa, SBERT, and Gemini API.",
    link: "https://github.com/Ismail-Ifakir",
  },
];

const rightColumn = [
  {
    title: "Speaker recognition",
    description: "Deep Learning: CNN",
    link: "https://github.com/Ismail-Ifakir/Speakers-Recognition",
  },
  {
    title: "Intrusion detection systems",
    description: "Classification of Normal and Attack messages using ML.",
    link: "https://github.com/Ismail-Ifakir/Intrusion-detection-systems",
  },
];

const WorkCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-12">
      <div className="flex justify-center gap-12 sm:flex-col sm:items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-10 items-center">
          {leftColumn.map((proj, index) => (
            <div
              key={index}
              className="w-[500px] min-h-[240px] border-2 border-blue-400 shadow-md p-4 rounded-lg flex flex-col justify-between"
            >
              <div>
                <h1 className="text-[1.2rem] font-semibold mb-2">{proj.title}</h1>
                <p className="text-[.9rem] font-semibold text-gray-500">{proj.description}</p>
              </div>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                >
                  <AiOutlineGithub className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                  <span className="text-black">Code</span>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-10 items-center">
          {rightColumn.map((proj, index) => (
            <div
              key={index}
              className="w-[500px] min-h-[240px] border-2 border-blue-400 shadow-md p-4 rounded-lg flex flex-col justify-between"
            >
              <div>
                <h1 className="text-[1.2rem] font-semibold mb-2">{proj.title}</h1>
                <p className="text-[.9rem] font-semibold text-gray-500">{proj.description}</p>
              </div>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                >
                  <AiOutlineGithub className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                  <span className="text-black">Code</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
