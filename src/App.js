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

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        } else {
            if (number < 0) {
                return people.length - 1;
            }
        }
        return number;
    };

    const nextPerson = () => {
        setIndex((prevIndex) => {
            const newIndex = prevIndex + 1;

            return checkNumber(newIndex);
        });
    };

    const prevPerson = () => {
        setIndex((prevIndex) => {
            const newIndex = prevIndex + 1;

            return checkNumber(newIndex);
        });
    };
    // the random is the length of the people
    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        //we put the condtional in order to get always make sure that we change the screen picture
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        //the parameter of the function, is the  random number index
        setIndex(checkNumber(randomNumber));
    };
    return (
        <main>
            <article className='review'>
                <div className='img-container'>
                    <img src={image} alt={name} className='person-img' />
                    <span className='quote-icon'>
                        <FaQuoteRight />
                    </span>
                </div>
                <h4 className='author'>{name}</h4>
                <p className='job'>{job}</p>
                <p className='info'>{text}</p>
                <div className='btn-container'>
                    <button className='prev-btn' onClick={prevPerson}>
                        <FaChevronCircleLeft />
                    </button>
                    <button className='next-btn' onClick={nextPerson}>
                        <FaChevronCircleRight />
                    </button>
                </div>
                <button className='btn btn-hipster' onClick={randomPerson}>
                    Surprise
                </button>
            </article>
        </main>
    );
};

export default App;
