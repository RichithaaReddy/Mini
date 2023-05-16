import React from "react";
import { useEffect, useState } from "react";
const MockTestTech = () => {
  const [timeLeft, setTimeLeft] = useState(20000); // 3 minutes
  const [answers, setAnswers] = useState(Array(2).fill("")); // array to store answers for 2 questions
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    let timer;
    if (timeLeft > 0 && !isSubmitted) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted]);

  const handleOptionChange = (event, questionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    console.log("Answers:", answers);
  };

  return (
    <div className="min-h-screen">
      <div className="flex pt-7 flex-col items-center ">
        <span className="text-3xl font-bold mb-4">Mock Test</span>
        {timeLeft > 0 && !isSubmitted ? (
          <div className="bg-gray-200 p-4 rounded-md">
            <p>Time Left: {timeLeft} seconds</p>
          </div>
        ) : (
          <div className="bg-gray-200 p-3 rounded-md">
            <p>Test Submitted!</p>
          </div>
        )}

        {timeLeft > 0 && !isSubmitted && (
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4 text-left">
              <p className="font-bold  p-1 ">
                1. Read each sentence to find out whether there is any
                grammatical error in it.
              </p>
              <div className="flex flex-col gap-2">
                <p>
                  {" "}
                  <label className="text-left  ">
                    <input
                      type="radio"
                      className="form-radio "
                      name="question1"
                      value="A"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                      A lot of travel delay is caused{" "}
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question1"
                      value="B"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                      due to the inefficiency and lack of good management
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question1"
                      value="C"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">on behalf of the railways</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question1"
                      value="C"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">No error.</span>
                  </label>
                </p>
              </div>
            </div>
            <div className="mb-4 text-left">
              <p className="font-bold">Question 2:</p>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="question2"
                  value="A"
                  onChange={(event) => handleOptionChange(event, 1)}
                />
                <span className="ml-2">Option A</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="question2"
                  value="B"
                  onChange={(event) => handleOptionChange(event, 1)}
                />
                <span className="ml-2">Option B</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="question2"
                  value="C"
                  onChange={(event) => handleOptionChange(event, 1)}
                />
                <span className="ml-2">Option C</span>
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              disabled={timeLeft === 0}
            >
              Submit
            </button>
          </form>
        )}
        {timeLeft === 0 && (
          <div className="bg-gray-200 p-4 rounded-md mt-4">
            <p>Time's up! The questions are no longer available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MockTestTech;
