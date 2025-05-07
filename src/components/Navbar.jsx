import './Navbar.css';

function Navbar({ onPageChange, activePage }) {
  const navItems = ['Home', 'About', 'Education', 'Projects', 'Skills', 'Contact'];

  const handleNavClick = (item) => {
    onPageChange(item);
  };

  return (
    <nav className={activePage !== 'Home' ? 'navbar-fixed' : ''}>
      {activePage !== 'Home' && <div className="navbar-name">Aziz Ekren</div>}
      <ul>
        {navItems.map((item) => (
          <li 
            key={item} 
            className={activePage === item ? 'active' : ''}
            onClick={() => handleNavClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar; 