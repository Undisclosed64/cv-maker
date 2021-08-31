import React, { Component } from 'react';
import './App.css'
import Header from './components/Header';
import UserForm from './components/UserForm';
/*import BasicInfo from './components/Basic Info';
import Education from './components/Education';
import WorkExp from './components/WorkExp';
*/
import HandleBasicInfo from   './components/HandleBasicInfo'
import HandleEducation from './components/HandleEducation';
import HandleWorkExp from './components/HandleWorkExp';



class App extends Component{
render(){
    return(
        <div>
    <Header></Header>
{/*<BasicInfo/>
<Education/>
<WorkExp/>
<HandleBasicInfo/>
*/}
<UserForm/>
<HandleBasicInfo/>
<HandleEducation/>
<HandleWorkExp/>

</div>
           
    )
}
}

export default App;