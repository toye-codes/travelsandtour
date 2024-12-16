import "../index.css"


const Footer = () => {
  return (
    <section>
      <h3>Travels And Tours</h3>

      <div className="div">
        <div>
          <div>
            <a href="#About">
              <p>About</p>
            </a>
            <a href="#Blog">
              <p>Blog</p>
            </a>
            <a href="#FAQ">
              <p>FAQ</p>
            </a>
            <a href="#T&T">
              <p>T&T</p>
            </a>
          </div>

          <div>
            <a href="#Contact">
              <p>Contact</p>
            </a>
            <a href="#Privacy-policy">
              <p>Privacy Policy</p>
            </a>
            <a href="#Terms-of-service">
              <p>Terms of Service</p>
            </a>
            <a href="#Security">
              <p>Security</p>
            </a>
          </div>
        </div>

        <div>
          <select>
            <option value="English">English</option>
            <option value="English">English</option>
          </select>
          <button>US</button>
        </div>
      </div>
    </section>
  );
}

export default Footer