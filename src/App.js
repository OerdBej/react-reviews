import React, { useState } from 'react';
import people from './components/data';

const App = () => {
    const [index, setIndex] = useState(0);

    const { name, job, image, text } = people[index];
    console.log(name);

    return <div>App</div>;
};

export default App;
