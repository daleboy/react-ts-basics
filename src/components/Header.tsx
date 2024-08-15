import { PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{image:{src:string,alt:string}}>
function Header({image,children}:HeaderProps){
    return(
        <>
        <img {...image}></img>
        {children}
        </>
    )
}

export default Header;