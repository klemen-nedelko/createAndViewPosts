import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Card, Container, Row } from 'react-bootstrap';


const Layout = ({children, setWidth}) => {
    
    const navigate = useNavigate();
    const location = useLocation();
    const [isThatPage, setIsThatPage] = useState(true);

    const sendToLogin = (e)=> {
        e.preventDefault();
        navigate("/login");
    }
    useEffect(() =>{
        if(location.pathname === "/login" || location.pathname ==="/admin"){
            setIsThatPage(false);
        }
    },[location])

    return (
        <>
        <Container>
            <Row>
                <Card className="mx-auto mt-5 text-center flex justify-center items-center bg-gra-100 d-grid gap-3" style={{maxWidth:setWidth, minHeight:'35rem'}}>
                    <Card.Body>
                        {children}
                    </Card.Body>
                </Card>
            </Row>
        </Container>
        
        {isThatPage ? 
            <Container>
                <Row>
                    <Button className="mx-auto" variant="link" onClick={sendToLogin} style={{color:'#fff'}}>Prijavi se kot administrator</Button>
                </Row>
            </Container>
                :" "
        }
        </>
    );
}

export default Layout;