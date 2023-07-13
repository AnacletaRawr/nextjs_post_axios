import Link from "next/link";
import style from "./Navigation.module.css";
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "../botones.componente";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/About",
  },
  {
    label: "Ejemplo de useState",
    route: "/Exampleuno",
  },
  {
    label: "Login",
    route: "/Login",
  },
];

export function Navigation() {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.navigation}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
        <div>
          <LoginButton />
          <RegisterButton />
          <LogoutButton />
          <ProfileButton />
        </div>
      </nav>
    </header>
  );
}
