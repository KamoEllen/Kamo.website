import React from 'react';
import './Project1.css'; // Import the CSS file
import Header from './Header';
import Persona from '../assets/persona.png';
import Palette from '../assets/Palette.png';
import Flowchart from '../assets/flowchart.png';
import Dribble from '../assets/Dribbble.png';
import Wireframe from '../assets/wireframe.png';
import Resturant from '../assets/projectresturant.png'

const ProblemSolutionn = () => {
  const containerStyle = {
    
    color: '#000000',
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    maxWidth: '100%',
    height: 'auto',
  };

  const sectionStyle = {
    marginBottom: '40px', 
  };

  const importantStyle = {
    fontWeight: 'bold',
  };

  const h1Style = {
    fontSize: '28px',
    fontWeight: 'bold',
  };

  const h2Style = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const h3Style = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const pStyle = {
    lineHeight: '1.5',
    marginBottom: '15px',
  };

  const hrStyle = {
    border: 'none',
    borderTop: '1px solid #ccc',
    margin: '20px 0',
  };

  const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '20px auto',
  };

  const timelineContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
  };

  const timelineContentStyle = {
    flex: 1,
  };

  const whitePaperStyle = {
    whiteSpace: 'pre-wrap',
    textAlign: 'center',
  };

  const iframeContainerStyle = {
    border: '1px solid rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={containerStyle}>
     <Header/>
     <div className="smolmargin">
      <br />
      <div style={sectionStyle}>
      <h5 className="important">PROBLEM</h5>
      <h1> Improving Dining Experience</h1>
      <p className="smaller">
      Users often face challenges in finding suitable food options based on their dietary choices and may experience friction during the ordering process, leading to a less satisfying experience and slower transactions.
      </p>
</div>
      <br />
      <br />
      <br />
      <div style={sectionStyle}>

      <h5 className="important">Solution</h5>
      <h1>Enhanced Dining Experience with Personalization</h1>

      <p>
      The solution offers a <span className="important">personalized menu page</span> categorizing food based on <span className="important">dietary</span> choices and user-friendly "Greats You" page for <span className="important">quick reordering</span> and recommendations.
      </p></div>
      <hr />
      <br />

      {/* Add the image here */}
      <div style={sectionStyle}> 
      <img src={Dribble} alt="" />
</div>

      <br />
      <br />
      <br />

      <br />
      <hr />
      <div style={sectionStyle}>
      <div className="timeline-container" style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ whiteSpace: 'pre-wrap', textAlign: 'center' }}>July - July 2023 (2 weeks)</h2>
          <p className="smaller" style={{ whiteSpace: 'pre-wrap', textAlign: 'center' }}>
            Timeline
          </p>
        </div>
        <div style={{ flex: 1, textAlign: 'right' }}>
          <h2 style={{ whiteSpace: 'pre-wrap', textAlign: 'center' }}>My Role</h2>
          <p className="smaller" style={{ whiteSpace: 'pre-wrap' }}>UX Designer</p>
        </div>
      </div>
</div>
      <br />
      <h1></h1>
      <div style={sectionStyle}>
      <h6>WHITE PAPER RESEARCH</h6>

      <p>
      This research enhances user purchase intent and checkout efficiency for food ordering platforms. It explores strategies based on user behavior and preferences, including personalization, menu categorization, recommendation engines, and seamless checkout. A/B testing ensures user-centricity and alignment with evolving preferences, fostering loyalty and success in the competitive food delivery market.
      </p>
</div>
      <br />
      <div style={sectionStyle}>
      <h6>Step 1: How Diets Affect Users and Improve Their Restaurant Experience</h6>
      <p>
      Meeting Dietary Needs: Offering diverse diet options saves users time and frustration by providing food items that align with their specific dietary requirements.
      </p></div>
      <img src={Persona} alt="" />
<p>Emily, the Introverted Foodie</p>
<p>Meet Emily, a charming introvert who enjoys dining out but often finds it overwhelming to decide on a meal that aligns with her dietary choices. She seeks a seamless and personalized dining experience that caters to her preferences.</p>
<div style={sectionStyle}>
<img src={Flowchart} alt="" />
<p>Designing the Perfect User Flow</p>
<p>As a UX designer, my thought process began by creating a comprehensive flowchart. I brainstormed ways to simplify the decision-making process for users like Emily. The goal was to guide her smoothly through the app, ensuring she finds the perfect meal without any hassle.</p>
</div>
<div style={sectionStyle}>
<img src={Wireframe} alt="" />
<p>From Idea to Wireframe</p>
<p>With the user flow in mind, I crafted detailed wireframes that reflected the intuitive navigation of the app. The wireframes allowed me to visualize the layout and interactions, making it easier to fine-tune the design and enhance user satisfaction.</p>
</div>
<div style={sectionStyle}>
<img src={Palette} alt="" />
<p>Creating a Delightful Color Palette</p>
<p>To evoke a sense of warmth and comfort, I carefully selected a color palette that resonated with the dining experience. The colors were chosen to create a cozy ambiance and establish a visual identity that users like Emily would find inviting.</p>

With Emily's persona as my guiding star, the design journey was a delightful and fulfilling experience. The end result? An app that embraces personalization, simplifies dining choices, and ensures Emily always enjoys a delightful meal tailored to her tastes.
</div>
<div style={sectionStyle}>
<img src={Resturant} alt="" />

<p> A Tailored Dining Experience</p>
<p>An app that celebrates personalization, simplifies dining choices, and ensures Emily always savors a delightful meal that speaks to her heart.</p>
            </div>
      
      <br />
      <br />
      <div style={sectionStyle}>
      <h6>Step 2: Reducing Decision-Making Time</h6>
      <p>
       Clear diet categories enable users to quickly find suitable food choices, leading to a more enjoyable dining experience.
      </p></div>
      <br />
      <br />
      <div style={sectionStyle}>
      <h6>Step 3 + 4: Positive Perception of the Restaurant </h6>
      <p>
       Catering to different dietary preferences demonstrates inclusivity and fosters a positive perception of the restaurant, encouraging customer loyalty.
      </p></div>




  <hr />
  <br />
  <br />
  <div style={sectionStyle}>
  <h6>Step 5:  Encouraging Exploration and Loyalty</h6>
  <p>
  Personalized diet-based recommendations inspire users to explore new menu items, leading to a sense of excitement and increased platform loyalty.
  </p> </div>

  <br />
  <br />
  <p>
    
  By considering users' diets and providing relevant options, food ordering platforms can enhance the overall user experience, fostering satisfaction and encouraging repeat business for restaurants.
  </p>

  <hr />
  <br />
  <br />

  <h6>Created with Figma</h6>
  <br />
  <div className="iframe-container">

<iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FtBBQWjtEa8029Rzku6bviy%2FResturant%3Ftype%3Ddesign%26node-id%3D1-3519%26t%3DBR0vMC8MoYWLXKg0-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A3252%26mode%3Ddesign" allowfullscreen></iframe>
  </div>
  </div>
</div>
);
};

export default ProblemSolutionn;
