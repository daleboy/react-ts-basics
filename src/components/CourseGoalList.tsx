import CourseGoal from "./CourseGoal";
import {CourseGoal as TGoal} from "../App"
type CourseGoalListProps = {
  readonly goals: TGoal[];
  readonly onDeleteGoal :(id:number)=>void;
};
function CourseGoalList({goals,onDeleteGoal}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalList;
