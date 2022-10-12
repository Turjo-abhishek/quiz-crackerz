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
                <div className='color-overlay d-flex justify-content-center align-items-center'>
                        <h1>Test</h1>
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