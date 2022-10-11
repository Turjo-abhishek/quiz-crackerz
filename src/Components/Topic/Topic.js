import React from 'react';

const Topic = ({topic}) => {
    const {name, logo, total} = topic;
    console.log(topic);
    return (
        <div className='w-1/2 border-2 border-indigo-600 my-3 p-1 '>
            <img className='' src={logo} alt="" />
            <div>
                <p>{name}</p>
                <p>total Questions: {total}</p>
            </div>
        </div>
    );
};

export default Topic;