import { FormEvent,useRef } from "react";
type NewGoalProps = {
    readonly onAddGoal:(goal:string,summary:string)=>void;
}
function NewGoal({onAddGoal}:NewGoalProps){
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);
    function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        const inputGoal = goal.current!.value;   
        const inputSummary = summary.current!.value;   
        event.currentTarget.reset();
        onAddGoal(inputGoal,inputSummary) 
    }
    return(
        <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your Goal</label>
            <input id="goal" ref={goal} type="text"></input>
        </p>
        <p>
        <label htmlFor="summary">Your Goal</label>
        <input id="summary" ref={summary} type="text"></input>
        </p>
        <button>Add Goal</button>
        </form>
    )
}

export default NewGoal;