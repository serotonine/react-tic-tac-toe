# REACT TIC TAC TOE
### Repository
[https://github.com/serotonine/react_tic_tac_toe](https://github.com/serotonine/react_tic_tac_toe)

### Page
[ https://github.com/serotonine/react_tic_tac_toe](https://github.com/serotonine/react_tic_tac_toe)

### About
Udemy [https://www.udemy.com/user/maximilian-schwarzmuller](Maximilian Schwarzmüller) react_practice_food_order application: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39659740 (see Udemy course).

***

### REACT 
##### Summary
- React bootstrap
```js
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```
- Alternative to jsx extension:
```js
React.createElement('div', {id: 'content'});
```

- Working with fragment:
```js
<Fragment> || <>
```
- Components split concept
- useState()
- Updating State best practice: use a function:
```js
setMyState(wasMyState => !wasMyState);
```
- Input Two-Way-Binding,
- Vite build tool.
