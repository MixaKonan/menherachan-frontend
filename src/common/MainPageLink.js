function MainPageLink({board}) {
    return (
        <div>
            <div className="to-main">
                <a href={`/board?${board.prefix}`}>На сосач!</a>
            </div>
            <div className="board">
                /bash/<span className="postfix">org</span>
            </div>
        </div>
    );
}

export default MainPageLink;