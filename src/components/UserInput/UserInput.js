import React,{useState} from "react";
import classes from "./UserInput.module.css";

const initialUserInput = {
    'current-saving': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10
}

function UserInput(){
    const [userInput, setUserInput] = useState(initialUserInput);

    return (
        <form className={classes.form}>
            <div className={classes['input-group']}>
                <div>
                    <label>Current Saving</label>
                    <input value={userInput['current-saving']} type="number"/>
                </div>
                <div>
                    <label>Yearling Sving</label>
                    <input value={userInput['yearly-contribution']} type="number"/>
                </div>
            </div>
            <div>
                <div>
                    <label>Expected Interest</label>
                    <input value={userInput['expected-return']} type="number"/>
                </div>
                <div>
                    <label>Investment Duration</label>
                    <input value={userInput['duration']} type="number"/>
                </div>
            </div>
            <div>
                <button>Reset</button>
                <button>Calculate</button>
            </div>
        </form>
    )
}

export default UserInput;