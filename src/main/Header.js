import MainPageLink from '../common/MainPageLink';

function Header() {
    return (
        <header>
            <MainPageLink />
            <div>
                <div className="title">
                    Menherachan
                    <div class="description">
                        Добро пожаловать!
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;