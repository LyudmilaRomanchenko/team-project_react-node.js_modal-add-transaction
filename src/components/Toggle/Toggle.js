import { useState } from "react";

import s from "./Toggle.module.css";

export default function Toggle() {
  const [value, setValue] = useState(false);
  console.log(value);
  const handleChange = () => {
    setValue(!value);
  };

  return (
    // <div className={s.containerR}>
    <div className={s.container}>
      {/* <svg class="theme-switch__icon" role="img" aria-label="Иконка солнца">
        <use href="./images/sprite.svg#sun"></use>
      </svg> */}
      <span className={s.profit}>Доход</span>

      <div className={s.switchControl}>
        <input
          checked={value}
          // value={value}
          onChange={handleChange}
          className={s.switchToggle}
          type="checkbox"
          name="value"
          id="theme-switch-toggle"
          aria-label="Переключить между тёмной и светлой темой"
        />
        <label
          aria-hidden="true"
          className={s.switchTrack}
          for="theme-switch-toggle"
        ></label>
        <div aria-hidden="true" className={s.switchMarker}></div>
      </div>
      <span className={s.expenditure}>Расход</span>

      {/* <svg class="theme-switch__icon" aria-label="Иконка луны">
        <use href="./images/sprite.svg#moon"></use>
      </svg> */}
    </div>
    // </div>
  );
}
