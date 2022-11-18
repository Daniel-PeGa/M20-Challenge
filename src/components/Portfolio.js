import React from 'react';
import Project from './Project';

const projects = [
    {
        id: 0,
        title: 'First Personal Portfolio',
        languages: 'html and css',
        image: '/img/personalPortfolio.png',
        description: 'This is my first personal portfolio made purely with HTML and CSS. It isnt really pretty, but its one of my first projects since signing into Vanderbilts bootcamp',
        repo: 'https://github.com/Daniel-PeGa/final-module-2-challenge',
        live: 'https://daniel-pega.github.io/final-module-2-challenge/',
    },
    {
        id: 1,
        title: 'Random Password Generator',
        languages: 'html, css, and JavaScript',
        image: '/img/passwordGenerator.png',
        description: 'This is my first project using JavaScript. It is a random password generator that intakes user input such as the amount of characters theyd like or weather or not they would like to have numbers and special characters and all',
        repo: 'https://github.com/Daniel-PeGa/final-module-3-challenge',
        live: 'https://daniel-pega.github.io/final-module-3-challenge/',
    },
    {
        id: 3,
        title: 'Coding Quiz',
        languages: 'html, css, and JavaScript',
        image: '/img/codingQuiz.png',
        description: 'This is a coding quiz that saves the high scores on local storage and has a timer, as well as taking user responses to multiple choice questions',
        repo: 'https://github.com/Daniel-PeGa/final-module-4-challenge',
        live: 'https://daniel-pega.github.io/final-module-4-challenge/',
    },
];

function Portfolio() {
    return (
        <div>
        <p className="content is-medium">Portfolio</p>
        <Project projects={projects} />
      </div>  
    );
}

export default Portfolio;