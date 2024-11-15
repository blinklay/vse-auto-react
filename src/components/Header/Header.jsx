import Contacts from "../Contacts/Contacts";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className="pt-10 pb-10 flex justify-between">
      <Navigation />

      <Contacts />
    </header>
  );
}
