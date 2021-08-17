import Rules from "./rules/Rules";
import Threads from "./threads/Threads";

function Info() {
    return (
        <div className="threads">
            <Rules />
            <Threads />
        </div>);
}

export default Info;