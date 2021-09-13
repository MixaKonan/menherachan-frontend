import {Link} from "react-router-dom";

function AdminFunctionalMenu() {
    return (
        <div className="functional-menu">
            <Link to="/">Главная</Link>
            <span> | </span>
            <Link to="/search">Поиск</Link>
            <span> | </span>
            <Link to="/admin">Управление</Link>
        </div>
    )
}

export default AdminFunctionalMenu;