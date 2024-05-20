import Link from "next/link";
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const subjects = [
    { name: 'Mathematics', id: 1, price: 25 },
    { name: 'English', id: 2, price: 25 },
    { name: 'Science (Basic)', id: 3, price: 25 },
    { name: 'History', id: 4, price: 25 },
    { name: 'Geography', id: 5, price: 25 },
    { name: 'Physics', id: 6, price: 25 },
    { name: 'Chemistry', id: 7, price: 25 },
    { name: 'Biology', id: 8, price: 25 },
    { name: 'Programming', id: 9, price: 25 },
    { name: 'Arts', id: 10, price: 25 }
  ];
  
  const packages = [
    { name: 'Basic Pack', price: 60, subjects: ['Mathematics', 'English', 'Science (Basic)'] },
    { name: 'Extra Pack', price: 150, subjects: ['Mathematics', 'English', 'Science (Basic)', 'History', 'Geography', 'Physics', 'Chemistry', 'Biology'] },
    { name: 'Pro Pack', price: 180, subjects: ['Mathematics', 'English', 'Science (Basic)', 'History', 'Geography', 'Physics', 'Chemistry', 'Biology', 'Programming', 'Arts'] }
  ];
  
  const Course = () => {
    const [selectedSubjects, setSelectedSubjects] = useState(new Map());
    const [selectedPackage, setSelectedPackage] = useState(null);
    const router = useRouter();
  
    const toggleSubjectSelection = subject => {
      setSelectedSubjects(prev => {
        const newSelection = new Map(prev);
        if (newSelection.has(subject.name)) {
          newSelection.delete(subject.name);
        } else {
          newSelection.set(subject.name, subject.price);
        }
        setSelectedPackage(null);
        return newSelection;
      });
    };
  
    const selectPackage = packageOption => {
      setSelectedPackage(packageOption);
      const newSubjects = new Map();
      packageOption.subjects.forEach(subject => {
        const foundSubject = subjects.find(s => s.name === subject);
        if (foundSubject) {
          newSubjects.set(foundSubject.name, foundSubject.price);
        }
      });
      setSelectedSubjects(newSubjects);
    };
  
    const handlePaymentClick = () => {
        if (!selectedPackage) {
            if (selectedSubjects.size > 0) {
                router.push('/paymentPages/random');
            } else {
                alert('Please select some subjects or a package before proceeding to payment.');
            }
            return;
        }
    
        switch (selectedPackage.name) {
            case 'Basic Pack':
                router.push('/paymentPages/basic');
                break;
            case 'Extra Pack':
                router.push('/paymentPages/extra');
                break;
            case 'Pro Pack':
                router.push('/paymentPages/pro');
                break;
            default:
                alert('Invalid package selected');
        }
    };
    
  
    const calculateTotal = () => {
      if (selectedPackage) {
        return selectedPackage.price;
      }
      let total = 0;
      selectedSubjects.forEach((price) => total += price);
      return total;
    };
  

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-logo">
          <img src="/4.png" alt="Learning+" />
        </div>
        <nav className="header-nav">
          <Link href="/home">SIGN OUT</Link>
        </nav>
      </header>
      <h1 className="title">Subject Selection</h1>
      <div className="subjects">
        {subjects.map(subject => (
          <button key={subject.id}
                  onClick={() => toggleSubjectSelection(subject)}
                  className={selectedSubjects.has(subject.name) ? 'selected' : ''}
          >
            {subject.name} - ${subject.price}
          </button>
        ))}
      </div>
      <div className="packages">
        {packages.map(pack => (
          <button key={pack.name}
                  onClick={() => selectPackage(pack)}
                  className={selectedPackage && selectedPackage.name === pack.name ? 'selected' : ''}
          >
            {pack.name} - ${pack.price}
          </button>
        ))}
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <p>Selected Package: {selectedPackage ? selectedPackage.name : 'None'}</p>
        <p>Total: ${calculateTotal()}</p>
      </div>
      <button className="checkout-btn" onClick={handlePaymentClick}>Continue to Payment</button>
      <style jsx>{`
        /* Basic Resets */
        body, h1, button, p {
          margin: 0;
          padding: 0;
          font-family: 'Arial', sans-serif;
        }

        /* App background and overall padding */
        .App {
          background-color: #FF287C; 
          color: #333;
          padding: 20px;
          min-height: 100vh; /* Full height */
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        /* Header Styles */
        .app-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          border-radius: 5px;
        }

        .header-logo img {
          height: 50px;
        }

        .header-nav {
          display: flex;
        }

        .header-nav a {
          color: #007bff;
          text-decoration: none;
          margin-left: 20px;
        }

        .header-nav a:hover {
          text-decoration: underline;
        }

        .subjects, .packages {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 10px;
          margin-bottom: 30px;
        }


        button {
          border: none;
          background-color: white;
          color: #333;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.3s, color 0.3s;
        }

        button.selected {
          background-color: #FF6AA4;
          color: black;
        }

        .order-summary {
          padding: 20px;
          background-color: white;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          border-radius: 5px;
          margin-bottom: 20px;
        }

        .order-summary h2 {
          margin-bottom: 10px;
        }

        .checkout-btn {
          background-color: #007bff;
          color: white;
          font-size: 16px;
          border: none;
          padding: 10px 20px;
          width: 100%;
          border-radius: 5px;
          cursor: pointer;
        }

        .checkout-btn:hover {
          background-color: #0056b3;
        }

        /* Title styles */
        .title {
          margin-top: 20px;
          margin-bottom: 10px;
          font-size: 28px; /* Larger font size */
          font-weight: bold; /* Bolder font */
          color: #fff; /* Better visibility on dark background */
        }
      `}</style>
    </div>
  );
}

export default Course;
