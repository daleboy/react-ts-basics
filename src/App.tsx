import "./App.css";
import CourseGoal from "./components/CourseGoal";
import logoImg from "./assets/react.svg"
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
export type CourseGoal={
  title:string,
  description:string,
  id:number,
}
function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([])
  function handleAddGoal(goal:string,summary:string){
    const newCourseGoal:CourseGoal = {
      title:goal,
      description:summary,
      id:Math.random()
    }
    setGoals(prevGoals=>{
      return [...prevGoals,newCourseGoal]
    })
  }

  function handleDeleteGoal(id:number){
    setGoals(prevGoals=>{
    return prevGoals.filter((goal)=>{
      return goal.id!==id;
    })
   })
  }
  return (
    <main>
      <Header image={{src:logoImg,alt:'A list of goals'}}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  );
}

export default App;
