import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Error = () => {
    return (  
        <div className = "error">
            <p>Sorry this page resource does not exist</p>
            <Link to = "/"><p style = {{
                fontSize: "2rem",
                textDecoration: "underline",
                color: "#f00"
            }}>Go Back</p></Link>
        </div>
    );
}
 
export default Error;