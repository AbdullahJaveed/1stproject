const Header = () => {
    return (
        <nav>
            <div className="logo">
                <a> <h1 className="heading"> Stunning Fashion </h1> </a>
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/PrivacyAndPolicies">Privacy and Policies</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}
export default Header