import {Link} from "react-router-dom";

function MainPageLink({board}) {
    return (
        <div>
            <div className="to-main">
                <Link to="/">{board.link}</Link>
            </div>
            <div className="board">
                /{board.prefix}/<span className="postfix">{board.postfix}</span>
            </div>
        </div>
    );
}

export default MainPageLink;

