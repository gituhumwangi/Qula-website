import React from 'react'
import './TeamMembers.css'

const teamMembers = [
    { name: 'Lawerence Nderu', position: 'CEO', image: 'https://via.placeholder.com/150', bio: 'Nderu is the visionary behind Qula, with over 20 years of experience in the wellness industry.' },
    { name: 'Edi Baraka', position: 'Project Lead', image: 'https://via.placeholder.com/150', bio: 'Edi is a certified nutritionist who loves creating healthy, delicious recipes.' },
    { name: 'Dennis Mwangi', position: 'Front-End Engineer', image: 'https://via.placeholder.com/150', bio: 'Dennis is our frontend Engineer, dedicated to helping people achieve their fitness goals by creating interactive websites.' },
    { name: 'Joy Ngoroge', position: 'Marketing Director', image: 'https://via.placeholder.com/150', bio: 'Joy drives our marketing efforts with her innovative strategies and creative campaigns.' },
    { name: 'Owen Kimani', position: 'Backend Engineer', image: 'https://via.placeholder.com/150', bio: 'Owen is our backend wizard, ensuring that our systems run smoothly and efficiently behind the scenes.' },
    { name: 'Iyvone Kamau', position: 'Data Analyst', image: 'https://via.placeholder.com/150', bio: 'Iyvone transforms raw data into actionable insights, helping us make informed decisions and improve our services.' },
    { name: 'Anthony Muturi', position: 'Machine Learning Engineer', image: 'https://via.placeholder.com/150', bio: 'Anthony leverages cutting-edge machine learning algorithms to enhance our platform’s capabilities and user experience.' },
];


const TeamMembers = () => {
    return (
        <section className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-container">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <img src={member.image} alt={`${member.name}'s photo`} className="team-photo" />
                        <h3>{member.name}</h3>
                        <p className="position">{member.position}</p>
                        <p className="bio">{member.bio}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TeamMembers