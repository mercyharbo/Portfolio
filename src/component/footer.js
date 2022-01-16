const Footer = () => {
    return (
        <div className="footer">
            <hr />
            <div className="grid">
                <p> Coded & Design by <a href="www.twitter.com/codewithmercy"> Code With Mercy </a> using ReactJS </p>
                
                <div className="social_links">
                   <a href="https://instagram.com/codewithmercy" target="_blank" rel="noopener noreferrer">
                       <img src="001-instagram.svg" alt="" />
                   </a>

                   <a href="https://www.linkedin.com/in/codewithmercy/" target="_blank" rel="noopener noreferrer">
                       <img src="005-linkedin.svg" alt="" />
                   </a>

                    <a href="https://twitter.com/codewithmercy" target="_blank" rel="noopener noreferrer">
                       <img src="006-twitter.svg" alt="" />
                   </a>

                   <a href="https://www.facebook.com/Mercyoluwap" target="_blank" rel="noopener noreferrer">
                       <img src="002-facebook.svg" alt="" />
                   </a>
                </div>  
            </div>
            
        </div>
     );
}
 
export default Footer;