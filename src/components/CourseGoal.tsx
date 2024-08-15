import { type FC,type PropsWithChildren } from "react";
type CourseGoalProps = PropsWithChildren<{title:string}>;

const  CourseGoal:FC<CourseGoalProps>=({title,children})=>{
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