const About = () => {
    return (
        <main className="about_wrapper">
            <h1> About me </h1>
            
            <article className="about">
                <header className="details">
                    <p>
                        Hello again, I am Frontend Engineer passionate about using my skills to create amazing web and mobile
                        apps that can solve existing problem. My interest in coding started in 2018 when someone I met studying
                        Computer Science from another school introduce me into tech, she sent me couple of PDF files and after making
                        my own research too from Google I find out about YouTube video tutorial that covers HTML and CSS, here I am 
                        today writing this article for my portfolio website. As a Computer Science graduate, I have grown so well in
                        the practical and theoretical aspect of web applications with the essential skills of multitasking, wide 
                        knowledge in Microsoft, and ability to work under little or no supervision at all. 
                    </p>

                    <p>
                        I'm skilled in JavaScript, ReactJS, NodeJS, ExpressJS, version control ( Git & Github ), CSS3, CSS preprocessor (Sass). 
                        Learning all these skills I have been able to build several projects that add to my knowledge and how I tackle 
                        each challenge I face during coding or real-life issues.
                    </p>

                    <details className="stack">
                        <ul>
                            <li> JavaScript ( ES6 ) </li>
                            <li> ReactJS </li>
                            <li> NodeJS / ExpressJS </li>
                            <li> Sass </li>
                            <li> CSS3 </li>
                            <li> Git & GitHub </li>
                            <li> HTML5 </li>
                            <li> Bootstrap </li>
                            <li> WordPress </li>
                        </ul>
                    </details>
                </header>

                <section className="details image_cont">
                    <div className="design"></div>
                    <img src="IMG_3457.HEIC" alt="" title="Code With Mercy"/>
                </section>
            </article>
        </main>
        
     );
}
 
export default About;