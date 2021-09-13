import Info from "./Info";
import MainPageLink from "../common/MainPageLink";
import {baseBoardInfo} from "../common/Constants";

function Main() {
    return (
        <div>
            <MainPageHeader/>
            <Info />
        </div>
    );
}

function MainPageHeader() {
    return(
        <header>
            <MainPageLink board={baseBoardInfo}/>
            <div>
                <div className="title">
                    Menherachan
                    <div className="description">
                        Добро пожаловать
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Main;