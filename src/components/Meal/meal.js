import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Meal.css'


const Meal = () => {
    const [food, setFood] = useState({});
    const [info, setInfo] = useState({});
    const params = useParams();
    useEffect(()=>{
       axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`).then(({data})=> setFood(data.meals[0]))
    }, []);
    useEffect(()=> {
       axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`).then(({data})=> setInfo(data.meals[0]))
    });
    return (
        <>
            <div className='info'>
                <img className='img' src={`${food.strMealThumb}`} alt={`${food.strMeal}`}/>
                <div className='info__text'>
                    <span className='title'>Name : {food.strMeal}</span>
                    <span className='subtitle1'> Country : {food.strArea}</span>
                    <span className='subtitle2'> Category : {food.strCategory}</span>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mhDJNfV7hjk?start=6"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </div>
            <div className='instr-block'>
                <p>{info.strInstructions}</p>
            </div>
            <table className='centered'>
                <thead>
                <tr>
                    <th>Ingredients</th>
                    <th>Measure</th>
                </tr>
                </thead>
                <tbody>
                {Object.keys(info).filter((el)=> {
                    return el.includes(`strIngredient`) && info[el]
                }).map((el, idx)=> {
                    return <tr key={idx}>
                        <td key={idx}>{info[el]}></td>
                            <td>{info[`strMeasure${el.substring(13)}`]}</td>
                        </tr>
                })}
                </tbody>
            </table>
        </>
    );
};

export default Meal;