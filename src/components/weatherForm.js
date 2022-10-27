import React,{ useState} from 'react'
import style from './weatherForm.module.css'

export const WeatherForm = ({onChangeCity}) => {

    const [city,setCity]= useState()

    function onChange(e){
        const value = e.target.value;
        if (value!==''){
            setCity(value);
        }else{
            setCity('lima');
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        onChangeCity(city);
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className={style.container}>
            <input type="text" onChange={onChange} className={style.input}/>
        </form>
    </div>
  )
}
