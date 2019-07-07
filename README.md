This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Main dependencies

- axios
- react
- react-dom

### Project structure

- api  
  Expose api request methods related to powerball, encapsulte how we fetch remote data. Ideally axios specifics only appear here.

- reducers  
  Custom reducer hook to manage powerball state transition. It can be hooked into any ui pieces to consume state

- ui  
  Reusable presentational components

- App.js  
  Top level component to hook everything up

### Thoughts on improvement

- Separate buttons from `PBCircles`
  It is better to only have number circles as pure presentation component.

- Better UX  
  UI need to handle state transition related to pending or error, as these state has already been returned from reducer hook
  Use some animation to display powerball circle filling

  Need better way to create perfect square adapted to different mobile portrait screen, as we don't have fixed width. Larger screen with `576px` width and up have fixed sized grid.
