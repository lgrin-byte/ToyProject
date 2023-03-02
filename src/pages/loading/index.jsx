import React,{useEffect} from 'react'
import {LoadingImg, Div} from '../../styles/loadingStyle'
// import speaker from '../../../public/css_sprites.png'
// import speaker from '/css_sprites.png'
import Link from 'next/link';
import Router, {useRouter} from 'next/router';
import { useSelector } from "react-redux";

export default function index() {
  const count = useSelector((state) => state.user.value);

  useEffect(()=>{
    setTimeout(()=>{ 

      const targerPage = `/result/${count.name}`;
      // Router.push(targerPage);
      Router.push(
        {
          pathname: `/result/`,
          query: {
            name:count.name,
            year:count.year,
            score:count.score
          },
        }
      );
    }, 2000);
  });
  

  return (
    <div className={`color${count.year}`} style={{height:"100vh", paddingTop:"200px"}}>
      <Div>
        <LoadingImg/>
        <Link rel="stylesheet" href="/result" />
      </Div>
    </div>
    // <Img  src={speaker}/>
  )
}
