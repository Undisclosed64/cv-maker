import React, { Component } from 'react';
import BasicInfo from './components/Basic Info';
import Education from './components/Education';
import WorkExp from './components/WorkExp';
import HandleBasicInfo from   './components/HandleBasicInfo'
import HandleEducation from './components/HandleEducation';
import HandleWorkExp from './components/HandleWorkExp';

class App extends Component{
render(){
    return(
        <div>
    
<BasicInfo/>
<Education />
<WorkExp />
<HandleBasicInfo/>
<HandleEducation/>
<HandleWorkExp/>
</div>
           
    )
}
}
export default App;