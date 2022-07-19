import React from 'react'
import './skills.css'

function Skills() {
    const hard_skills = [
        {
            title: 'React',
            discription:'class & function components, life cycle methods, HOC, HOOK, axios, ref',
            image: '/react.png'},
        {
            title: 'Redux',
            discription: 'combineReducers, reducer, dispatch, action, provider, connect, react-router-dom, redux-thunk;',
            image: '/redux.png'},
        {
            title: 'TypeScript',
            discription: 'typing props, creating Interfaces/Types, generics;',
            image: '/ts.png'},
        {
            title:'HTML',
            discription: 'tags, atributes, forms',
            image: '/html.png'},
        {
            title:'CSS',
            discription: 'flex, grid, media queries, animation',
            image: '/css.png'},
            
        {
            title:'JS',
            discription: 'es5 / es6; Arrow functions, array methods, spread, destructuring, promise, pure function, localStorage;',
            image: '/js.png'},
    ]
 
    return (
        <div className="skills_wrapper d-flex gap-5">
            <div className="soft_skill row align-items-start">
               { hard_skills.map((item, index)=>(
                    <div className="skill_data col-6">
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