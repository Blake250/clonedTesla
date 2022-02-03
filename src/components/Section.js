
import React from 'react';
import styled from "styled-components"
import Fade from "react-reveal/Fade"


const section = ({title,description,leftBtnText,rightBtnText, backGroundImg}) => {
    return ( 
        <Wrap bgImage={backGroundImg} >
        
        <Fade bottom>
        <ItemText>
        
        <h3>{title} </h3> 
        <p> {description} </p> 
        </ItemText> 
        </Fade>
        <Buttons>
          <Fade>
        <ButtonGroup>

        <LeftButton>
        {leftBtnText}
        </LeftButton> 
        
         {rightBtnText &&
          <RightButton>
         {rightBtnText}
        </RightButton> }
        </ButtonGroup> 
        </Fade>
        <DownArrow src = "/images-tesla-clone/down-arrow.svg" />
        
        </Buttons> 
        </Wrap>
    )
};
export default section;

const Wrap = styled.div ` 
z-index: 10;
width : 100vw;
height : 100vh;
background-image : url(images-tesla-clone/model-s.jpg);
background-size : cover;
background-position : center;
background-repeat : no-repeat;
display : flex;
flex-direction : column;
justify-content : space-between;
align-items : center;
background-image : ${props => `url("/images-tesla-clone/${props.bgImage}")`}



`

const ItemText = styled.div `
padding: 15vh;
text-align: center`

const ButtonGroup = styled.div `
display: flex;
margin-bottom : 30px;
@media(max-width : 760px){
  flex-direction : column;
}

`
const LeftButton = styled.div `
background-color: rgba(23, 26, 32,0.8);
height : 40px;
width: 256px;
color : white;
display: flex;
justify-content: center;
align-items: center;
margin-bottom : 30px;
border-radius: 100px;
opacity : 0.85;
text-transform: uppercase;
font-size: 12px;
cursor : pointer;
margin : 8px;

`
const RightButton = styled(LeftButton)`
background: white;
opacity : 0.65;
color : black;


`


const DownArrow = styled.img `

height : 40px;
overflow-x : hidden;
animation : animateDown infinite 1.5s;
  
`
const Buttons = styled.div` `