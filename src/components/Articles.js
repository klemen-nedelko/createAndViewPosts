import React, { useState } from 'react'
import { Card, Col, Container, Row, Button} from 'react-bootstrap';
import { StarRating } from './StarRating';

export const Articles = ({articles, startIndex}) => {

    const [selectedIdx, setSelectedIdx] = useState(null);
    function handleElementClick(idx){
        setSelectedIdx(idx);
    }

  return (
    <>
    {articles.map((item, idx) =>(
        <Card key={item.name}  className='mb-3'>
            <Card.Body>
            <Container className='m-3'>
                <Row>
                    <Col>
                    <Row>
                        <Col className='float-start  col-3'>
                        <p className="highlight float-start"> Ime</p>
                        </Col>
                        <Col  className='col-3'>
                        <p className="highlight float-start">Priimek</p>
                        </Col>
                        <Col  className='col-6'>
                        <p className="highlight float-start">Naslov</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-3'>
                                <p className="float-start">{item.name}</p>
                        </Col>
                        <Col className='col-3'>
                                <p className="float-start">{item.surname}</p>
                        </Col>
                        <Col className='col-6'>
                                <p className="float-start">{item.address}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <hr/>
                        <Row className="aling-middle">
                            <Col className="mt-auto mb-auto col-2">
                                <p className="highlight mt-auto mb-auto float-start"> Oceni vlogo:</p>
                            </Col>

                        <Col className="float-start col-9">
                            <Button onClick={() => handleElementClick(idx)} style={{backgroundColor:"transparent", borderColor:"transparent", float:'left'}}>
                                <StarRating
                                    getRating={item.stars}
                                    item={(selectedIdx + startIndex)}
                                />
                           </Button>
                           </Col>
                        </Row>
                        </Col>
                    </Row>
                    </Col>
                    <Col xs={12} xl={4} lg={4} md={4} sm={4}>
                    <p className="highlight">Opis</p>
                            <p className="m-auto" style={{maxWidth: '200px', textAlign:'center'}}>{item.message}</p>
                    </Col>
                </Row>
                </Container>
            </Card.Body>
        </Card>
    ))}
    </>
  )
}
