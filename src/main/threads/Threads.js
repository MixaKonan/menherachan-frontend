/* eslint-disable react-hooks/exhaustive-deps */
import Thread from "./Thread";
import {useEffect, useState} from "react";
import axios from "axios";

function Threads() {
    const [boardsInfo, setBoardsInfo] = useState([]);

    useEffect(() => {
       axios.get(`${process.env.REACT_APP_LOCALHOST_API}/board/short-info`)
           .then(
               res => success(res),
               res => failure(res))

        function success(result) {
            setBoardsInfo(result.data.data)
            console.log(boardsInfo)
        }

        function failure(result) {
            console.log(result);
        }
    }, []);

    return(
        <div>
            {
                boardsInfo.map(thread => <Thread thread={thread}/>)
            }
        </div>
    );
}

export default Threads;