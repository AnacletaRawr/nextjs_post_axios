"use client";
import { useState, useRef, useLayoutEffect } from "react";
import style from "./Select.module.css";

export default function Select({ options, required, onChange }) {
  const [selected, setSelected] = useState(undefined);

  const detailRef = useRef(null);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  const handleClick = () => {
    detailRef.current.removeAttribute("open");
  };

  useLayoutEffect(() => {
    selected && onChange(selected);
  }, [selected]);

  return (
    <>
      <details
        ref={detailRef}
        className={`${style.custom_select} ${
          required
            ? selected === undefined
              ? style.no_selected
              : style.selected
            : ""
        }`}
      >
        {options.length && (
          <summary className={style.summary}>
            <input
              type="radio"
              name="item"
              id="default"
              title="Selecciona"
              value={undefined}
              checked={selected === undefined}
              onChange={handleChange}
            />

            {options.map(({ label, value }, index) => (
              <input
                key={index}
                type="radio"
                name={`item-${index}`}
                id={`radio-${index}`}
                title={label}
                value={value}
                checked={selected === value}
                onChange={handleChange}
              />
            ))}
          </summary>
        )}
        <ul className={style.list}>
          {options.map(({ label }, index) => (
            <li key={`li-${index}`}>
              <label onClick={handleClick} htmlFor={`radio-${index}`}>
                {label}
                <span />
              </label>
            </li>
          ))}
        </ul>
      </details>
    </>
  );
}
