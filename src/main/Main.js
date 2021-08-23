/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../common/Header";
import Info from "./Info";

function Main() {
    return (
        <div>
            <Header isMainPage={true}/>
            <Info />
        </div>
    );
}

export default Main;