function Header({ name, image }) {
  return (
    <header className="header">
      <img src={image} alt="blog logo" className="logo" />
      <h1>{name}</h1>
    </header>
  );
}

export default Header;