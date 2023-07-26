const HomePoster = () => {
  return (
    <div>
      {" "}
      {/* <!-- poster section start --> */}
      <section className="poster-section pa-y4">
        <div className="container">
          <div className="poster-box-wrap">
            <div className="poster-title">
              <h2>Our Unique Differentiator</h2>
              <h6>
                We have some Amazing Growth Marketing tools to help you scale
                your Business.
              </h6>
            </div>
            <div className="poster-images">
              <div className="thumbnail">
                <img
                  src="./assets/images/keyboard.webp"
                  alt="Keyboard"
                  className="img-fluid"
                />
              </div>
              <div className="thumbnail-2">
                <img
                  src="./assets/images/iphones.webp"
                  alt="Iphones"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- poster section end --> */}
    </div>
  );
};

export default HomePoster;
