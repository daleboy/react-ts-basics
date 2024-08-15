import "./App.css";
import CourseGoal from "./components/CourseGoal";
import logoImg from "./assets/react.svg"
import Header from "./components/Header";

function App() {
  return (
    <main>
      <Header image={{src:logoImg,alt:'A list of goals'}}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title="Learn React+TS">
        <p>"Learn it from the ground up!"</p>
        </CourseGoal>
    </main>
  );
}

export default App;
