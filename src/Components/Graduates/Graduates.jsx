import React, { useEffect, useState } from 'react';
import css from './Graduates.module.scss';
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion';
import { motion } from 'framer-motion';

export default function Graduates() {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (city) {
            setLoading(true);
            setError(null);

            fetch(`https://api.weatherbit.io/v2.0/current?city=${encodeURIComponent(city)}&key=b9a9a2b71a7b423cbaac01e1069c452a`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch weather data');
                    }
                    return res.json();
                })
                .then(data => {
                    setWeatherData(data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error.message);
                    setLoading(false);
                });
        }
    }, [city]);

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <>
            <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`paddings secondaryText ${css.wrapper}`}>
                <motion.span
                    variants={fadeIn("right", "tween", .2, 1)}
                    className='flexCenter'><motion.img
                        variants={slideIn("up", "tween", .5, 1.3)}
                        src="./pic1.jpg" alt="PicUni" /></motion.span>
                <motion.span
                    variants={fadeIn("left", "tween", .4, 1)}
                    className='flexCenter'>Check the Weather with us.</motion.span>
            </motion.div>
            <motion.div
                variants={fadeIn("right", "tween", .2, 1.5)}
                className={` ${css.unisearch}`}>
                <motion.h1
                    variants={fadeIn("up", "tween", .8, 1)}
                    className='flexCenter'>Weather Information</motion.h1>
                <motion.div
                    variants={slideIn("left", "tween", .2, 1)}
                    className='flexCenter'>
                    <motion.input
                        variants={fadeIn("up", "tween", .4, 1)}
                        type="text" placeholder="Enter city name" value={city} onChange={handleCityChange} />
                    <motion.button
                        variants={fadeIn("right", "tween", .5, 1)}
                        onClick={() => setCity(city)}>Get Weather</motion.button>
                </motion.div>
                {loading && <p className='flexCenter'>Loading...</p>}
                {error && <p>{error}</p>}
                {weatherData && (
                    <div>
                        <h2 className='flexCenter'>Weather in {weatherData.data[0].city_name}</h2>
                        <p className='flexCenter'>Temperature: {weatherData.data[0].temp}°C</p>
                        <p className='flexCenter'>Description: {weatherData.data[0].weather.description}</p>
                    </div>
                )}
            </motion.div>
        </>
    );
}
