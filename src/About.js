const About = () => {
    return (  
        <div>
            <p>
                I am Azu Chukwuemeka, just started my journey with react and this is the first project of many to come,
                am a web developer proficient in a some major web technologiest being :-
            </p>
            <ul style = {{
                margin: "1rem 0",
                paddingLeft: "20px",
                listStyle: "disc"
            }}>
                <li>HTML</li>
                <li>CSS3</li>
                <li>JAVASCRIPT</li>
                <li>NODE</li>
                <li>EXPRESS</li>
                <li>GIT/GITHUB</li>
                <li>MongoDB</li>
                <li>SQL</li>
            </ul>
            <p>
                Aspiring to become better with React and all components of react heres a link to my <a style = {{
                    color: "#f00",
                    textDecoration: "underline"
                }}href = "http://azuworks.netlify.com" target = "blank">portfolio</a>
            </p>
            
        </div>
    );
}
 
export default About;