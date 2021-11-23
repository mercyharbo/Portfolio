const About = () => {
    return (
        <div className="about_wrapper">
            <h1> About me </h1>
            
            <div className="about">
                <div className="details">
                    <p>
                        Hello, I am Mercy from Osun, Nigeria, a Software Developer & Designer passionate about creating 
                        amazing stuff for the internet. My interest started in 2018 when I met someone studying computer
                        science at University like me that put me through how and where to start learning to code, after
                        doing my won research I find out about W3school, udemy, and YouTube which helped my journey as I
                        was just getting to know about HTML, CSS, and JavaScript for the first time then.Hello, I am Mercy
                        from Osun, Nigeria, a Software Developer & Designer passionate about creating amazing stuff for the 
                        internet. My interest started in 2018 when I met someone studying computer science at University like 
                        me that put me through how and where to start learning to code, after doing my won research I find out 
                        about W3school, udemy, and YouTube which helped my journey as I was just getting to know about HTML, CSS,
                        and JavaScript for the first time then.
                    </p>

                    <p>
                        I'm skilled in JavaScript, CSS, SCSS, React js, Node/express js, Git & Github, and I'm a team person, 
                        working together with people has helped me develop because I tend to learn and challenge myself to do more.
                        Over the years, I have learned to pick different projects beyond me just to improve my coding skill, which
                        has really helped me. I pick projects from Frontendmentor, Dribble and more.
                    </p>

                    <div className="stack">
                        <ul>
                            <li> JavaScript [ ES6 ] </li>
                            <li> React JS </li>
                            <li> Node [Express JS] </li>
                            <li> SCSS/Sass </li>
                            <li> CSS 3</li>
                        </ul>

                        <ul>
                            <li> Git & GitHub </li>
                            <li> HTML 5</li>
                            <li> WordPress </li>
                            <li> Bootstrap </li>
                        </ul>
                    </div>
                </div>

                <div className="details image_cont">
                    <div className="design"></div>
                    <img src="IMG_3457.HEIC" alt="" />
                </div>
            </div>
        </div>
        
     );
}
 
export default About;