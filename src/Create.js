import { useState } from 'react';
import './css-styles/create-page_stylesheet.css';
const Create = () => {
    const [title,setTitle] = useState(null)
    const [author,setAuthor] = useState(null);
    const [body,setBody] = useState(null);
    const [isPending,setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        fetch("http://localhost:8000/blogs",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                title: title,
                author: author,
                body: body
            })
        })
        .then(() => {
            setIsPending(false)
        })
        .catch((err) => {
            console.log(err.message);
        });
    }
    return ( 
        <div>
        <h2>Add a new Blog</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Blog Title</label>
                <input 
                    type = "text"
                    name = "blog_title"
                    placeholder = "Title"
                    onChange = {(e) => {
                        setTitle(e.currentTarget.value)
                    }}
                    required = ""
                />
                <label>Blog Author</label>
                <input 
                    type = "text"
                    name = "blog_author"
                    placeholder = 'Author'
                    onChange = {(e) => {
                        setAuthor(e.currentTarget.value)
                    }}
                    required = ""
                />
                <label>Blog Body</label>
                <textarea 
                    name = "blog_author"
                    placeholder = "Body"
                    required = ""
                    onChange = {(e) => {
                        setBody(e.currentTarget.value)
                    }}
                />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog....</button>}
            </form>
        </div>
     );
}
 
export default Create;