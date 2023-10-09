import "./Header.scss";

interface HeaderProps {
  title: string;
  txt: string;
}

function Header({ title, txt }: HeaderProps) {
  return (
    <>
      <p className="header-title">{title}</p>
      <p className="header-txt">{txt}</p>
    </>
  );
}

export default Header;
