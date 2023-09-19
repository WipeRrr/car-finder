import React from 'react';
import css from './Filter.module.css';

export const Filter = () => {
  return (
    <form className={css.filter}>
      <div className={css.div}>
        <div className={css.brand}>
          <div className={css.text_wrapper}>Car brand</div>
          <div className={css.select}>
            <div className={css.text_wrapper_2}>Enter the text</div>
            <img
              className={css.chevron_down}
              alt="Chevron down"
              src="https://c.animaapp.com/cGLrQHkt/img/chevron-down-1.svg"
            />
          </div>
        </div>
        <div className={css.mileage}>
          <div className={css.text_wrapper}>Price/ 1 hour</div>
          <div className={css.select_2}>
            <div className={css.text_wrapper_2}>To</div>
            <img
              className={css.img}
              alt="Chevron down"
              src="https://c.animaapp.com/cGLrQHkt/img/chevron-down-1.svg"
            />
            <div className={css.text_wrapper_3}>$</div>
          </div>
        </div>
        <div className={css.price}>
          <div className={css.text_wrapper}>Сar mileage / km</div>
          <div className={css.div_2}>
            <div className={css.from}>
              <div className={css.text_wrapper_4}>From</div>
            </div>
            <div className={css.to}>
              <div className={css.text_wrapper_4}>To</div>
            </div>
          </div>
        </div>
      </div>
      <button className={css.main_button} type="button">
        <div className={css.text}>Search</div>
      </button>
    </form>
  );
};
