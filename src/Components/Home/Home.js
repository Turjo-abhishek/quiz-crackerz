import React from 'react';
import img from '../../Images/1900x1068_herolead_quiz_3x2.png'
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css';

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div className='container'>
            <section style={{backgroundImage: `url(${img})`}} className='row mt-3 pb-5 banner'>
                <div className='color-overlay d-flex flex-column justify-content-center align-items-center'>
                    <h1 className='header'>Ready to test your Knowledge?</h1>
                    <p className='inner-text'>We provide the best service to test your technical Knowledge. Just go through the topics and test your knowledge level.</p>
                </div>
            </section>
            <section className='row mt-3 pb-5'>
                {
                    topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </section>
        </div>
    );
};

export default Home;