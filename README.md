# React Reviews

React Reviews is a straightforward web application built with React that utilizes built-in data to present information to the user. The main concept of this project is to function as a quote generator with added features. It employs hooks such as useState and includes conditional rendering for instances where data is not retrieved from our project. As part of my collection of mini React projects, this modular project is intended for personal use to enhance my understanding of React and web development as a whole.

#### Install React Icons

```http
    npm install react-icons --save

```

## Installation

Install my-project with npm

```bash

git clone React-Reviews
cd React-Reviews
npm install & npm start
```

## Functionality

React Reviews is a React-based web application that allows users to navigate through reviews using next and previous buttons. To achieve this, the application follows these steps:

The data length is used as the starting point for manipulating the figures within the project.
The data is initialized from 0 and the index is updated or decreased with each click, allowing users to view reviews sequentially.
The application includes a random button that generates random figures from the length of the data, limiting and monitoring the displayed data.
To enable navigation, the project tracks the current index in the reviews array and updates it when the user clicks the previous or next button.
The updated index is then used to access the corresponding review from the reviews array, enabling organized and sequential review viewing.
