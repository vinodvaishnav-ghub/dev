import React from 'react';
import './OurMessage.css'; // Assuming you have a CSS file for styling

const OurMessage: React.FC = () => {
  return (
    <div className="container">
      <main className="message-content">
        <div className="profile-card">
          <div className="profile-details">
            <div className="profile-header">
              <h2>Vandana Vaishnav</h2>
              <h3>Director of the Project</h3>
            </div>
            <div className="profile-content">
              <p>
                As the Director of this organization, I am both honoured and privileged to lead INTERN PARTNER, an organization committed to creating a lasting impact in our community and beyond. At the heart of our work is the belief that change is not only possible but achievable when we unite with compassion, dedication, and a shared vision for a brighter tomorrow.
              </p>
              <p>
                With the unwavering support of our incredible team, volunteers, and partners, we are making strides in transforming lives and fostering stronger, more resilient communities. Our programs aim to empower individuals, promote sustainable development, and uplift those who need it most. But none of this would be possible without the support of people like you—those who understand the power of solidarity and the importance of giving.
              </p>
              <p>
                I encourage you to explore our website to learn more about our work and discover the many ways you can get involved. Whether through donations, volunteering, or simply spreading awareness, your involvement helps us bring hope to those who need it most.
              </p>
              <p>
                Together, we can make a difference and build a future that reflects our collective efforts.
              </p>
              <p>
                Best regards,
                <br />
                Vandana Vaishnav
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OurMessage;