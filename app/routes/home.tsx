import { useState } from "react";
import Logo from "~/components/icons/logo";
import Rules from "./Rules";
import { useNavigate } from "react-router";

const topics = [
  "Javascript Basic",
  "Angular Basic",
  "React.js Advance",
  "Flutter",
];

interface HomeProps {
  onStart: (data: { fullName: string; selectedTopic: string }) => void;
}

export default function Home({ onStart }: HomeProps) {
  const [fullName, setFullName] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [rules, setRules] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    if (fullName && selectedTopic) {
      // onStart({ fullName, selectedTopic });
      let userData = { name: fullName, topic: selectedTopic };
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/quiz");
    }
  };
  const openRules = (data: boolean) => {
    setRules(data);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col text-blue">
      <header className="px-8 py-4 border-b border-gray-200">
        <Logo />
      </header>
      {rules && <Rules onClose={openRules} />}
      <h2 className="text-4xl md:text-5xl transition-all lg:text-6xl xl:text-[64px] font-medium outfit text-gray-900 mb-4 flex items-center gap-2 justify-center pt-8">
        Welcome to
        <div className="flex gap-0">
          <span className="font-thin text-pink">QUIZ</span>
          <span className="font-bold text-pink">Mania</span>
        </div>
      </h2>

      <main className="flex items-center justify-center">
        <div className="bg-white p-8 pt-0 rounded-xl w-full max-w-xl">
          <div className="bg-gray-100 p-4 rounded-md text-gray-700 mb-6 mx-auto">
            Please read all the rules about this quiz before you start. <br />
            <span
              className="text-pink font-medium cursor-pointer"
              onClick={() => openRules(true)}
            >
              Quiz rules
            </span>
          </div>

          <div className="mb-4 lg:mb-8">
            <label className="block mb-1 font-medium text-gray-800">
              Full name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full name"
              className="w-full text-blue px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div className="mb-4 lg:mb-8">
            <p className="mb-2 font-medium text-gray-800">
              Please select topic to continue
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {topics.map((topic, i) => (
                <div key={topic}>
                  <input
                    id={`radioId_${i}`}
                    type="radio"
                    value={topic}
                    checked={selectedTopic === topic}
                    name="category"
                    className="hidden"
                    onChange={() => setSelectedTopic(topic)}
                  />
                  <label
                    htmlFor={`radioId_${i}`}
                    className={`flex items-center border border-gray-300 rounded-lg px-4 py-2 cursor-pointer text-blue gap-2 custom-radio ${
                      selectedTopic === topic
                        ? "border-pink-500 bg-pink-50 selected"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <span
                      className={`size-4 border rounded-full cursor-pointer radio-button ${
                        selectedTopic === topic
                          ? "bg-pink-300 border-pink-500"
                          : "border-gray-300"
                      }`}
                    ></span>
                    <span>{topic}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleStart}
            disabled={!fullName || !selectedTopic}
            className={`w-auto py-2 px-6 rounded-lg font-semibold text-white transition ${
              fullName && selectedTopic
                ? "bg-pink-500 hover:bg-pink-600"
                : "bg-pink opacity-40"
            }`}
          >
            Start Quiz
          </button>
        </div>
      </main>
    </div>
  );
}
