import "./CourseLists.css";
import CourseItems from "../CourseItems/CourseItems"

function CourseLists(props){
    return(
        <ul className="goal-list">
            {props.items.map(goal => {
                return <CourseItems key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>{goal.text}</CourseItems>
            })}
        </ul>
    )
}

export default CourseLists;