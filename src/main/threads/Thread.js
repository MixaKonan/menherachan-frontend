function Thread({ thread }) {
    return (
        <div>
            <p>
                Раздел
                <a href="/board">/{thread.boardPrefix}/</a>;
                тредов {thread.boardThreadCount};
                постов {thread.boardPostCount};
                файлов {thread.boardFileCount};
            </p>
            <hr />
        </div>
    );
}

export default Thread;