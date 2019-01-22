import React from 'react';
import ReactDOM from 'react-dom';
// import News from './ListItem';
// import Calender from './Calender';
import Info from './PersonalInfo';

class App extends React.Component {
  render(){
    return(
      <div>
        <Info />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
