/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../common/Header";
import {useHistory, useParams} from "react-router-dom";
import PostForm from "../common/PostForm";
import FunctionalMenu from "../common/menus/FunctionalMenu";
import ThreadsPreview from "./ThreadsPreview";
import {useContext, useEffect, useState} from "react";
import {AdminContext} from "../common/contexts/AdminContext";
import AdminFunctionalMenu from "../common/menus/AdminFunctionalMenu";
import axios from "axios";
import {boardUrl} from "../common/Constants";



function Board() {
    const {prefix} = useParams();
    const {authenticated} = useContext(AdminContext);
    const history = useHistory();

    const [board, setBoard] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(() => {
         axios.get(`${boardUrl}/header?Prefix=${prefix}`)
             .then(
                 result => {success(result)},
                 result => failure(result)
             )

        function success(result) {
            if (result.data && result.data.succeeded) {
                setBoard(result.data.data);
            }
        }

        function failure(result) {
            console.log(result);
            history.push("/error")
        }

    }, [prefix])

    useEffect(() => {
        axios.get(`${boardUrl}/preview?Prefix=${prefix}`)
            .then(
                result => success(result),
                result => failure(result)
            );

        function success(result) {
            if (result.data && result.data.succeeded) {
                setPosts(result.data.data);
            }
        }

        function failure(result) {
            console.log(result);
            history.push("/error")
        }
    }, [prefix])

    return (
        <div>
            <Header board={board}/>
            <PostForm/>
            {authenticated ? <AdminFunctionalMenu/> : <FunctionalMenu/>}
            <ThreadsPreview posts={posts} prefix={prefix}/>
        </div>
    );
}

export default Board;
