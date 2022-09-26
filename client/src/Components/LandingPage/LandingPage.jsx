import { Link } from 'react-router-dom';
import style from './LandingPage.module.css'

/*
Debe contener una imagen de fondo.
Debe contener un botón para ingresar al home.
*/
export default function LandingPage(){
    
return(
  <div className={style.biggerSquare}>
    <div className={style.background}></div>
    <p className={style.square}>
    <p className={style.title}>Welcome to </p>
    <p className={style.title2}>Countries!</p>
    <p className={style.subtitle}>A website where you can find tourist activities around the world.</p>
      <Link to='/home' className={style.link}>Go to home page</Link>
    </p>
  </div>
)}