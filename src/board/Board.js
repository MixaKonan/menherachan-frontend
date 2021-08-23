/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../common/Header";
import {useParams} from "react-router-dom";

function Board() {
    const {board} = useParams();

    return (
        <div>
            <Header isMainPage={false} prefix={board}/>
        </div>
    );
}

export default Board;
