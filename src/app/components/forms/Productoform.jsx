"use client";
import style from "./Loginform/Logincard.module.css";

export function Productoform() {
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <form className={style.form}>
      <div className={style.card}>
        <div className={style.card_title}>Login</div>
        <div className={style.card_text}>
          {/* Texto */}
          <div className={style.form_group}>
            <input
              type="text"
              id="name"
              className={style.form_field}
              placeholder="Nombre"
              required
            />
            <label htmlFor="name" className={style.form_label}>
              Nombre
            </label>
          </div>
          {/* ........ */}
          {/* Archivos */}
          <div className={style.form_group}>
            <input
              type="file"
              id="file"
              className={style.form_field}
              placeholder="Nombre"
              accept="image/*"
              required
            />
            <label htmlFor="file" className={style.form_label}>
              Imagen
            </label>
          </div>
          {/* ........ */}
          {/* Email */}
          <div className={style.form_group}>
            <input
              type="email"
              id="email"
              className={style.form_field}
              placeholder="Email"
              required
            />
            <label htmlFor="email" className={style.form_label}>
              Email
            </label>
          </div>
          {/* ........ */}
          {/* Password */}
          <div className={style.form_group}>
            <input
              type="password"
              id="password"
              className={style.form_field}
              placeholder="Password"
              required
            />
            <label htmlFor="password" className={style.form_label}>
              Password
            </label>
          </div>
          {/* ........ */}
          {/* TextArea */}
          <div className={style.form_group}>
            <textarea
              id="message"
              className={style.form_field}
              placeholder="Mensaje"
              rows={6}
              required
              defaultValue={""}
            />
            <label htmlFor="message" className={style.form_label}>
              Mensaje
            </label>
          </div>
          {/* ........ */}
        </div>
        <div className={style.card_action}>
          <button type="submit" className={style.btn}>
            login
          </button>
        </div>
      </div>
    </form>
  );
}
