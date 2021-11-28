import { Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Auditor Calculator</h1>
            <div className="links">
                <Link to="/">Report</Link>
                <Link to="/create">New Report</Link>
            </div>

        </nav>
     );
}
 
export default Navbar;