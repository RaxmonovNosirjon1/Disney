import React from 'react'
import styled from "styled-components";
import {db} from "../config"
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
export default function Recommends({detailsPage}) {
  const [user,setUser]=useState([])
   

  async function getUsers(){
    try{
     await getDocs(collection(db,'users')).then(res=>{
      setUser(res.docs.map(doc=>({id:doc.id,...doc.data()})))
     })
     }catch{
          
     }
  }
  useEffect(()=>{
    getUsers()
   
  },[user])
  return (
    <div>
      <video preload="none" crossorigin="anonymous" src="http://fayllar1.ru/20/kinolar/Flash%202023%201080p%20O%27zbek%20tilida%20(asilmedia.net).mp4" x-webkit-airplay="allow" disableremoteplayback="true" pip="false" style="position: static; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: contain; transition: filter 0.2s linear 0s; min-height: auto; max-height: none; min-width: auto; max-width: none;"></video>
          <Container>
          <Content>
          {user.length > 0 ? user.map(item=>(
            <Wrap>
             <button onClick={()=>detailsPage(item)}>
              <img src={item.poster} alt="" />
              </button>
            </Wrap>
            )):<h1>Loading...</h1>}
           </Content>
           </Container>
    </div>
  )
}
const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;





