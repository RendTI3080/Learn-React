import React, {useState} from "react";

import style from "./CourseInput.module.css";
import Button from "../../UI/Button";

function CourseInput(props){

    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState("true");

    // goal input handler
    const goalInputHandler = (event) => {
        if(event.target.value.trim().length > 0){
            setIsValid(true);
        }

        setEnteredValue(event.target.value);
    }

    // form handler

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if(enteredValue.trim().length === 0){
            setIsValid(false);
            return;
        }

        props.onAddGoal(enteredValue);
    }


    return(
        <div>
            <form onSubmit={formSubmitHandler}>
                <div className={`${style['form-control']} ${!isValid && style.invalid}`}>
                    <label>
                        Course Goal
                    </label>
                    <input type="text" placeholder="set your goal" onChange={goalInputHandler}/>
                </div>
                <Button type="submit">Add Goals</Button>
            </form>
        </div>
    )
}

export default CourseInput;