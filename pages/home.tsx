import Link from 'next/link';
import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

const HomePage = () => {
  return (
    <div style={{ height: '100vh', color: 'black', position: 'relative', backgroundColor: '#FF287C' }}>
      
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: '92%',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: 2,
        marginTop: '12px'
      }}>
        <a href="/readMe" style={{ color: 'black', textDecoration: 'none' }}>
          READ ME
        </a>
        <div> 
          <Link href="/auth">SIGN UP</Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link href="/auth">LOGIN</Link>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'translateY(-50%)', 
        zIndex: 2,
      }}>
        <img src="/4.png" alt="EmmeFlix" style={{ width: '80vw', height: 'auto' }} />
      </div>

      <div style={{
        position: 'absolute',
        bottom: '12px',
        left: 0,
        right: 0,
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        gap: '24px', 
        marginBottom: '24px'
      }}>
        <a href="https://github.com/eemercado" className="text-2xl"> 
          <FaGithub />
        </a>
      </div>
    </div>
  );
  
};

export default HomePage;
