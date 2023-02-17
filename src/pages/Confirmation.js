import React from 'react'
import { useNavigate } from "react-router-dom";
import Layout from '../components/Layout';
import { Button, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export const Confirmation = () => {

  const navigate = useNavigate();

  const handleButton = (e) =>{
    e.preventDefault();
    navigate("/");
  } 

  return (
    <Layout
      setWidth={"30rem"}
    >
        <Card.Body>
        <FontAwesomeIcon icon={faCheckCircle} size="6x"  className="highlight" />
          <h1  className="highlight">VLOGA USPESNO ODDANA</h1>
            <p>Vasa vloga je bila oddana v preverjanje. Po pregledu Vas bodo nasi usluzbenci o rezultatu obvestili preko elektronske poste, ki je navedena v vasem uporabniskem profilu</p>
          <Button className="mx-auto mt-5  w-100" size="lg" onClick={handleButton}>Nova oddaja</Button>
        </Card.Body>
    </Layout>
  )
}
