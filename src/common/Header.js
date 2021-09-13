/* eslint-disable react-hooks/exhaustive-deps */
import MainPageLink from './MainPageLink';
import PropTypes from "prop-types";

function Header({board}) {
    return (
        <header>
            <MainPageLink board={board}/>
            <div>
                <div className="title">
                    {board.title}
                    <div className="description">
                        {board.description}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

Header.propTypes = {
    board: PropTypes.exact({
        prefix: PropTypes.string,
        postfix: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.string
    })
}