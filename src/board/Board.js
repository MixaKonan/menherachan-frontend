/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../common/Header";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function Board() {
    const [prefix, setPrefix] = useState("");
    const location = useLocation();
    const search = location.search;

    useEffect(() => {
        setPrefix(new URLSearchParams(search).get("board"));
    }, [search])

    return (
        <div>
            <Header isMainPage={false} prefix={prefix}/>
        </div>
    );
}

export default Board;
