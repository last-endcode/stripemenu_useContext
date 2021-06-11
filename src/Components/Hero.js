import React from 'react';
import '../Style/Hero.css';
import { useGlobalContext } from './context';

function Hero() {
  const { closeSubMenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubMenu}>
      <div className='hero-center section'>
        <div className='hero-banner'>
          <h2>arsitektur company</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit totam
            necessitatibus unde rem inventore sunt odit suscipit illum. Autem,
            voluptas?
          </p>
          <button className='btn-home'>buy furniture</button>
        </div>
        <div className='hero-img'>
          <img
            src='https://images.unsplash.com/photo-1621165403627-5b819a84524f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80'
            alt=''
            className='hero-1'
          />
          <img
            src='https://images.unsplash.com/photo-1609618486540-8b210e32fe79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
            alt=''
            className='hero-2'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
