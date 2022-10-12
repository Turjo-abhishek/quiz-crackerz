import React from 'react';
import { EyeIcon } from "@heroicons/react/24/solid";
import "./Question.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ questions, serial }) => {
    const { question, options, correctAnswer } = questions;
    let ques = question.replace(/(<([^>]+)>)/gi, "");
    const correctAns = () => {
      toast(`Correct Answer: ${correctAnswer}`, { 
        toastId: "success1",
        position: "top-center",
        autoClose: 2000,
      });
    };
    const handleAnswer = (event) => {
      const answer = event.target.value;
  
      if (answer === correctAnswer) {
        toast.success("Correct!", {
          position: "top-center",
          autoClose: 2000,
        });
      } else {
        toast.error("Inorrect!", {
          position: "top-center",
          autoClose: 2000,
        });
      }
    };
  
    return (
      <div>
        <div className="question">
          <div className="card custom-card mb-5">
            <div className="card-title mb-3 mt-3">
              <div className="row">
                <div className="col-md-10">
                  <h4>
                    Quiz {serial + 1}: {ques}
                  </h4>
                </div>
                <div className="col-md-2">
                  <EyeIcon onClick={correctAns} className="eye"></EyeIcon>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                {options.map((option, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="d-flex align-items-center justify-content-between option w-100">
                      <label className='label-custom' htmlFor={option}>
                        <input
                          type="radio"
                          id={option}
                          name="fav_language"
                          onChange={handleAnswer}
                          value={option}
                        />
                        <div className='answer-custom'>
                        {option}
                        </div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Question;