import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Alert} from 'react-bootstrap';
import { useNavigate  } from "react-router-dom";
import { Articles } from '../components/Articles';
import { Pagination } from '../components/Pagination';
import Layout from '../components/Layout';

export const ApplicationSubmision = () => {

    const [info, setInfo] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);
    const navigate = useNavigate();

    const startIndex = (currentPage - 1) * postsPerPage;
    const indexOfLastPost = startIndex + postsPerPage;
    const indeOfFirstPost = startIndex; 
    const currentPost = info.slice(indeOfFirstPost, indexOfLastPost);


    const paginate = (pageNumbers) => setCurrentPage(pageNumbers);


    useEffect( () => {
        if(localStorage.getItem("role") == null || localStorage.getItem("role") === "undefined")
        {
            navigate("/");
        }else if(localStorage.getItem("role").replace(/['"]+/g, '') !== "admin") {
            navigate("/");
        }
        setInfo(JSON.parse(localStorage.getItem('article')));
    },[navigate]);


  return (
    <>
        <Container>
            <Row>
                <Layout
                    setWidth={"auto"}
                >
                    <Card.Body>
                    <h1 className="mb-5">Prejete vloge</h1>    
                    {
                        currentPost.length === 0 ? 
                        <Alert variant='danger'>
                            <h3 className="m-2 highlight">No articels!</h3>
                        </Alert>:
                        <>
                            <Articles 
                                articles={currentPost}
                                startIndex={startIndex}
                        />
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={info.length}
                            currentPage={currentPage}
                            paginate={paginate}
                        />
                    </>
                    }   
                    
                    </Card.Body>
                    </Layout>
            </Row>
        </Container>
    </>
  )
}