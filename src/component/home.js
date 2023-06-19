export const Home = () => {
    return (
        <>
            <section className="hero">
                <div style={{
                    backgroundImage: 'url(stunning.jpg)',
                    backgroundSize: '100%',
                    height: '950px',
                }}>
                    {/* <a href="#" className="btn">Learn More</a> */}
                </div>
            </section>
            <section className="featured">
                <h2></h2>
                <div className="featured-items">
                    <div className="item">
                        {/* <img src="Stunning.jpg" alt="Item" /> */}
                        <h1 className="quote">Welcome to Stunning Fashion Store. A fashion store online specializing in designer branded clothing and accessories with in-house brands and a selection of private label products.
                        </h1>
                        <p className="styling"> <a href="/" ></a>Pay Less Get More</p>

                    </div>
                    <div className="subscription-message">
                        <h3>Subscribe and Save 10%</h3>
                        <p>Stay updated with the latest products, promotions, and exclusive offers!</p>
                        <form>
                            <input type="email" placeholder="Enter your email address" required />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                    {/* Add more featured items here */}
                </div>
            </section>
            <section className="about">
                <p>FASHION IS LIKE THE PERFECT SPICE.</p>
            </section>
        </>
    )
} 