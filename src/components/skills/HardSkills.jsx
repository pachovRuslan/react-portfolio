import React from 'react'
import './skills.css'
import react from '../../assests/img/react.png';
import redux from '../../assests/img/redux.png';
import ts from '../../assests/img/ts.png';
import html from '../../assests/img/html.png';
import css from '../../assests/img/css.png';
import js from '../../assests/img/js.png';
function Skills() {
    const hard_skills = [
        {
            title: 'React',
            discription:'class & function components, life cycle methods, HOC, HOOK, axios, ref',
            image: react},
        {
            title: 'Redux',
            discription: 'combineReducers, reducer, dispatch, action, provider, connect, react-router-dom, redux-thunk;',
            image: redux},
        {
            title: 'TypeScript',
            discription: 'typing props, creating Interfaces/Types, generics;',
            image: ts},
        {
            title:'HTML',
            discription: 'tags, atributes, forms',
            image: html},
        {
            title:'CSS',
            discription: 'flex, grid, media queries, animation',
            image: css},
            
        {
            title:'JS',
            discription: 'es5 / es6; Arrow functions, array methods, spread, destructuring, promise, pure function, localStorage;',
            image: js},
    ]
 
    return (
        <div className="skills_wrapper d-flex gap-5">
            <div className="soft_skill row align-items-start">
               { hard_skills.map((item, index)=>(
                    <div className="skill_data col-6" key={index}>
                        <div className="skill_title">
                            <h4>{item.title}</h4>
                            <span>{item.discription}</span>
                            <div className='skills_logo align-items-end'>
                                <img src={item.image} alt="logo"/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="hard_skill"></div>
        </div>
    )
}

export default Skills