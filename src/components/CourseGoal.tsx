type CourseGoalProps = {
    readonly title:string,
    readonly description:string
}
function CourseGoal({title,description}:CourseGoalProps){
    return(
        <article>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <button>Delete</button>
        </article>
    )
}

export default CourseGoal;