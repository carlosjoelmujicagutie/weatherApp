import React , { useState,useEffect }from 'react'
import { WeatherForm } from './weatherForm'
import { WeatherMainInfo } from './weatherMainInfo'
import {Loading} from './loading'
import style from './weatherApp.module.css'

export const WeatherApp = () => {
    const [weather,setWeather] = useState()

    useEffect(() =>{
      loadInfon()
    },[]);

    useEffect(() =>{
      document.title = `Clima de : ${weather?.name}`;
    },[weather]);

    async function loadInfon(city='london'){
        try {
            const request= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&units=metric&appid=c17ae06a65a6dc4263210188f4dceaa4`,{cache:'no-cache'});
            if (request.ok ) {
               const json= await request.json();
               setWeather(json);
            }  
        } catch (error) {
            console.log(error);
        }
    }

    function handleChangeCity(city){
      setWeather(null);
      loadInfon(city);
    }
  return (
    <div className={style.weatherContainer}>
      <div className={style.title}>Weather App</div>
        <WeatherForm onChangeCity={handleChangeCity}/>
        { weather ? <WeatherMainInfo weather={weather}/>: <Loading/>}
    </div>
  )
}
