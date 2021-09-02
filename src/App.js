import React, { Component } from 'react';
import './App.css'
import Header from './components/Header';
import UserForm from './components/UserForm';
import CVTheme from './components/CVTheme';
/*import BasicInfo from './components/Basic Info';
import Education from './components/Education';
import WorkExp from './components/WorkExp';
*/

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