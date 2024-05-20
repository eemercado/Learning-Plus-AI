import Link from "next/link";
import React from 'react';

const BusinessGoalsPage = () => {
    return (
        <div className="business-goals-container">
            <Link href="/home" className="logo-link">
                <img src="/4.png" alt="Logo" className="h-12 cursor-pointer" />
            </Link>
            <div> 
                <Link href="/auth">SIGN UP</Link>
                <span style={{ margin: '0 8px' }}></span>
                <Link href="/auth">LOGIN</Link>
                </div>
            <h1>Business Objectives of Learning+</h1>
            <ul className="goals-list">
                <li>
                    <h2>Interactive and Personalized Learning Experience</h2>
                    <p>Utilizes AI to tailor the educational experience to each user's learning strengths and preferences, offering a unique, interactive, and adaptive learning solution.</p>
                </li>
                <li>
                    <h2>Accessibility and Convenience</h2>
                    <p>Accessible anytime and anywhere with an internet connection, perfect for students homeschooling, learning remotely, or in need of additional support.</p>
                </li>
                <li>
                    <h2>Comprehensive Educational Packages</h2>
                    <p>Offers a range of subscription plans from individual subjects to bundled packages, allowing users to select the best fit for their educational needs.</p>
                </li>
                <li>
                    <h2>Target Market Engagement</h2>
                    <p>Targets a large market of online learners by providing a more interactive and personalized learning approach compared to traditional platforms.</p>
                </li>
                <li>
                    <h2>Innovation in Education</h2>
                    <p>Incorporates advanced AI that adapts teaching methods continually to enhance the learning experience uniquely for each user.</p>
                </li>
                <li>
                    <h2>Sustainability and Growth</h2>
                    <p>Focuses on a sustainable business model through subscription-based revenue, ensuring continual growth and adaptation to educational needs.</p>
                </li>
            </ul>
            <style jsx>{`
                .business-goals-container {
                    width: 100%;
                    height: 100vh;
                    padding: 20px;
                    background-color: #FF287C;
                    color: black;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .logo-link {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                }
                .logo {
                    height: 50px; 
                    cursor: pointer;
                }
                h1 {
                    font-size: 24px;
                    font-weight: bold;
                    margin: 20px 0;
                }
                .goals-list {
                    list-style: none;
                    padding: 0;
                    width: 100%;
                    max-width: 800px;
                }
                .goals-list li {
                    background: #FFFFFF;
                    margin-bottom: 10px;
                    padding: 10px 20px;
                    border-radius: 5px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                }
                h2 {
                    color: #FF287C;
                    font-weight: bold;
                }
                p {
                    color: #333;
                    line-height: 1.5;
                }
            `}</style>
        </div>
    );
};

export default BusinessGoalsPage;
