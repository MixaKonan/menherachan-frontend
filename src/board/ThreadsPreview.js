/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react";
import axios from "axios";
import Post from "./Post";

function ThreadsPreview({prefix}) {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_LOCALHOST_API}/board/preview?Prefix=${prefix}`)
            .then(
                result => success(result),
                result => failure(result))

        function success(result) {
            if(result.data && !result.data.succeeded) {
                console.log(result);
            }
            console.log(result);
            setData(result.data.data);
        }

        function failure(result) {
            console.log(result);
        }
    }, [prefix])

    return(
        <div className="threads">
            {
                data.map(post => <Post post={post} prefix={prefix} key={post.postId}/>)
            }
        </div>
    )
}

export default ThreadsPreview;