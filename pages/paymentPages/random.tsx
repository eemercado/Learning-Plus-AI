import Link from "next/link";
import router from "next/router";
import React, { useState } from 'react';

const PaymentPage = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardExpiry, setCardExpiry] = useState('');
    const [cardCVC, setCardCVC] = useState('');

    const handlePayment = () => {
        alert('Payment Successful!');
        router.push('/ai/aiRandom');  
    };

    return (
        <div className="payment-page">
            <nav className="px-12 py-5">
                <Link href="/home">
                    <img src="/4.png" alt="Logo" className="h-12 cursor-pointer" />
                </Link>
                </nav>
            <Link href="/course" className="go-back-button">GO BACK</Link>
            <div className="product-details">
                <h2 className="shopping-list">SHOPPING LIST</h2>
                <ul>
                    <li>History</li>
                    <li>Chemistry</li>
                    <li>Arts</li>
                </ul>
                <p className="subtotal">SUBTOTAL: $150</p>
            </div>
            <div className="divider"></div>
            <div className="payment-container">
                <h1>ENTER YOUR PAYMENT DETAILS</h1>
                <div className="payment-form">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="CARD NUMBER"
                            value={cardNumber}
                            onChange={e => setCardNumber(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="EXPIRY DATE"
                            value={cardExpiry}
                            onChange={e => setCardExpiry(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="CVC"
                            value={cardCVC}
                            onChange={e => setCardCVC(e.target.value)}
                        />
                    </div>
                    <button onClick={handlePayment}>PAY NOW</button>
                </div>
            </div>
            <style jsx>{`
                .payment-page {
                    display: flex;
                    flex-direction: column; 
                    justify-content: center; 
                    align-items: center; 
                    padding: 20px;
                    min-height: 100vh;
                    background-color: #FF287C;
                }
                
                .product-details {
                    width: auto;  
                    display: flex;
                    flex-direction: column; 
                    padding: 20px;
                    background-color: #FFFFFF;
                    border-radius: 10px;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                    margin-bottom: 20px; 
                    margin-top: 10px;
                }
                
                .divider {
                    width: 1px;
                    background-color: #000;
                    margin: 0 20px;
                }
                h1, h3, p, li {
                    color: #000;
                    margin-left: 20px
                    
                }
                h2 {
                    font-size: 20px;
                    font-weight: bold;
                }
                ul {
                    list-style: none;
                    padding: 0;
                }
                ul li {
                    margin-bottom: 10px;
                }
                .subtotal {
                    font-size: 20px;
                    font-weight: bold;
                    margin-left: 0px;
                    margin-top: 20px;
                }
                .payment-form {
                    display: flex;
                    flex-direction: column;
                }
                .input-group {
                    margin-bottom: 20px;
                }
                input {
                    width: 100%;
                    padding: 15px;
                    border-radius: 15px;
                    border: none;
                    margin-top: 5px;
                    font-size: 16px;
                    background-color: #FFF;
                    color: #000; 
                }
                button {
                    background-color: #007bff;
                    color: white;
                    padding: 20px;
                    border: none;
                    border-radius: 15px;
                    cursor: pointer;
                    font-size: 20px;
                    transition: background-color 0.3s;
                }
                button:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </div>
    );
};

export default PaymentPage;
