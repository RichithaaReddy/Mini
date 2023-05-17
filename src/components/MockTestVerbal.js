import React, { useEffect, useState } from "react";
import axios from "axios";
const MockTestVerbal = () => {
  const [timeLeft, setTimeLeft] = useState(20000); // 3 minutes
  const [answers, setAnswers] = useState(Array(10).fill(""));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

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



  // const status = axios.post("http://localhost:5000/MockTestVerbal",score)
  // .then((res)=>{
  //   console.log(res)
  // })

  const handleOptionChange = (event, questionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    let newScore = 0;
    answers.forEach((answer, index) => {
      if (answer === correctAnswers[index]) {
        newScore++;
      }
    });
    setScore(newScore);
    console.log("Answers:", answers);
    console.log("Score:", newScore);
    console.log(newScore)

    const data ={
      //email: "example@example.com", 
        typeofExam: "Verbal MockTest",
        answers: answers,
        score: newScore,
    };
 
  axios.post("/scorecard",data)
  .then((res)=>{
    console.log(res)
  })
  .catch((err)=>{
    console.log(err)
  })
};
  const optionA = "A";
  const optionB = "B";
  const optionC = "C";
  const optionD = "D";
  const correctAnswers = [optionA, optionB, optionB, optionB, optionB, optionB, optionB, optionB, optionB, optionB]; // Correct answers for each question

  return (
    <div className="min-h-screen">
      <div className="flex pt-7 flex-col items-center">
        <span className="text-3xl font-bold mb-4">Mock Test</span>
        {timeLeft > 0 && !isSubmitted ? (
          <div className="bg-gray-200 p-4 rounded-md">
            <p>Time Left: {timeLeft} seconds</p>
          </div>
        ) : (
          <div className="bg-gray-200 p-3 rounded-md">
            <p>Test Submitted!</p>
            <p>Score: {score}</p>
          </div>
        )}

        {timeLeft > 0 && !isSubmitted && (
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4 text-left">
              <p className="font-bold p-1">
                1. Read each sentence to find out whether there is any
                grammatical error in it.
              </p>
              <div className="flex flex-col gap-2">
                <p>
                  <label className="text-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question1"
                      value={optionA}
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                      A lot of travel delay is caused
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question1"
                      value={optionB}
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
                      value={optionC}
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
                      value={optionD}
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">No error.</span>
                  </label>
                </p>
              </div>
            </div>
            <div className="mb-4 text-left">
              <p className="font-bold  p-1 ">
                2. A sum of money at simple interest amounts to Rs. 815 in 3
                years and to Rs. 854 in 4 years. The sum is:
              </p>
              <div className="flex flex-col gap-2">
                <p>
                  {" "}
                  <label className="text-left  ">
                    <input
                      type="radio"
                      className="form-radio "
                      name="question2"
                      value={optionA}
                      onChange={(event) => handleOptionChange(event, 1)}
                    />
                    <span className="ml-2 p-1">Rs. 650</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question2"
                      value={optionB}
                      onChange={(event) => handleOptionChange(event, 1)}
                    />
                    <span className="ml-2 p-1">Rs. 690</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question2"
                      value={optionC}
                      onChange={(event) => handleOptionChange(event, 1)}
                    />
                    <span className="ml-2 p-1">Rs. 700 </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question2"
                      value={optionD}
                      onChange={(event) => handleOptionChange(event, 1)}
                    />
                    <span className="ml-2 p-1">Rs. 698 </span>
                  </label>
                </p>
              </div>
            </div>
            <div className="mb-4 text-left">
              <p className="font-bold  p-1 ">
                3. The cost price of 20 articles is the same as the selling
                price of x articles. If the profit is 25%, then the value of x
                is:
              </p>
              <div className="flex flex-col gap-2">
                <p>
                  {" "}
                  <label className="text-left  ">
                    <input
                      type="radio"
                      className="form-radio "
                      name="question3"
                      value={optionA}
                      onChange={(event) => handleOptionChange(event, 2)}
                    />
                    <span className="ml-2 p-1">15</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question3"
                      value={optionB}
                      onChange={(event) => handleOptionChange(event, 2)}
                    />
                    <span className="ml-2 p-1">16</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question3"
                      value={optionC}
                      onChange={(event) => handleOptionChange(event, 2)}
                    />
                    <span className="ml-2 p-1">18</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question3"
                      value={optionD}
                      onChange={(event) => handleOptionChange(event, 2)}
                    />
                    <span className="ml-2 p-1">25</span>
                  </label>
                </p>
              </div>
            </div>
            <div className="mb-4 text-left">
              <p className="font-bold  p-1 ">
                4. Two students appeared at an examination. One of them secured
                9 marks more than the other and his marks was 56% of the sum of
                their marks. The marks obtained by them are:
              </p>
              <div className="flex flex-col gap-2">
                <p>
                  {" "}
                  <label className="text-left  ">
                    <input
                      type="radio"
                      className="form-radio "
                      name="question4"
                      value={optionA}
                      onChange={(event) => handleOptionChange(event, 3)}
                    />
                    <span className="ml-2 p-1">39, 30</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question4"
                      value={optionB}
                      onChange={(event) => handleOptionChange(event, 3)}
                    />
                    <span className="ml-2 p-1">49, 32</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question4"
                      value={optionC}
                      onChange={(event) => handleOptionChange(event, 3)}
                    />
                    <span className="ml-2 p-1">42, 33 </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question4"
                      value={optionD}
                      onChange={(event) => handleOptionChange(event, 3)}
                    />
                    <span className="ml-2 p-1">43, 34</span>
                  </label>
                </p>
              </div>
            </div>
            <div className="mb-4 text-left">
              <p className="font-bold  p-1 ">
                5. The average weight of 8 person's increases by 2.5 kg when a
                new person comes in place of one of them weighing 65 kg. What
                might be the weight of the new person?
              </p>
              <div className="flex flex-col gap-2">
                <p>
                  {" "}
                  <label className="text-left  ">
                    <input
                      type="radio"
                      className="form-radio "
                      name="question5"
                      value={optionA}
                      onChange={(event) => handleOptionChange(event, 4)}
                    />
                    <span className="ml-2 p-1">76 kg</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question5"
                      value={optionB}
                      onChange={(event) => handleOptionChange(event, 4)}
                    />
                    <span className="ml-2 p-1">76.5 kg</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question5"
                      value={optionC}
                      onChange={(event) => handleOptionChange(event, 4)}
                    />
                    <span className="ml-2 p-1">85 kg </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question5"
                      value={optionD}
                      onChange={(event) => handleOptionChange(event, 4)}
                    />
                    <span className="ml-2 p-1">None of the above</span>
                  </label>
                </p>
              </div>
            </div>
            <div className="mb-4 text-left">
              <p className="font-bold  p-1 ">
                6. If log 27 = 1.431, then the value of log 9 is:
              </p>
              <div className="flex flex-col gap-2">
                <p>
                  {" "}
                  <label className="text-left  ">
                    <input
                      type="radio"
                      className="form-radio "
                      name="question6"
                      value={optionA}
                      onChange={(event) => handleOptionChange(event, 5)}
                    />
                    <span className="ml-2 p-1">0.934</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question6"
                      value={optionB}
                      onChange={(event) => handleOptionChange(event, 5)}
                    />
                    <span className="ml-2 p-1">0.945</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question6"
                      value={optionC}
                      onChange={(event) => handleOptionChange(event, 5)}
                    />
                    <span className="ml-2 p-1">0.954 </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question6"
                      value={optionD}
                      onChange={(event) => handleOptionChange(event, 5)}
                    />
                    <span className="ml-2 p-1">0.958 </span>
                  </label>
                </p>
              </div>
            </div>
            <div className="mb-4 text-left">
              <p className="font-bold  p-1 ">
                7. 8, 27, 64, 100, 125, 216, 343
              </p>
              <div className="flex flex-col gap-2">
                <p>
                  {" "}
                  <label className="text-left  ">
                    <input
                      type="radio"
                      className="form-radio "
                      name="question7"
                      value={optionA}
                      onChange={(event) => handleOptionChange(event, 6)}
                    />
                    <span className="ml-2 p-1">27</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question7"
                      value={optionB}
                      onChange={(event) => handleOptionChange(event, 6)}
                    />
                    <span className="ml-2 p-1">100</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question7"
                      value={optionC}
                      onChange={(event) => handleOptionChange(event, 6)}
                    />
                    <span className="ml-2 p-1">125</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question7"
                      value={optionD}
                      onChange={(event) => handleOptionChange(event, 6)}
                    />
                    <span className="ml-2 p-1">343</span>
                  </label>
                </p>
              </div>
            </div>
            <div className="mb-4 text-left">
              <p className="font-bold  p-1 ">
                8. In how many different ways can the letters of the word
                'LEADING' be arranged in such a way that the vowels always come
                together?
              </p>
              <div className="flex flex-col gap-2">
                <p>
                  {" "}
                  <label className="text-left  ">
                    <input
                      type="radio"
                      className="form-radio "
                      name="question8"
                      value={optionA}
                      onChange={(event) => handleOptionChange(event, 7)}
                    />
                    <span className="ml-2 p-1">360</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question8"
                      value={optionB}
                      onChange={(event) => handleOptionChange(event, 7)}
                    />
                    <span className="ml-2 p-1">480</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question8"
                      value={optionC}
                      onChange={(event) => handleOptionChange(event, 7)}
                    />
                    <span className="ml-2 p-1">720</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question8"
                      value={optionD}
                      onChange={(event) => handleOptionChange(event, 7)}
                    />
                    <span className="ml-2 p-1">5040</span>
                  </label>
                </p>
              </div>
            </div>
            <div className="mb-4 text-left">
              <p className="font-bold  p-1 ">
                9. In a mixture 60 litres, the ratio of milk and water 2 : 1. If
                this ratio is to be 1 : 2, then the quantity of water to be
                further added is:
              </p>

              <div className="flex flex-col gap-2">
                <p>
                  {" "}
                  <label className="text-left  ">
                    <input
                      type="radio"
                      className="form-radio "
                      name="question9"
                      value={optionA}
                      onChange={(event) => handleOptionChange(event, 8)}
                    />
                    <span className="ml-2 p-1">20 litres</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question9"
                      value={optionB}
                      onChange={(event) => handleOptionChange(event, 8)}
                    />
                    <span className="ml-2 p-1">30 litres</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question9"
                      value={optionC}
                      onChange={(event) => handleOptionChange(event, 8)}
                    />
                    <span className="ml-2 p-1">40 litres </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question9"
                      value={optionD}
                      onChange={(event) => handleOptionChange(event, 8)}
                    />
                    <span className="ml-2 p-1">60 litres </span>
                  </label>
                </p>
              </div>
            </div>
            <div className="mb-4 text-left">
              <p className="font-bold  p-1 ">
                10.Tea worth Rs. 126 per kg and Rs. 135 per kg are mixed with a
                third variety in the ratio 1 : 1 : 2. If the mixture is worth
                Rs. 153 per kg, the price of the third variety per kg will be:
              </p>
              <div className="flex flex-col gap-2">
                <p>
                  {" "}
                  <label className="text-left  ">
                    <input
                      type="radio"
                      className="form-radio "
                      name="question10"
                      value={optionA}
                      onChange={(event) => handleOptionChange(event, 9)}
                    />
                    <span className="ml-2 p-1">Rs. 169.50</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question10"
                      value={optionB}
                      onChange={(event) => handleOptionChange(event, 9)}
                    />
                    <span className="ml-2 p-1">Rs. 170</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question10"
                      value={optionC}
                      onChange={(event) => handleOptionChange(event, 9)}
                    />
                    <span className="ml-2 p-1">Rs. 175.50</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question10"
                      value={optionD}
                      onChange={(event) => handleOptionChange(event, 9)}
                    />
                    <span className="ml-2 p-1">Rs. 180 </span>
                  </label>
                </p>
              </div>
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
          <div className="bg-gray-200 p-3 rounded-md">
            <p>Time's up!</p>
            <p>Test Submitted!</p>
            <p>Score: {score}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MockTestVerbal;
