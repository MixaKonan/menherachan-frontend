import Header from "./Header";
import Info from "./Info";

function Main() {
    const board = {
        prefix: "a"
    }

    return (
        <div>
            <Header board={board}/>
            <Info />
        </div>
    );
}

export default Main;