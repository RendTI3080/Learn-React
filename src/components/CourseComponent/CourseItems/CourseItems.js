import "./CourseItems.css";

function CourseItems(props){

    const deleteHandler = () => {
        props.onDelete(props.id)
    }

    return(
        <li className="goal-item" onClick={deleteHandler}>
            {props.children}
        </li>
    )
}

export default CourseItems;