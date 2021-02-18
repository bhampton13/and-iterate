import React from 'react';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';


const Wrapper = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  justify-content:center;
  align-items:center;
  z-index:20;
  display:flex;
`

const ModalBackground = styled.div`

  width:60%;
  @media screen and (max-width: 768px){
    width:85%;
  }
  border:solid 3px;
  box-shadow: 0 5px 16px #000000;
  border-radius:16px;
  background-color: #FFFFFF;
  display:flex;
  flex-direction:column;
  position:relative;
  padding: 1%;
`
const CloseModalButton = styled(MdClose)`
  cursor:pointer;
  position: absolute;
  float:right;
  color:#000000;
  top:20px;
  right:20px;
  width:32px;
  height:32px;
  padding:0;
`
const Header = styled.h1 `
  font-family: Poppins;
  padding: '0.75rem';
`

const Body = styled.div`
  font-family: Poppins;
  padding: '0.75rem';
`

const generateBody = (content) => {
  var final = []
  content.map(function(each){
    final.push(<h2>{each.header}</h2>)
      each.items.map(function(item){
        final.push(<li>{item}</li>)
      })
  })
  return final
}

const Modal = (props) => {
  
  return(
    <div>
      {props.showModal ? (
        <Wrapper style={{ color: props.info.color}}>
          <ModalBackground showModal={props.showModal}>
            <CloseModalButton aria-label='Close modal' onClick={() => props.setShowModal(prev => !prev)} />
            <Header>{props.info.info.title}</Header>
            <Body>{generateBody(props.info.info.content)}</Body>
          </ModalBackground>
        </Wrapper>
      ) : null} 
    </div>
  )
};

export default Modal