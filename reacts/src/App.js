// import FaFlushede from "/react-icons";
import { Component } from 'react';
import './App.css';
// import Testcompo from './component/test'; 
import Lists from './component/Lists';
import TestForm from './component/TestForm';

class App extends Component {
  state = {
    namelist : [
      // { id: 1, name: 'Alex', age: 26, sexe: 'Masculin'},
      // { id: 2, name: 'Faneva', age: 27, sexe: 'Feminin'},
      { id: 3, name: 'Jayah', age: 28, sexe: 'Masculin'}
      // {id: 1,  name: '',  age: '',  sexe: '' }
    ]
  };
  addUser = user => {
    let users = [...this.state.namelist, user];
    this.setState({
      namelist: users
    });
  };

  render(){
  return (
    
    <div id="root" style={{background: 'yellow',width: '800px'}}>
         <Lists  namelist={this.state.namelist}/>
         <TestForm addUser={this.addUser}/>
    </div>
  );
}
}

export default App;
