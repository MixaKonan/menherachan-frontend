import Thread from "./Thread";

function Threads() {
    const thread = {
        boardPrefix: "a",
        boardThreadCount: 5,
        boardPostCount: 123,
        boardFileCount: 12
    };

    return(
        <div>
            <Thread thread={thread}/>
            <Thread thread={thread}/>
            <Thread thread={thread}/>
            <Thread thread={thread}/>
        </div>
    );
}

export default Threads;