import { type PropsWithChildren } from "react";
type CourseGoalProps = PropsWithChildren<{ 
    title: string;
    id:number;
    onDelete:(id:number)=>void}>;

function CourseGoal({ title, id, children,onDelete }: CourseGoalProps) {

  return (
    <article>
      <div>
        <h1>{title}</h1>
        {children}
      </div>
      <button onClick={()=>onDelete(id)}>Delete</button>
    </article>
  );
}

export default CourseGoal;
