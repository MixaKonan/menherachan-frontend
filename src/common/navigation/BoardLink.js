import {Link} from "react-router-dom";

function BoardLink({board}) {
    return(
            <Link to={`/board/${board.prefix}`} key={board.prefix}>
                {`/${board.prefix}/${board.postfix}`}
            </Link>
    );
}

export default BoardLink;