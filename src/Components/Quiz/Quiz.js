import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Question from '../Question/Question';
import {toast,ToastContainer} from 'react-toastify';

const Quiz = () => {
    const quiz=useLoaderData();
    const singlequiz=quiz.data;
    const {name,questions}=singlequiz;

    return (
        <div style={{marginTop:'80px'}}>
            <h3 style={{marginBottom:'40px'}}>Questions of {name}</h3>
            {
                questions.map((question,index)=><Question key={question.id} questions={question} serial={index}></Question>)
            }
                    <ToastContainer></ToastContainer>

        </div>
    );
};

export default Quiz;