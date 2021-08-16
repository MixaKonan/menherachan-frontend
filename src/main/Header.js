import MainPageLink from '../common/MainPageLink';

function Header() {
    return (
        <header>
            <MainPageLink />
            <div>
                <div className="title">
                    Menherachan
                </div>
                <div class="description">
                    <p>Добро пожаловать!</p>
                </div>
            </div>
        </header>
    )
}

export default Header;