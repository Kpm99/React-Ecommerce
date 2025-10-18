import React from 'react'
import styled from 'styled-components';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import Features from './components/Features';
import { useGlobalContext } from './context/context'
const Home = () => {
  const data = { name: "Menon Store" };
  let contextData = useGlobalContext();
  console.log("contextData", contextData);

  return (


    <>
      <HeroSection myData={data} />
      <Features />
      <Services />

      <Trusted />

    </>
  )
}

const Wrapper = styled.section`
background-color: ${({ theme }) => theme.colors.bg};
height: 100vh;
width: 100%;
`

export default Home
