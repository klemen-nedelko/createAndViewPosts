import { useEffect, useState } from'react';
import { Form, Button,Alert, InputGroup } from 'react-bootstrap';
import { useNavigate  } from "react-router-dom";
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';


const Login = () => {

    const database =[
        {
            username: "admin",
            password: "klemen",
            role: "admin"
        },
        {
            username: "klemen",
            password: "klemen",
            role: "user"
        },
    ];

    const[uname, setUname] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");
    const[showError, setShowError] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const userData = database.find((user) => user.username === uname) ? database.find((user) => user.username === uname) : "";
            if(uname === userData.username && userData.password === password) {

                    localStorage.setItem("username", JSON.stringify(uname));
                    localStorage.setItem("role", JSON.stringify(userData.role));
                    localStorage.setItem("isAuthenticated", true);
                
                    if(localStorage.getItem("role").replace(/['"]+/g, '')  === "admin") {    
                        localStorage.setItem("jeAdmin", true);            
                        navigate("/admin");
                    }else if(localStorage.getItem("role").replace(/['"]+/g, '')  !== "admin") {
                        setError("You cannot access to this information");
                    }
            } else {
                setError("Username or password is incorrect");
                setShowError(true);
            }

            setUname('');
            setPassword('');
    }
    useEffect(()=>{

        if(localStorage.getItem("isAuthenticated")){
            navigate("/admin");
        }

    });
    setTimeout(() => {

        localStorage.removeItem('username');
        localStorage.removeItem('role');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('jeAdmin');

      }, 24 * 60 * 60 * 1000);

    return(
        <>
        <Layout
        setWidth={"30rem"}
        >
        <h1>Prijava</h1>
        <p>Vpisite vase uporabnisko ime in geslo</p>
            <Form onSubmit={handleSubmit} className="d-grid gap-3">
            <InputGroup className="mb-3">
                <InputGroup.Text>
                    <FontAwesomeIcon icon={faUser} />
                </InputGroup.Text>
                <Form.Control  
                    type="text"
                    placeholder='Uporabnisko ime'
                    id='uname'
                    className='form-control'
                    value={uname}
                    onChange={(e) => setUname(e.target.value)}
                    required
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>
                    <FontAwesomeIcon icon={faLock} />
                </InputGroup.Text>
                <Form.Control 
                    type="password"
                    placeholder='Geslo'
                    id='password'
                    className='form-control'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </InputGroup>
                <Button className="mx-auto mt-5  w-100" size="lg" type="submit">PRIJAVA</Button>
            </Form>
            {
                showError ?
                <Alert variant='danger' >
                    {error}
                </Alert> : ""
            }
            </Layout>
        </>
    );
}

export default Login;