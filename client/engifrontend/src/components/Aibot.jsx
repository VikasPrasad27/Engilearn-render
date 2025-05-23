import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Aibot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take upto 10 seconds");
    try {
      const response = await axios({
        url: 'https://(your_openai_api_key)',
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <>
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-screen p-3 flex flex-col justify-center items-center">
    <form
      onSubmit={generateAnswer}
      className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center rounded-lg shadow-lg bg-white py-6 px-4 transition-all duration-500 transform hover:scale-105"
    >

        <h1 className="text-4xl font-bold text-blue-500 mb-4 animate-bounce">Chat AI</h1>
      
      <textarea
        required
        className="border border-gray-300 rounded w-full my-2 min-h-fit p-3 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask anything"
      ></textarea>
      <button
        type="submit"
        className={`bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300 ${
          generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={generatingAnswer}
      >
        Generate answer
      </button>
    </form>
    <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 h-[50vh] overflow-y-auto text-wrap text-center rounded-lg bg-white my-4 shadow-lg transition-all duration-500 transform hover:scale-105">
  <div className="p-4">
    <ReactMarkdown>{answer}</ReactMarkdown>
  </div>
</div>

  </div>
    </>
  );
}

export default Aibot;
