/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import {useEffect, useState} from "react";
import BoardLink from "./BoardLink";

function Navigation() {
    const [boards, setBoards] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_LOCALHOST_API}/board/nav-menu`)
            .then(
                result => success(result),
                result => failure(result))

        function success(result) {
            setBoards(result.data.data);
            console.log(boards);
        }

        function failure(result) {
            console.log(result);
        }
    }, [])



    return (
        <aside>
            <nav>
                <ul>
                    {boards.map(board => <BoardLink board={board}/>)}
                </ul>
            </nav>
        </aside>
    );
}

export default Navigation;

