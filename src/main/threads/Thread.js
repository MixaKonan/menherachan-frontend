import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function Thread({ thread }) {
    return (
        <div>
            <p>
                Раздел
                <Link to={`/board/${thread.prefix}`}>/{thread.prefix}/</Link>;
                тредов {thread.threadCount};
                постов {thread.postCount};
                файлов {thread.fileCount};
            </p>
            <hr />
        </div>
    );
}

export default Thread;

Thread.propTypes = {
    thread: PropTypes.object
}