# DailyPay Front End Engineering Challenge

This is my attempt at the [DailyPay take-home React assessment](https://github.com/dailypay/react-take-home-test). Given a wireframe and guidelines to follow, I was to create a single-page ballot submission application using the ERN stack.

To-do:
  - Expand on the Submit Ballot logic to dynamically render a success/failure modal depending on the response of the POST request. (extra)
  - Add unit tests. (extra)
  
## To Start:
 1) Run `npm install` or `yarn install` to install necessary dependencies.
 2) Run `npm run backend` or `yarn backend` to start the Express server that serves ballot data.
 3) Run `npm start` or `yarn start` to start the application.

## (Legacy) Directions:
 1) Build an application that displays a list of categories and nominees. Please follow the design in the wireframe below. Run `yarn start` to start the application.
 2) Run `yarn backend` to start the server and get access to API methods such as `getBallotData`. Use the React `useEffect` hook to fetch the ballot data from the provided API, and save it to state by using the React `useState` hook.
 [useEffect Documentation](https://reactjs.org/docs/hooks-effect.html)
 [Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
[useState Documentation](https://reactjs.org/docs/hooks-state.html)
 3) When you click on a nominee, we should highlight the nominee card and save the selections using the React `useState` hook. A user can only select one nominee per category, and we should be able to see all of their selections highlighted. The selected nominee card should follow the style guides below.
 4) Make the layout responsive with at least one breakpoint (your choice as to how it looks on a smaller screen width).
 5) Once the user is finished making their selections, they can click on a submit button that displays a results modal screen. A user can dismiss the modal by clicking on the close button (follow the wireframe below).

## Requirements:
 1) All navigation should happen in the same page
 2) Demonstrate use of React hooks
 3) Demonstrate knowledge of component modularization
 4) Utilize CSS to create the layout of the page. Add hover styles to the items the user is interacting with.
 5) Create components as you feel is best suited for your solution

## Given Wireframe:
![Ballot Wireframe](src/take-home-wire.jpg?raw=true "Ballot Wireframe")
![Ballot Success Modal Wireframe](src/take-home-success.jpg?raw=true "Ballot Success Modal Wireframe")

## Bonuses
2) Make it pretty
3) Make it accessible
4) Add unit tests

## Styling Guidelines

- Use the "Roboto" Google font
- Use the following colors
	- Page background: `#0D2436`
	- Default/normal font color: `#FFFFFF`
  - Hover font color: `#CCCCCC`
	- Nominee card / submit button background: `#009B86`
  - Selected Nominee card: `#009B86`
  - Nominee card background hover / submit button background hover: `#34AC9C`
