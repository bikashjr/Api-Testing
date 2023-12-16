import { Container, Nav, Navbar } from 'react-bootstrap';
import navbarData from '../mock/NavBarData'


const StoreNavbar = () => (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="/home" className='h1 text-uppercase fs-4 fw-bolder'> Buy me</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav justify-content-center">
                <Nav className='mx-auto fw-bold'>
                    {navbarData.map((item) => (
                        <Nav.Link href={item.to} key={item.id} >{item.title}</Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export const Header = () => {
    return (    
        <StoreNavbar />
    )
};