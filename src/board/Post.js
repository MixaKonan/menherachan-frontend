import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Post({post, prefix}) {
    return <span id={post.threadId}>
        <article>
            <div className="thread-header">
                <span className="subject">
                    {post.subject}
                </span>
                {post.isWrittenByOp ? <Op/> : <></>}
                &nbsp;
                <Name post={post}/>
                &nbsp;
                <PostDate dateString={post.postedAt}/>
                &nbsp;
                <PostLink post={post} prefix={prefix}/>
                &nbsp;
                <Link to={`/report/post/${post.postId}`}>Репорт</Link>
                {
                    post.files.map(file => <Image file={file} key={file.info}/>)
                }
                <Comment comment={post.comment}/>
            </div>
        </article>
    </span>
}


function Name({post}) {
    const adminStyle = {
        color: post.admin ? post.admin.colorCode : "#0000"
    }

    return (
        <span>
            {post.email && post.author ?
                <NameWithEmail post={post} adminStyle={adminStyle}/> :
                <NameWithoutEmail post={post} adminStyle={adminStyle}/>}
        </span>
    )
}

function Op() {
    const opStyle = {
        color: "green"
    }

    return (<span style={opStyle}>#OP</span>);
}

function NameWithEmail({post, adminStyle}) {
    return (
        <span className="name">
            <a href={`mailto:${post.email}`}>
                {post.admin ? <span style={adminStyle}>{post.admin.nickname}</span> : <span>{post.author}</span>}
            </a>
        </span>
    )
}

function NameWithoutEmail({post, adminStyle}) {
    return (
        <span>
            {post.admin ? <span style={adminStyle}>{post.admin.nickname}</span> : <span>{post.author}</span>}
        </span>
    )
}

function PostDate({dateString}) {
    let dt = new Date(dateString);
    let date = dt.toLocaleTimeString() + " " + dt.toLocaleDateString();

    return (<span className="post-time">{date}</span>)
}

function PostLink({post, prefix}) {
    const linkStyle = {
        padding: "4px"
    }

    let threadId = post.threadId;
    let postId = post.postId;

    return (
        <>
            <Link to={`/board/${prefix}/thread/${threadId}`} className="post-link">#{threadId}</Link>
            <Link style={linkStyle} to={`/board/${prefix}/thread/${threadId}#${postId}`}>Перейти к посту</Link>
        </>
    )
}

function Image({file}) {
    return (
        <figure>
            <figcaption>
                <ImageLink filename={file.name}>
                    {file.thumbnailName}
                </ImageLink>
                <br/>
                {file.info}
            </figcaption>
            <ImageLink filename={file.name}>
                <img src={`/thumbnails/${file.thumbnailName}`} alt={`${file.thumbnailName}`} />
            </ImageLink>
        </figure>
    )
}

function ImageLink(props) {
    return (<Link to={`/images/${props.filename}`}>{props.children}</Link>)
}

function Comment({comment}) {
    const commentStyle = {
        whiteSpace: "pre-line"
    }

    return (
        <div className="comment">
            <span style={commentStyle}>
                {comment}
            </span>
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.exact({
        threadId: PropTypes.number,
        postId: PropTypes.number,
        author: PropTypes.string,
        email: PropTypes.string,
        subject: PropTypes.string,
        comment: PropTypes.string,
        postedAt: PropTypes.string,
        isPinned: PropTypes.bool,
        isWrittenByOp: PropTypes.bool,
        admin: PropTypes.exact({
            adminId: PropTypes.number,
            nickname: PropTypes.string,
            colorCode: PropTypes.string
        }),
        files: PropTypes.arrayOf(PropTypes.exact({
            fileName: PropTypes.string,
            thumbnailName: PropTypes.string,
            info: PropTypes.string,
        }))
    })
};

export default Post;