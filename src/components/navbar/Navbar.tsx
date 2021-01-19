import './Navbar.css'

export const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>Piebot</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/recipes">Recipes</a>
            </div>
        </nav>
    )
}