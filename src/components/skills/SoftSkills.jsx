import React from 'react'
import './skills.css'

function Skills() {
    const soft_skills = [
        {
            title: 'Collaboration ',
            discription:'Teamwork, leadership, empathy, interpersonal skills, tolerance, conflict resolution',
           },
        {
            title: 'Adaptability',
            discription: 'Flexibility, follow instructions, manage stress, communication, customer service',
          },
        {
            title: 'Resourcefulness',
            discription: 'Creative thinking, problem-solving, troubleshooting, organisational skills, planning',
           },
        {
            title:'Positive attitude ',
            discription: 'Charismatic, outgoing, friendly, motivating, mental resilience, persistence',
           },
        {
            title:'Willingness to learn',
            discription: 'Active listener, self-awareness, professionalism, open to change, ',
            },
            
        {
            title:'Critical thinking',
            discription: ' Observation, negotiation, persuasion, analytical skills, strategic planning',
            },
    ]
    
    return (
        <div className="skills_wrapper d-flex gap-5">
            <div className="soft_skill row align-items-start">
               { soft_skills.map((item, index)=>(
                    <div className="skill_data col-6">
                        <div className="skill_title">
                            <h4>{item.title}</h4>
                            <span>{item.discription}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="hard_skill"></div>
        </div>
    )
}

export default Skills