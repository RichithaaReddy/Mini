import React from "react";
import { useEffect, useState } from "react";
const MockTestVerbal = () => {
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
              <p className="font-bold  p-1 ">
              2. Choose the ANTONYM of the word: EXODUS</p>
              <div className="flex flex-col gap-2">
                <p>
                  {" "}
                  <label className="text-left  ">
                    <input
                      type="radio"
                      className="form-radio "
                      name="question2"
                      value="A"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                      Influx
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question2"
                      value="B"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                     Home-coming
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question2"
                      value="C"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">Return</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question2"
                      value="C"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">Restoration</span>
                  </label>
                </p>
              </div>
            </div><div className="mb-4 text-left">
              <p className="font-bold  p-1 ">
              3. If the room had been brighter, 
              I would have been able to read for a while before bed time.
              </p>
              <div className="flex flex-col gap-2">
                <p>
                  {" "}
                  <label className="text-left  ">
                    <input
                      type="radio"
                      className="form-radio "
                      name="question3"
                      value="A"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                    If the room was brighter 
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question3"
                      value="B"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                    If the room are brighter
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question3"
                      value="C"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">Had the room been brighter</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question3"
                      value="C"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">No Improvement </span>
                  </label>
                </p>
              </div>
            </div><div className="mb-4 text-left">
              <p className="font-bold  p-1 ">
              4. Choose the one which can be substituted for the given word/sentence. <br/>
              Extreme old age when a man behaves like a fool
              </p>
              <div className="flex flex-col gap-2">
                <p>
                  {" "}
                  <label className="text-left  ">
                    <input
                      type="radio"
                      className="form-radio "
                      name="question4"
                      value="A"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                  Imbecility
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question4"
                      value="B"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                    Senility
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question4"
                      value="C"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">Dotage</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question4"
                      value="C"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">Superannuation</span>
                  </label>
                </p>
              </div>
            </div><div className="mb-4 text-left">
              <p className="font-bold  p-1 ">
              5. Despite his best efforts to conceal his anger ......
              </p>
              <div className="flex flex-col gap-2">
                <p>
                  {" "}
                  <label className="text-left  ">
                    <input
                      type="radio"
                      className="form-radio "
                      name="question5"
                      value="A"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                    we could detect that he was very happy 
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question5"
                      value="B"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                    he failed to give us an impression of his agony 
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question5"
                      value="C"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">he could succeed in doing it easily </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question5"
                      value="C"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">people came to know that he was annoyed </span>
                  </label>
                </p>
              </div>
            </div><div className="mb-4 text-left">
              <p className="font-bold  p-1 ">
              6.Choose the correct meaning of proverb<br/>
              To keeps one's temper
              </p>
              <div className="flex flex-col gap-2">
                <p>
                  {" "}
                  <label className="text-left  ">
                    <input
                      type="radio"
                      className="form-radio "
                      name="question6"
                      value="A"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                    To become hungry 
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question6"
                      value="B"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                    To be in good mood 
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question6"
                      value="C"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">To preserve ones energy </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question6"
                      value="C"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">To be aloof from </span>
                  </label>
                </p>
              </div>
            </div><div className="mb-4 text-left">
              <p className="font-bold  p-1 ">
              7.From the given alternatives, 
              choose the one which best expresses the given sentence in Indirect/Direct speech.<br/>
              I told him that he was not working hard.
              </p>
              <div className="flex flex-col gap-2">
                <p>
                  {" "}
                  <label className="text-left  ">
                    <input
                      type="radio"
                      className="form-radio "
                      name="question7"
                      value="A"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                    I told to him, "You are not working hard."
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question7"
                      value="B"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                    I said to him, "You are not working hard." 
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question7"
                      value="C"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">I said, "You are not working hard."</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question7"
                      value="C"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">I said to him, "He is not working hard." </span>
                  </label>
                </p>
              </div>
            </div><div className="mb-4 text-left">
              <p className="font-bold  p-1 ">
              8.Join these parts to make a meaningful sentence<br/>
              1. of	2. we	3. heard 4. him	5. had
              </p>
              <div className="flex flex-col gap-2">
                <p>
                  {" "}
                  <label className="text-left  ">
                    <input
                      type="radio"
                      className="form-radio "
                      name="question8"
                      value="A"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                    42351
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question8"
                      value="B"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                    52341 
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question8"
                      value="C"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">25341 </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question8"
                      value="C"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">25314 </span>
                  </label>
                </p>
              </div>
            </div><div className="mb-4 text-left">
              <p className="font-bold  p-1 ">
              9. When he<br/>
              P :	did not know<br/>Q :	he was nervous and<br/>
              R :	heard the hue and cry at midnight<br/>S :	what to do
              </p>
              <p className='mx-2'>The Proper sequence should be:</p>
              <div className="flex flex-col gap-2">
                <p>
                  {" "}
                  <label className="text-left  ">
                    <input
                      type="radio"
                      className="form-radio "
                      name="question9"
                      value="A"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                    RQPS 
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question9"
                      value="B"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                    QSPR
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question9"
                      value="C"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">SQPR</span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question9"
                      value="C"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">PQRS</span>
                  </label>
                </p>
              </div>
            </div><div className="mb-4 text-left">
              <p className="font-bold  p-1 ">
              10.GRAIN:SALT
              </p>
              <div className="flex flex-col gap-2">
                <p>
                  {" "}
                  <label className="text-left  ">
                    <input
                      type="radio"
                      className="form-radio "
                      name="question10"
                      value="A"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                    shard:pottery
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question10"
                      value="B"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">
                    shred:wood 
                    </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question10"
                      value="C"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">blades:grass </span>
                  </label>
                </p>
                <p>
                  <label className="items-left">
                    <input
                      type="radio"
                      className="form-radio"
                      name="question10"
                      value="C"
                      onChange={(event) => handleOptionChange(event, 0)}
                    />
                    <span className="ml-2 p-1">chip:glass </span>
                  </label>
                </p>
              </div>
            </div><button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 my-4 px-4 rounded"
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

export default MockTestVerbal;