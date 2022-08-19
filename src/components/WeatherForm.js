import React from 'react';


const WeatherForm = props => {
   return(
    
        <div className='card card-body'>
            <form onSubmit={props.getWeather}>
                <h1 className='text-center'>Weather App</h1>
                <div className='form-group'>
                    <input type='text' name='city' placeholder='City Name' className='form-control' autoFocus/>
                </div>
                <br></br>
                <div className='form-group'>
                    <input type='text' name='country' placeholder='Country Name' className='form-control' autoFocus/>
                </div>
                <br></br>
                <div className='text-center'>
                <button className='btn btn-success btn-block '>
                    Get Weather
                </button>
                </div>
            </form>

  
           
        </div>
    )
}

export default WeatherForm;