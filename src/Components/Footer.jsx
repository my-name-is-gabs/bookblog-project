const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="mini-about">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            mollitia illo. Quasi praesentium asperiores deleniti eaque
            voluptatibus ex repellat nisi eligendi delectus expedita obcaecati,
            explicabo sequi quia rerum dicta sunt!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto
            dolore ipsa quidem, dolorum modi neque sed ullam laborum iure?
            Eveniet dolorem officiis est quae quis delectus iusto
          </p>
        </div>
        <div className="subscribe-container">
          <h1>Subscribe To Get The Latest Posts</h1>

          <div className="subscribe-control">
            <button className="btn-join">Join</button>
            <input
              type="email"
              className="subscribe-email"
              name="email"
              placeholder="Enter Email..."
            />
          </div>
        </div>
        <div className="media-links">
          <h1>Follow Us</h1>
          <div className="media-link">
            <a href="#facebook">
              <i className="bx bxl-facebook-circle"></i>
            </a>
            <a href="#twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#reddit">
              <i className="bx bxl-reddit"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="copyright-footer">
        <p>Copyright © 2022. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
