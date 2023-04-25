import React, { useState } from 'react';
import people from './components/data';
import {
    FaChevronCircleLeft,
    FaChevronCircleRight,
    FaQuoteRight,
} from 'react-icons/fa';

const App = () => {
    const [index, setIndex] = useState(0);

    const { name, job, image, text } = people[index];
    console.log(name);

    return (
        <main>
            <article className='review'>
                <div className='img-container'>
                    <img src={image} alt={name} />
                    <span>
                        <FaQuoteRight />
                    </span>
                </div>
                <h4>{name}</h4>
                <p>{job}</p>
                <p>{text}</p>
            </article>
        </main>
    );
};

export default App;
