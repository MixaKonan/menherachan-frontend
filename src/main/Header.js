import MainPageLink from '../common/MainPageLink';

function Header({link, board}) {
    return (
        <header>
            <MainPageLink link={link} board={board}/>
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