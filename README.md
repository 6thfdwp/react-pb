This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Main dependencies

- axios
- react
- react-dom

### Project structure

- api
  Expose api request methods related to powerball, encapsulte how we fetch remote data. Ideally axios specifics

- reducers
  Custom reducer hook to manage powerball state transition. It can be hooked into any ui pieces to consume state

- ui
  Reusable presentational components

- App.js
  Top level component to hook everything up

### Thoughts on improvement

- Better UX
  UI need to handle state transition related to pending or error, as these state has already been returned from reducer hook
  Use some animation to display powerball filling

Need better way to create perfect square adapted to different mobile portrait screen. Currently the break point is `576px`, all screens larger than this (landscape mobile or up) will have fixed size grid, while smaller than this will have 100% width grid.
