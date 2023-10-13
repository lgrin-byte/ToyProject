

import React,{useEffect} from 'react'
import {LoadingImg, Div} from '../../styles/loadingStyle'
import Link from 'next/link';
import Router from 'next/router';
import { useSelector } from "react-redux";

export default function index() {
  const count = useSelector((state) => state.user.value);

  useEffect(()=>{
    setTimeout(()=>{ 
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
  )
}
