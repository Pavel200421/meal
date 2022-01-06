import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    useEffect(()=> {
            axios('https://www.themealdb.com/api/json/v1/1/categories.php')
                .then(({data})=> setCategories(data.categories))
    }, []);
    console.log(categories);
    return (
        <>
                <Row>
                    {categories.map((item)=> (
                        <Col lg={4} sm={6} xs={12} key={item.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={`${item.strCategoryThumb}`} />
                                <Card.Body>
                                    <Card.Title>{item.strCategory}</Card.Title>
                                    <Card.Text>
                                        {item.strCategoryDescription}
                                    </Card.Text>
                                    <Button onClick={()=> navigate(`category/${item.strCategory.toLowerCase()}`)} type='button' variant="primary">I want</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
        </>
    );
};

export default Home;