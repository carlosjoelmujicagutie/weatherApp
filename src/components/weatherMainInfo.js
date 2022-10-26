import React from 'react'
import style from './weatherMainInfo.module.css'
export const WeatherMainInfo = ({weather}) => {
  return (
    <div className={style.mainInfo}>
        <div className={style.city}>{weather?.name}</div>
        <div className={style.country}>{'Humedad: '+weather?.main.humidity+'%'}</div>
        <div className={style.country}>{'Temperatura: '+weather?.main.temp+'°C'}</div>
    </div>
  )
}

