/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../common/Header";
import {useParams} from "react-router-dom";
import PostForm from "../common/PostForm";
import FunctionalMenu from "../common/FunctionalMenu";
import ThreadsPreview from "./ThreadsPreview";

function Board() {
    const {prefix} = useParams();

    return (
        <div>
            <Header isMainPage={false} prefix={prefix}/>
            <PostForm />
            <FunctionalMenu />
            <ThreadsPreview prefix={prefix}/>
        </div>
    );
}

export default Board;
