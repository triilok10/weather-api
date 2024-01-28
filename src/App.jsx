import React from 'react';
import Header from './Components/Header/Header';
import css from './styles/app.module.scss';
import Graduates from './Components/Graduates/Graduates';
export default function App() {
  return (
    <div className={`${css.container}`}>
      <Header />
      <Graduates />
    </div>
  )
}

