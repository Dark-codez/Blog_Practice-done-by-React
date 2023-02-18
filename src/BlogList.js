import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs}) => {
    return (  
        <div>
            {blogs.map((item) => (
                <div className = "blog-list" key = {item.id}>
                    <Link to = {`http://localhost:8000/blogs/${item.id}`}>
                        <h2>Title: {item.title}</h2>
                        <h4>Author: {item.author}</h4>                    
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;