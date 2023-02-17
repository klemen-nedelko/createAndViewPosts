import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { Form, Button } from 'react-bootstrap';

export function Forms(){

    const id = localStorage.hasOwnProperty('article') ? JSON.parse(localStorage.getItem('article')).length + 1 : 1;
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const article = {
        id: id,
        name: name,
        surname: surname,
        address: address,
        message: message,
        stars: 0
    };
    
    const handleSubmit = (e) =>{

        e.preventDefault();
        const existingArticles = localStorage.getItem('article') ? JSON.parse(localStorage.getItem('article')) : [];
        const updatedArticles = existingArticles.concat(article);
        localStorage.setItem('article', JSON.stringify(updatedArticles));

        if(localStorage.hasOwnProperty('article')){
            navigate("/confirm");
        }
    }
    
    return(
        <>
        <Layout
            setWidth={'30rem'}
        >
        <h1 className="highlight">ODDAJA VLOGE</h1>
        <p>Izpolnite spodnje polja in oddajte vlogo, ce se zelite potegovati za izbrano delovno mesto</p>
        <form onSubmit={handleSubmit}  className="d-grid gap-3">
            <Form.Control 
                className="p-2 m-1" 
                type="text" 
                name="Ime" 
                placeholder="Ime"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                />
            <Form.Control 
                className="p-2 m-1"
                type="text" 
                name="Priimek"
                placeholder="Priimek"
                value={surname}
                onChange={e => setSurname(e.target.value)}
                required
                />
            <Form.Control 
                className="p-2 m-1"
                type="text"
                name="Naslov"
                placeholder="Naslov"
                value={address}
                onChange={e => setAddress(e.target.value)}
                required
                />
            <Form.Control as="textarea" rows={3} 
                className=" p-2 m-1"
                placeholder="Zakaj ste vi najbolj primerni za izbrano delo"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                />
            <Button className="mx-auto mt-5  w-100" size="lg" type="submit">ODDAJ</Button>
        </form>
        </Layout>
        </>
    )
}