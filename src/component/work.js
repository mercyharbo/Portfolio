const Work = () => {
    return (
        <main className="Work">
            <h1> Work </h1>
            
            <section className="work_grid">
                <section className="items">
                    <img src="time_tracking.png" alt="Time Tracking Dashboard" title="Time Tracking Dashboard"/>

                    <section className="work_details">
                        <h2> Time Tracking Dashboard </h2>

                        <p>
                            This is a solution to the Time tracking dashboard challenge on Frontend Mentor.
                            This was one of the hards project I first worked with using JavaScript, I was bale to 
                            practice and understand how to DOM works, forEach, and the way I write function got better.
                        </p>

                        <mark> 
                            <a href="https://github.com/mercyharbo/frontendmentor-projects/tree/time-tracking-dashboard" target="_blank" rel="noopener noreferrer"> Source code </a>
                            <a href="https://timetrackindashboard.netlify.app/" target="_blank" rel="noopener noreferrer"> Live site </a>
                        </mark>
                    </section>
                </section>

                <section className="items">
                    <img src="pricing.png" alt="Pricing Component with toggle" title="Pricing Component with toggle"/>

                    <section className="work_details">
                        <h2>  Pricing Component with toggle </h2>

                        <p>
                            This is a solution to the Pricing component with toggle challenge on Frontend Mentor.
                            This was achieved by inputting the prices into an array that was later called when the 
                            button is toggle to pay for annual or monthly price instead, also make use of if statement.
                            I learned about loop building this project and more about DOM manipulations.
                        </p>

                        <mark> 
                            <a href="https://github.com/mercyharbo/pricing" target="_blank" rel="noopener noreferrer"> Source code </a>
                            <a href="https://mercyharbo.github.io/pricing/" target="_blank" rel="noopener noreferrer"> Live site </a>
                        </mark>
                    </section>
                </section>

                <section className="items">
                    <img src="space-tourism.png" alt="Space Tourism" title="Space Tourism"/>

                    <section className="work_details">
                        <h2>  Space Tourism </h2>

                        <p>
                            This is a solution to the Space Tourism challenge on Frontend Mentor.
                            This is a multipage website built using ReactJS, I am able to learn how to toggle 
                            which allow me to switch the slides in the destination, crew, and technology page, 
                            It was the first time I work with a multipage website, was an amazing experience.
                        </p>

                        <mark> 
                            <a href="https://github.com/mercyharbo/frontendmentor-projects/tree/space_tourism" target="_blank" rel="noopener noreferrer"> Source code </a>
                            <a href="https://space-tourismmercy.netlify.app/" target="_blank" rel="noopener noreferrer"> Live site </a>
                        </mark>
                    </section>
                </section>

                <section className="items">
                    <img src="easy.png" alt="Easybank" title="Easybank Landing Page"/>

                    <section className="work_details">
                        <h2>  Easybank Landing Page </h2>

                        <p>
                            This is a solution to the Easybank Landing Page on Frontend Mentor.
                            This is one of the project I couldn't finished at once because I don't understand 
                            how CSS positioning, z-index and mobile responsive works then but I did what I can 
                            and came back to it when I have better knowledge of the skills required to complete 
                            it.
                        </p>

                        <mark> 
                            <a href="https://github.com/mercyharbo/Easybank" target="_blank" rel="noopener noreferrer"> Source code </a>
                            <a href="https://mercyharbo.github.io/Easybank/" target="_blank" rel="noopener noreferrer"> Live site </a>
                        </mark>
                    </section>
                </section>
            </section>

            <a href="http://www.github.com/mercyharbo" target="_blank" rel="noopener noreferrer">
                <button> See More </button>
            </a>
        </main>
     );
}
 
export default Work;