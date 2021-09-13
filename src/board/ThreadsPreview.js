import Post from "./Post";

function ThreadsPreview({posts, prefix}) {
    return(
        <div className="threads">
            {
                posts.map(post => <Post post={post} prefix={prefix} key={post.postId}/>)
            }
        </div>
    )
}

export default ThreadsPreview;