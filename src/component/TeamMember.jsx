import styles from "./TeamMember.module.css";

const TeamMember = () => {
  const team = [
    {
      title: "Managing Director", 
      name: " Gaura Dubey & Sumit Kalia",
      description: "Visionary leader with 15+ years of transformative experience in production management. Driving strategic innovation, operational excellence, and sustainable growth through cutting-edge methodologies and forward-thinking leadership that inspires teams to achieve extraordinary results across global markets.",
      accentColor: "#FF6B6B",
      image: "👨‍💼",
      expertise: ["Strategic Planning", "Leadership", "Innovation", "Global Operations"]
    },
    {
      title: "Production Manager",
      name: "Amar Shrivas",
      description: "Expert in optimizing manufacturing processes with precision engineering. Ensures superior product quality through innovative techniques while maintaining peak operational efficiency and implementing lean manufacturing principles across all production lines with remarkable consistency.",
      accentColor: "#4ECDC4",
      image: "🏭",
      expertise: ["Process Optimization", "Quality Control", "Lean Manufacturing", "Efficiency"]
    },
    {
      title: "Operations Manager",
      name: "Amir Khan",
      description: "Master strategist in operational workflow optimization. Specializes in seamless logistics coordination, performance analytics, and team development to drive productivity while maintaining the highest standards of operational excellence and customer satisfaction.",
      accentColor: "#45B7D1",
      image: "⚙️",
      expertise: ["Operations", "Logistics", "Team Development", "Performance Analytics"]
    },
    {
      title: "Chief Financial Officer",
      name: "Aakash Lalwani",
      description: "Financial architect with exceptional expertise in strategic fiscal planning and analysis. Builds robust financial frameworks that support aggressive growth while ensuring regulatory compliance and maximizing shareholder value through data-driven decision making.",
      accentColor: "#96CEB4",
      image: "💰",
      expertise: ["Financial Strategy", "Compliance", "Data Analysis", "Growth Planning"]
    },
    {
      title: "Commercial & Trading Manager",
      name: "Aniket Singh",
      description: "Dynamic negotiator and relationship builder with proven success in global markets. Creates strategic partnerships, identifies emerging opportunities, and drives commercial excellence through innovative trading strategies and market intelligence.",
      accentColor: "#FFEAA7",
      image: "🤝",
      expertise: ["Business Development", "Partnerships", "Market Strategy", "Negotiation"]
    },
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.mainTitle}>Executive Leadership</h1>
        <p className={styles.subtitle}>Meet the exceptional minds driving our vision forward with innovation and expertise</p>
        <div className={styles.headerAccent}></div>
      </div>
      
      <div className={styles.teamContainer}>
        {team.map((member, index) => (
          <div 
            key={index} 
            className={`${styles.memberRow} ${index % 2 === 0 ? styles.leftLayout : styles.rightLayout}`}
            style={{ '--accent-color': member.accentColor }}
          >
            <div className={styles.memberContent}>
              <div className={styles.textContent}>
                <div className={styles.headerSection}>
                  <div className={styles.titleWrapper}>
                    <span className={styles.titleIcon}>{member.image}</span>
                    <div>
                      <h4 className={styles.memberTitle}>{member.title}</h4>
                      <h2 className={styles.memberName}>{member.name}</h2>
                    </div>
                  </div>
                  <div className={styles.accentLine}></div>
                </div>
                
                <p className={styles.memberDescription}>{member.description}</p>
                
                <div className={styles.expertiseContainer}>
                  <h5 className={styles.expertiseTitle}>Key Expertise</h5>
                  <div className={styles.skillsContainer}>
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={styles.visualSection}>
                <div className={styles.accentBar}></div>
                <div className={styles.achievementBadge}>
                  <span className={styles.badgeIcon}>⭐</span>
                  <span className={styles.badgeText}>Industry Expert</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.footerNote}>
        <div className={styles.footerContent}>
          <h3>Driving Excellence Together</h3>
          <p>Our leadership team combines decades of industry experience with innovative thinking to deliver exceptional results and sustainable growth for our organization and partners worldwide.</p>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;