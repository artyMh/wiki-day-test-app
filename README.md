# Technical test

## How to launch

### Docker

* Build app container `docker build -t wiki-day-test .`
* Launch builded container `docker run -dp 127.0.0.1:80:80 wiki-day-test`

### Development

* Install dependencies `npm i`
* Development mode `npm run start:dev`
* Production mode `npm run build && npm run preview`

## Stack

* TypeScript 5
* ESLint 8
* Vite 5
* React 18
* MobX 6
* Vitest + React Testing Library

## Excersise

Implement a list of today's Wikipedia "On this day" using data from the Wikipedia API.

## Requirements

- Initially there must be a button. Data is fetched and displayed after the button is clicked.
- Entries should be ordered by their year.
- "Loading" message/UI component must be shown while data is fetched.
- Error modal must be shown when data fetch fails.

## Implementation requirements

- React framework and application state management framework of your choice must be used.
- Provide some basic styling.
- You can use whatever React project boilerplate, tools and libraries you like.
- TypeScript is preferred over JavaScript.
- Application parts must be tested but you don't have to write tests for every single part, write a single one for every type of test. As an example for imaginary Redux project: action creator, reducer, asynchronous function, UI component render, UI component user interactions are different types of tests.
