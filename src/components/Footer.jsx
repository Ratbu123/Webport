export default function Footer() {
  return (
    <footer className="footer fade-up-stagger" id="contact">
      <div className="container footer-grid">
        <div className="fade-item">
          <h4>Contact</h4>
          <p>+63 963 679 6878</p>
          <p>guceDiter03@gmail.com</p>
        </div>

        <div className="fade-item">
          <h4>Send me an email</h4>
          <input type="email" placeholder="Your email" />
        </div>

        <div className="fade-item">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}