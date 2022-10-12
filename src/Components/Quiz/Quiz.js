import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Question from '../Question/Question';
import {toast,ToastContainer} from 'react-toastify';

const Quiz = () => {
    const quiz=useLoaderData();
    const singlequiz=quiz.data;
    const {name,questions}=singlequiz;

    return (
        <div className=''>
            <h3>Questions of {name}</h3>
            {
                questions.map((question,index)=><Question key={question.id} question={question} serial={index}></Question>)
            }
                    <ToastContainer></ToastContainer>

        </div>
    );
};

export default Quiz;