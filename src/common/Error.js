import {Link} from "react-router-dom";

function Error() {
    const style = {
        textAlign: "center",
        paddingTop: "50px"
    }
    return (
        <div style={style}>
            <h2>Произошла ошибка</h2>
            <h1>
                <Link to="/">
                    Вернуться на главную
                </Link>
            </h1>
        </div>
    );
}

export default Error;