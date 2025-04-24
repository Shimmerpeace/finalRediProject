const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} RunTown Store. All rights reserved.</p>
          <p>Follow us on:</p>
          <ul className="social-links">
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#twitter">Twitter</a></li>
          </ul>
        </div>
      </footer>
    );
  };

  export default Footer