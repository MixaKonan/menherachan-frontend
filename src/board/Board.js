/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../common/Header";
import {useParams} from "react-router-dom";
import PostForm from "../common/PostForm";

function Board() {
    const {board} = useParams();

    return (
        <div>
            <Header isMainPage={false} prefix={board}/>
            <PostForm />
        </div>
    );
}

export default Board;
