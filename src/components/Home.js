import React from 'react';
import styled from 'styled-components';
import Section from './Section';

export const Home = () => {
  return (
      <Container>
         <Section 
         title="Model S " 
         description= "Order Online For Touchless Delivery"
         backGroundImg= "model-s.jpg"
         leftBtnText= "Custom Order"
         rightBtnText= " Existing Inventory"/>

         <Section 
         title="Model Y " 
         description= "Order Online For Touchless Delivery"
         backGroundImg= "model-y.jpg"
         leftBtnText= "Custom Order"
         rightBtnText= " Existing Inventory"  />

           <Section
            title="Model 3 " 
         description= "Order Online For Touchless Delivery"
         backGroundImg= "model-3.jpg"
         leftBtnText= "Custom Order"
         rightBtnText= " Existing Inventory"/>

         <Section
         title="Model X " 
         description= "Order Online For Touchless Delivery"
         backGroundImg= "model-x.jpg"
         leftBtnText= "Custom Order"
         rightBtnText= " Existing Inventory"/>

         <Section
          title=" Lowest Cost Solar Panel In America" 
         description= "Money Back Guarantee"
         backGroundImg= "solar-panel.jpg"
         leftBtnText= "Order Now"
         rightBtnText= " Learn More"
         
         />
         <Section
         
         title= "accessories"
         description= ""
         backGroundImg= "accessories.jpg"
          leftBtnText= "Shop now"/>

      </Container>
  )
};

const Container = styled.div`
height: 100vh`