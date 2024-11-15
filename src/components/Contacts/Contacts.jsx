import { Link } from "react-router-dom";

export default function Contacts() {
  return (
    <div className="flex items-center gap-5">
      <ul className="flex gap-3">
        <li>
          <Link to="/socials">
            <img src="./socials-icons/telegram-icon.png" alt="telegram icon" />
          </Link>
        </li>
        <li>
          <Link to="/socials">
            <img src="./socials-icons/whatsapp-icon.png" alt="whatsapp icon" />
          </Link>
        </li>
        <li>
          <Link to="/socials">
            <img src="./socials-icons/viber-icon.png" alt="viber icon" />
          </Link>
        </li>
      </ul>

      <div className="flex flex-col">
        <span className="text-black text-xl font-medium">8(495) 788-23-90</span>
        <a
          className="text-link text-xs font-medium tracking-widest"
          href="tel:+74957882390"
        >
          ПЕРЕЗВОНИТЬ МНЕ
        </a>
      </div>
    </div>
  );
}
