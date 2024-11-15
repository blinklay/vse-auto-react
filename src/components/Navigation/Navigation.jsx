import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex gap-10 items-center">
      <div>
        <img src="./logo.png" alt="logo" />
      </div>

      <ul className="flex items-center gap-5">
        <li className="text-sm font-medium">
          <NavLink to="/advantages">Преимущества</NavLink>
        </li>
        <li className="text-sm font-medium">
          <NavLink to="/guarantees">Гарантии</NavLink>
        </li>
        <li className="text-sm font-medium">
          <NavLink to="/redemption">Этапы выкупа</NavLink>
        </li>
        <li className="text-sm font-medium">
          <NavLink to="/reviews">Отзывы</NavLink>
        </li>
      </ul>
    </nav>
  );
}
