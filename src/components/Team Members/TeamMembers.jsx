import React from 'react'
import Dennis from '@/assets/Team-photos/Dennis.jpg';
import Iyvone from '@/assets/Team-photos/Iyvone.jpg';
import Joy from '@/assets/Team-photos/Joy.jpg';
import Muturi from '@/assets/Team-photos/Muturi.jpg';
import Owen from '@/assets/Team-photos/Owen.jpg';
import Nderu from '@/assets/Team-photos/Nderu.jpg';
import Baraka from '@/assets/Team-photos/Baraka.jpg';

import './TeamMembers.css'

const teamMembers = [
    { name: 'Lawrence Nderu', position: 'PI', image: Nderu, bio: 'Lawrence Nderu specializes in AI and Machine Learning research. He leverages his vast experience in AI and holds a Ph.D. in the field.', linkedin: 'https://www.linkedin.com/in/lawrence-nderu/' },
    { name: 'Edi Baraka', position: 'Project Lead', image: Baraka, bio: 'Edi Baraka is a skilled app developer with a passion for creating intuitive and user-friendly applications.', linkedin: 'https://www.linkedin.com/in/edi-baraka-chege-747377289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Dennis Gituhu', position: 'Front-End Engineer', image: Dennis, bio: 'Dennis is our frontend engineer, dedicated to helping people achieve their fitness goals by creating interactive websites.', linkedin: 'https://www.linkedin.com/in/dennis-mwangi-62812a275/' },
    { name: 'Joy Ngoroge', position: 'UX/UI Designer', image: Joy, bio: 'Joy designs intuitive user interfaces that make our platform easy and enjoyable to use.', linkedin: 'https://www.linkedin.com/in/joy-ndome-090b1a308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Kimani Owen', position: 'Backend Engineer', image: Owen, bio: 'Owen is our backend wizard, ensuring that our systems run smoothly and efficiently behind the scenes.', linkedin: 'http://www.linkedin.com/in/kimani-mwangi-9233992ba' },
    { name: 'Iyvone Kamau', position: 'Data Analyst', image: Iyvone, bio: 'Iyvone transforms raw data into actionable insights, helping us make informed decisions and improve our services.', linkedin: 'http://www.linkedin.com/in/iyvone-kamau-b9ab42309' },
    { name: 'Anthony Muturi', position: 'Machine Learning Engineer', image: Muturi, bio: 'Anthony leverages cutting-edge machine learning algorithms to enhance our platform’s capabilities and user experience.', linkedin: 'https://www.linkedin.com/in/anthony-karugu-muturi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
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
                        <a href={member.linkedin} target='_blank' rel='noopener noreferrer' className='linkedin-link'>
                            LinkedIn
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TeamMembers;
