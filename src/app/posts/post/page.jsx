import Link from "next/link";


const PostPage = ({ post }) => {
    return (
        <div className="card bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.body}</p>
                <div className="card-actions justify-end">
                    <Link href={`/posts/post/${post.id}`}><button className="btn">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PostPage;