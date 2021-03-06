import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {useParams, useNavigate} from 'react-router-dom'
import {Card, Col, Container, Row} from "react-bootstrap";

const Category = () => {
    const [meal, setMeal] = useState([]);
    const params = useParams();
    useEffect(()=> {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.name}`)
            .then(({data})=> setMeal(data.meals));
    }, []);
    console.log(meal);
    return (
        <>
                <Row>
                    {meal.map((item)=> (
                        <Col lg={4} sm={6} xs={12} key={item.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={`${item.strMealThumb}`} />
                                <Card.Body>
                                    <Card.Title>{item.strMeal}</Card.Title>
                                    <Link to={`${item.idMeal}`}>More info</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
        </>
    );
};

export default Category;