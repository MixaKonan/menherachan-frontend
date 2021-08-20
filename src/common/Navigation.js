import {Link} from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";

function Navigation() {
    let [boardInfo, setBoardInfo] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:5001/api/v1/board/nav-menu")
            .then(result => success(result))
    });

    let links;

    if(boardInfo) {
        links = boardInfo.map(info =>
            <li key={info.prefix}>
                <Link to={`/board/${info.prefix}`}>
                    {`/${info.prefix}/${info.postfix}`}
                </Link>
            </li>);
    }

    function success(result) {
        setBoardInfo(result.data.data)
    }

    return (
        <aside>
            <nav>
                <ul>
                    {links}
                </ul>
            </nav>
        </aside>
    );
}

export default Navigation;

