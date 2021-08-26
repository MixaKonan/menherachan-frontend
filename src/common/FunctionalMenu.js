import {Link} from "react-router-dom";

function FunctionalMenu() {
    return(
        <div className="functional-menu">
            <Link to="/">Главная</Link>
            <span> | </span>
            <Link to="/search">Поиск</Link>
            {/*TODO: Add authentication*/}
                <span> | </span>
                <Link to="/admin">Управление</Link>

        </div>
    )
}

export default FunctionalMenu;