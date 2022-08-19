import React from 'react';

const WeatherInfo = props => {
    return (

        <div>
            {
                props.error &&
                <div className='alert alert-danger'>
                    <p>{props.error}</p>
                </div>
            }
            {
                props.temperature ?

                    <div className='card card-body'>
                        <p>
                            Location: {props.city}, {props.country}
                        </p>
                        <p>
                            Temperature: {props.temperature} ℃, {props.description}
                        </p>
                        <p>
                            Wind Speed: {props.wind_speed}
                        </p>
                    </div>

                    : 
                    <div className='card card-body'>
                        <p>No Request Yet</p>
                    </div>
            }



        </div>
    )
}

export default WeatherInfo;