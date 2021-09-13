import Post from "../board/Post";

function Posts({posts, prefix}) {
    return (
        <div className="posts threads">
            {
                posts.map(post => <Post post={post} prefix={prefix} key={post.postId}/>)
            }
        </div>
    )
}

export default Posts;