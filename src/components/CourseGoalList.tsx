import CourseGoal from "./CourseGoal";
import {CourseGoal as TGoal} from "../App"
import InfoBox from "./InfoBox";
import {type ReactNode} from "react"
type CourseGoalListProps = {
  readonly goals: TGoal[];
  readonly onDeleteGoal :(id:number)=>void;
};
function CourseGoalList({goals,onDeleteGoal}: CourseGoalListProps) {
  if(goals.length === 0){
    return (
      <InfoBox mode="Hint">
        You have no goals,you can  add your new goal now!
      </InfoBox>
    )
  }

  let warningBox:ReactNode
  if(goals.length > 4){
    warningBox = (<InfoBox mode="Warning" severity="medium">
    There are too many goals.Pls set less than 4 goals.
    </InfoBox>);
   
  }
  return (
    <>
    {warningBox}
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
    </>
  );
}

export default CourseGoalList;
