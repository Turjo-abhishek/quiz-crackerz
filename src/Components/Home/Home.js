import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div className='bg-gradient-to-r from-gray-100 to-gray-300'>
            <section className='w-2/3 mx-auto grid grid-cols-2 p-10 place-items-center'>
                {
                    topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </section>
        </div>
    );
};

export default Home;