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
                    <img src={image} alt={name} />
                    <span>
                        <FaQuoteRight />
                    </span>
                </div>
                <h4>{name}</h4>
                <p>{job}</p>
                <p>{text}</p>
                <div>
                    <button onClick={prevPerson}>
                        <FaChevronCircleLeft />
                    </button>
                    <button onClick={nextPerson}>
                        <FaChevronCircleRight />
                    </button>
                </div>
                <button onClick={randomPerson}>Surprise</button>
            </article>
        </main>
    );
};

export default App;
