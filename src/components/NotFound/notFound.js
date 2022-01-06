import React from 'react';
import {useNavigate} from 'react-router-dom'
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <section className='notFound'>
            <h1 className='notFound__title'>По данному запросу ничего не было найдено</h1>
            <button className='notFound__btn' onClick={()=> navigate(-1)}>Назад в будущее</button>
        </section>
    );
};

export default NotFound;