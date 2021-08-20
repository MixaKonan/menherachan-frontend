import Rules from "./rules/Rules";
import Threads from "./threads/Threads";

function Info() {
    return (
        <div className="threads">
            <Rules />
            <br />
            <br />
            <br />
            <Threads />
        </div>);
}

export default Info;