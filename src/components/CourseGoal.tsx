import { type PropsWithChildren } from "react";
type CourseGoalProps = PropsWithChildren<{title:string}>;

function  CourseGoal({title,children}:CourseGoalProps){
    return(
        <article>
            <div>
                <h1>{title}</h1>
                {children}
            </div>
            <button>Delete</button>
        </article>
    )
}

export default CourseGoal;