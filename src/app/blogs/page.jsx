import Link from "next/link";

const BlogsPage = () => {
    const blogs = [
        {
            "id": 1,
            "title": "Mastering React for Modern Web Development",
            "cover_image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
            "author_name": "Ayesha Rahman",
            "author_image": "https://randomuser.me/api/portraits/women/44.jpg",
            "posted_date": "2026-03-10",
            "reading_time": "6 min read",
            "hashtags": ["react", "javascript", "frontend", "webdev"]
        },
        {
            "id": 2,
            "title": "Node.js Backend: From Beginner to Pro",
            "cover_image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
            "author_name": "Tanvir Hasan",
            "author_image": "https://randomuser.me/api/portraits/men/32.jpg",
            "posted_date": "2026-02-28",
            "reading_time": "8 min read",
            "hashtags": ["nodejs", "backend", "api", "javascript"]
        },
        {
            "id": 3,
            "title": "Top 10 UI/UX Design Trends in 2026",
            "cover_image": "https://images.unsplash.com/photo-1545235617-9465d2a55698",
            "author_name": "Nusrat Jahan",
            "author_image": "https://randomuser.me/api/portraits/women/68.jpg",
            "posted_date": "2026-04-01",
            "reading_time": "5 min read",
            "hashtags": ["uiux", "design", "trends", "figma"]
        },
        {
            "id": 4,
            "title": "MongoDB Essentials for Full Stack Developers",
            "cover_image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
            "author_name": "Sakib Ahmed",
            "author_image": "https://randomuser.me/api/portraits/men/75.jpg",
            "posted_date": "2026-03-20",
            "reading_time": "7 min read",
            "hashtags": ["mongodb", "database", "mern", "backend"]
        }
    ];
    return (
        <div>
            <h1 className="text-5xl text-purple-700 mb-5">Blogs</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    blogs.map(blog => <div className="p-4 border-2 border-gray-700 rounded-xl" key={blog.id}>
                        <h3 className="text-xl text-orange-500 mb-3">{blog.title}</h3>
                        <Link href={`blogs/${blog.id}`} className="btn btn-primary">Show Details</Link>
                    </div>)
                }
            </div>

        </div>
    );
};

export default BlogsPage;