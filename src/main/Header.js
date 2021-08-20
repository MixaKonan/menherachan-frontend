import MainPageLink from '../common/MainPageLink';

function Header({board}) {
    return (
        <header>
            <MainPageLink board={board}/>
            <div>
                <div className="title">
                    Menherachan
                    <div className="description">
                        Добро пожаловать!
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;