import React, { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ReactMarkdown from 'react-markdown';
import Layout from '@theme/Layout';
import styles from './index.module.css'; // Import the CSS module
import '@fortawesome/fontawesome-free/css/all.min.css';


interface TeamMember {
  name: string;
  email?: string;
  linkedin?: string;
  img?: string;
  github?: string;
  website?: string;
}


const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className={styles['team-member-card']}>
    <img src={member.img || '/data/u1.png'} alt={member.name} />
    <h3>{member.name}</h3>
    <div className={styles.links}>
      {member.email && <a href={`mailto:${member.email}`}><i className="fas fa-envelope"></i></a>}
      {member.linkedin && <a href={member.linkedin}><i className="fab fa-linkedin"></i></a>}
      {member.github && <a href={member.github}><i className="fab fa-github"></i></a>}
      {member.website && <a href={member.website}><i className="fas fa-globe"></i></a>}
    </div>
  </div>
);

function TeamFeature() {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetch('/data/team.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTeam(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div className={styles['team-container']}>
      {team.map((member, index) => (
        <TeamMemberCard key={index} member={member} />
      ))}
    </div>
  );
}

export default function ReleasePage(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Develop a soccer simulation team by using any programming language">
      <main style={{width: '100%', justifyContent:'center', display: 'flex'}}>
        <main style={{width: '75%'}}>
        <TeamFeature />
        </main>
      </main>
    </Layout>
  );
}