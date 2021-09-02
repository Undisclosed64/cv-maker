import React, { Component } from 'react';
import './App.css'
import Header from './components/Header';
import UserForm from './components/UserForm';


class App extends Component{
render(){
    return(
        <div>
    <Header></Header>
    <UserForm/>
</div>
           
    )
}
}

export default App;