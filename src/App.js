import React, {useState} from "react";
import CourseInput from "./components/CourseComponent/CourseInput/CourseInput";
import "./App.css";
import CourseLists from "./components/CourseComponent/CourseLists/CourseLists";

function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goal => {
    // if(courseGoals.length === 0){
    //   console.log("eksekusi kode 0")
    //   setCourseGoals(courseGoals[0] = {text: goal, id: Math.random().toString()})
    //   console.log(courseGoals);
    // }else{
    //   setCourseGoals(prevGoals => {
    //     const updateGoals = [...prevGoals];
    //     updateGoals.unshift({text: goal, id: Math.random().toString()});
    //     return updateGoals;
    //   })
    // }

    if (courseGoals.length === 0) {
      courseGoals[0] = { text: goal, id: Math.random().toString() };
      setCourseGoals([...courseGoals]);
    } else {
      setCourseGoals(prevGoals => {
        const updatedGoals = [...prevGoals];
        updatedGoals.unshift({ text: goal, id: Math.random().toString() });
        return updatedGoals;
      });
    }
  }

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (<p style={{textAlign: 'center'}}>No Goals Found. Add One Goals</p>)

  if(courseGoals.length > 0){
    content = (
      <CourseLists items={courseGoals} onDeleteItem={deleteItemHandler}></CourseLists>
    )
  }

  return(
    <div>
      <div id="goal-form">
        <CourseInput onAddGoal={addGoalHandler}/>
      </div>
      <div id="goals">
        {content}
      </div>
    </div>
  )
}

export default App;
