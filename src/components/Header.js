import React, {useState} from 'react';
import styled from  "styled-components";
import Menu  from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from '../features/car/carSlice';
import {useSelector} from "react-redux";

const Header = () => {
  const [barStatus, setBarstatus] = useState(false);
  const cars = useSelector(selectCars)
  
  return (
      <Container>
          <a>
            <img src="/images-tesla-clone/logo.svg" alt="" />
          </a>

          <Menus>
            {cars && cars.map(( items,index )=>(
              <a key={index} href="#">{items}</a>
            ))}
           
          </Menus>
        
            <RightMenu>
             <a href="#">shop</a>
              <a href='#'>Tesla account</a>

              <CustomMenu onClick={()=> setBarstatus(true)} />
            </RightMenu>
         
            
            <NavBar show={barStatus}>
                 <ClosedWrapper  >
                 <ClosedBar onClick={()=> setBarstatus(false)} />
               </ClosedWrapper>
               {cars && cars.map(( items,index)=>(
                 <li key={index}><a href="#">{items}</a> </li>

  ))}
              <li><a href="#"></a> <p> Existing Inventory </p> </li>
              <li><a href="#"></a>Used Inventory</li>
              <li><a href="#"></a>Trade In</li>
              <li><a href="#"></a>Cyber Truck</li>
              <li><a href="#"></a>Roadaster</li>
              <li><a href=""></a></li>
             
            </NavBar>
            
      </Container>
  )
};

export default Header;

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
padding: 0 20px;
align-items: center;
flex-wrap:nowrap;
top : 0;
left : 0;
right : 0;
`

const Menus = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1; 



a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
  
}
  
`
const RightMenu = styled.div`
display: flex;
align-items: center;

a {
  font-weight: 600;
  text-transform: uppercase;
  margin:  10px;
 
} 
`
const CustomMenu = styled(Menu)`

`
const NavBar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px 0;
  padding-left:5px !important;
  display: flex; 
  text-align: start;
  flex-direction: column;
  transform : ${props => props.show ? "translateX(0)" : "translateX(100%)"};
  transition : transform  0.2 ;
 
 

  li{
    margin : 15px 0;
 
    border-bottom : 1px solid rgba(0, 0, 0, .2);

  }
  a{
    font-weight: 600;
  
  }
`

const ClosedBar = styled(CloseIcon)`
cursor: pointer;
  
`
const ClosedWrapper = styled.div`
display: flex;
justify-content: flex-end;

  
`


