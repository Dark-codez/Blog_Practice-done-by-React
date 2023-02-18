import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {isPending,error,data} = useFetch("http://localhost:8000/blogs");
    return ( 
        <div className = "home_page">
            <p style = {{
                marginBottom: "2em"
            }}>Here are a list of the blogs on our server....</p>
            {isPending && <div>Loading.....</div>}
            {error && <div>{error}</div>}
            {data && <BlogList blogs = {data}/>}
        </div>
     );
}
 
export default Home;