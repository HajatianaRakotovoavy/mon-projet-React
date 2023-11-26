// import FaFlushede from "/react-icons";
import { Component } from 'react';
// import './App.css';
// import Testcompo from './component/test'; 


class TestForm extends Component {
  state = {
    name: null,
    age: null,
    gender: null
   
  
  };

  change = e => {
    this.setState({
        [e.target.id]: e.target.value
    });
  };


  submit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.addUser(this.state);
  }
  render(){
  return (
    
    <div>
          <form onSubmit={this.submit}>
                <label htmlFor="name">Nom:</label>
                <input type="text" id="name" onChange={this.change} />
                <label htmlFor="age">Age:</label>
                <input type="text" id="age" onChange={this.change} />
                <label htmlFor="sexe">sexe:</label>
                <input type="text" id="sexe" onChange={this.change} />
                <button style={{background: 'orange', borderRadius: '15%', padding: '7px'}}>Envoyer</button>
          </form>
         
    </div>
  );
}
}

export default TestForm;
