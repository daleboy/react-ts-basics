import { type ReactNode } from "react";

type HintBoxProps={
    mode:'Hint';
    children:ReactNode;
}
type WarningBoxProps={
    mode:'Warning';
    severity:'low'|'medium'|'high';
    children:ReactNode;
}
type InfoBoxProps = HintBoxProps|WarningBoxProps;

function InfoBox(props:InfoBoxProps){
    const {mode,children} = props;
    if(mode === "Hint"){
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
        )
    }
    const {severity} = props;
    return(
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <p>{children}</p>
        </aside>
    )
}

export default InfoBox;