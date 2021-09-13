/* eslint-disable react-hooks/exhaustive-deps */
import PostForm from "../common/PostForm";
import Header from "../common/Header";
import {useContext, useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {AdminContext} from "../common/contexts/AdminContext";
import AdminFunctionalMenu from "../common/menus/AdminFunctionalMenu";
import FunctionalMenu from "../common/menus/FunctionalMenu";
import Posts from "./Posts";
import axios from "axios";
import {boardUrl, threadUrl} from "../common/Constants";

function Thread() {
    const {prefix, threadId} = useParams();
    const {authenticated} = useContext(AdminContext);
    const history = useHistory();

    const [board, setBoard] = useState({});
    const [thread, setThread] = useState({});

    useEffect(() => {
        axios.get(`${boardUrl}/header?Prefix=${prefix}`)
            .then(
                result => success(result),
                result => failure(result)
            )

        function success(result) {
            if (result.data && result.data.succeeded) {
                setBoard(result.data.data);
            }
        }

        function failure(result) {
            history.push("/error")
        }
    }, [prefix])

    useEffect(() => {
        axios.get(`${threadUrl}/posts?ThreadId=${threadId}`)
            .then(
                result => success(result),
                result => failure(result))

        function success(result) {
            if (result.data && result.data.succeeded) {
                setThread(result.data.data);
            }
        }

        function failure(result) {
            history.push("/error")
        }
    }, [threadId]);

    return (
        <>
            <Header board={board}/>
            <PostForm/>
            {authenticated ? <AdminFunctionalMenu/> : <FunctionalMenu/>}
            <Posts posts={thread.posts} />
        </>
    )
}

export default Thread;