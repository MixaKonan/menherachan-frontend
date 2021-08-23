/* eslint-disable react-hooks/exhaustive-deps */
import Thread from "./Thread";
import {useEffect, useState} from "react";
import axios from "axios";
import PropTypes from "prop-types";

function Threads() {
    const [boardsInfo, setBoardsInfo] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_LOCALHOST_API}/board/short-info`)
            .then(
                res => success(res),
                res => failure(res))

        function success(result) {
            setBoardsInfo(result.data.data)
        }

        function failure(result) {
            console.log(result);
        }
    }, []);

    return (
        <div>
            {
                boardsInfo.map(threadInfo =>
                    <Thread thread={threadInfo} key={threadInfo.prefix}/>)
            }
        </div>
    );
}

export default Threads;

Threads.propTypes = {
    boardsInfo: PropTypes.arrayOf(PropTypes.exact({
        prefix: PropTypes.string,
        threadCount: PropTypes.number,
        postCount: PropTypes.number,
        fileCount: PropTypes.number
    }))
}