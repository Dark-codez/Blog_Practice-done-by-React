import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {isPending, data, error} = useFetch(`http://localhost:8000/blogs/${id}`);
    return ( 
        <div className = "blog-details">
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}

            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>{data.body}</p>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;