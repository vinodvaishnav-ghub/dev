import React, { useState } from 'react';

const AboutUs: React.FC = () => {
    const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({});

    const toggleExpand = (index: number) => {
        setExpandedCards(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const teamMembers = [
        {
            name: "Ms. Vandana Vaishnav",
            image: require("./../images/image.webp"),
            title: "Director, INTERN PARTNER",
            content: "Ms. Vandana holds a Bachelor’s degree in Arts (B.A.), Education (B.Ed) and a Master’s degree in Arts (M.A.) with a specialization in History & Social Sector. With 15 years of experience in the social sector, Vandana has a deep understanding of the complex challenges facing communities and a passion for creating sustainable change."
        },
        {
            name: "VINOD VAISHNAV",
            image: require("./../images/vinod.jpg"),
            title: "Chief Technical Advisor",
            content: "Mr. Vaishnav, Chief Technical Advisor at INTERN PARTNER, holds a Bachelor’s degree in Computer Applications (BCA) and a Master’s degree in Computer Applications (MCA). With 12 years of experience in software development and coding, he brings extensive technical expertise and a deep understanding of the evolving digital landscape."
        },
        {
            name: "DEEPIKA",
            image: require("./../images/dipika.JPG"),
            title: "Technical Advisor",
            content: "Ms. Deepika, Technical Advisor at INTERN PARTNER, holds a Bachelor’s degree in Computer Applications (BCA). She brings strong technical expertise and problem-solving skills to the team. With experience in various software development projects, she has gained hands-on expertise in coding, system design, and application management."
        },
        {
            name: "SURESH",
            // image: require("./../images/suresh.JPG"),
            title: "Mentor & Co-Founder",
            content: "Mr. Suresh, Mentor and Co-Founder of INTERN PARTNER, holds a Bachelor’s degree in Pharmacy (B. Pharma) and a Master’s degree in Business Administration (MBA) with a specialization in Pharmaceuticals. With 8 years of experience in Procurement & Supply Chain, Project Management, Service Procurement, and Contract Management, he brings a wealth of knowledge and strategic insight to the organization."
        },
        {
            name: "MANU DEWANGAN",
            // image: require("./../images/image.webp"),
            title: "Mentor & Co-Founder",
            content: "Mr. Dewangan, Mentor and Co-Founder of INTERN PARTNER, holds a Bachelor’s degree in Pharmacy (B. Pharma) and a Master’s degree in Business Administration (MBA) with a specialization in Pharmaceuticals. With 8 years of experience in the Public Health sector, Project Management, and Business Development, he brings a unique blend of technical expertise and strategic insight to the organization. Throughout his career, he has worked on numerous public health initiatives, focusing on improving healthcare delivery, access to medicines, and community health outcomes."
        },
        {
            name: "ANKIT BHARGAVA",
            // image: require("./../images/image.webp"),
            title: "Mentor & Co-Founder",
            content: "Mr. Bhargava, Mentor and Co-Founder of INTERN PARTNER, holds a Bachelor's degree in Commerce (B.Com) and a Master’s degree in Business Administration (MBA) with a specialization in Rural Development. With 8 years of experience in the Rural Development sector, Project Management, and Business Development, he brings a wealth of knowledge and a strong commitment to empowering rural communities."
        }        
    ];

    return (
        <div className="container">
            <div className="team-header">
                <h1>Our Leadership Team</h1>
                <p>Driving change through expertise and commitment</p>
            </div>

            {teamMembers.map((member, index) => (
                <div className="profile-card" key={index}>
                    {/* Only show image container if image exists */}
                    {member.image && (
                        <div className="profile-image">
                            <img src={member.image} alt={member.name} />
                        </div>
                    )}
                    <div className="profile-details" style={{ 
                        // Adjust width when there's no image
                        width: !member.image ? '100%' : 'calc(100% - 200px - 2rem)'
                    }}>
                        <div className="profile-header">
                            <h2>{member.name}</h2>
                            <h3>{member.title}</h3>
                        </div>
                        <div className="profile-content">
                            <p className={expandedCards[index] ? 'expanded' : 'truncated'}>
                                {member.content}
                            </p>
                            {member.content.length > 100 && (
                                <button 
                                    className="toggle-link" 
                                    onClick={() => toggleExpand(index)}
                                >
                                    {expandedCards[index] ? 'Show less' : 'More...'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AboutUs;
