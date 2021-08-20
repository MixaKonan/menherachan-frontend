import {Link} from "react-router-dom";

function BoardLink({board}) {
    return(
        <li key={board.prefix}>
            <Link to={`/board/${board.prefix}`}>
                {`/${board.prefix}/${board.postfix}`}
            </Link>
        </li>
    );
}

export default BoardLink;