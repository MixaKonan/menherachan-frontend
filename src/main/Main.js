import Header from "./Header";
import Info from "./Info";

function Main() {
    const link = "На сосач!"

    const board = {
        prefix: "bash",
        postfix: "org"
    }

    return (
        <div>
            <Header link={link} board={board}/>
            <Info />
        </div>
    );
}

export default Main;