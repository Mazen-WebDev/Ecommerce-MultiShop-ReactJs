import "../styles/NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <>
            <div className="nav-bar">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="/#"><span className='fw-bold fs-1 px-2 sp-1'>MULTI</span><span className='fw-bold fs-1 px-2 sp-2'>SHOP</span></a>
                        <form className="d-flex search-form" role="search">
                            <div className="input-group">
                                <input type="text" className="form-control input-search" placeholder="Search For Products" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffd333", }} /></span>
                            </div>
                        </form>
                        <div className="service-box d-flex flex-column justify-content-center align-items-center">
                            <span className='text-black-50'>Customer Service</span>
                            <span className='fs-4'>+012 345 6789</span>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default NavBar;