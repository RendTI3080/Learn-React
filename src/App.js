import React, {useState} from 'react';
import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';

function App() {
  const [userInput, setUserInput] = useState(null);

  // calculator handler
  const calculatorHandler = (userInput) => {
    setUserInput(userInput);
  };

  // empty array for saving data 
  const yearlyData = [];

  // input function
  if(userInput){

  }

  return(
    <div>
      <Header/>
      <UserInput/>

      {!userInput && <p style={{textAlign:'center'}}>No Investment calculated yet</p>}
    </div>
  )
}

export default App;
