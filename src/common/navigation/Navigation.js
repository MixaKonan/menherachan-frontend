/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import {useEffect, useState} from "react";
import BoardLink from "./BoardLink";
import PropTypes from "prop-types";

function Navigation() {
    const [boards, setBoards] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_LOCALHOST_API}/board/nav-menu`)
            .then(
                result => success(result),
                result => failure(result))

        function success(result) {
            setBoards(result.data.data);
        }

        function failure(result) {
            console.log(result);
        }
    }, [])



    return (
        <aside>
            <nav>
                <ul>
                    {boards.map(board =>
                        <li key={board.prefix}>
                            <BoardLink board={board}/>
                        </li>)}
                </ul>
            </nav>
        </aside>
    );
}

export default Navigation;

Navigation.propTypes = {
    boards: PropTypes.arrayOf(PropTypes.exact({
        prefix: PropTypes.string,
        postfix: PropTypes.string
    }))
}

