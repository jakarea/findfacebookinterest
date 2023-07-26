/* eslint-disable @next/next/no-img-element */
const AttentionMarketeers = () => {
  return (
    <>
      {/* <!-- attention marketers start --> */}
      <section className="attention-marketers pa-y4">
        <div className="container">
          <div className="common-heading">
            <h2>Attention marketers!</h2>
          </div>
          <div className="d-grid">
            {/* <!-- attention image --> */}
            <div className="attention-img">
              <img
                src="./assets/images/attention.webp"
                alt="Attention"
                className="img-fluid"
              />
            </div>
            {/* <!-- attention image --> */}

            {/* <!-- attention text --> */}
            <div className="attention-txt">
              <h5>Explore Comprehensive Services at giopio.com</h5>

              <p>
                Looking for a one-stop solution for all your digital needs? Look
                no further! At giopio.com, we offer a comprehensive range of
                services designed to help you dominate the digital landscape.
              </p>
              <p>
                With our cutting-edge marketing scripts for Facebook, ad spy
                tools, real-time lead collection, and seamless management of
                multiple and scheduled posts on Facebook and Instagram, we
                provide everything you need to drive exceptional results. But
                {`that's`} not all!
              </p>
              <p>
                {` Our expertise extends to UI/UX design, where we transform your
                vision into stunning digital experiences. Need assistance with
                Figma to HTML conversions? We've got you covered. Whether you're
                seeking WordPress development, Laravel expertise, or ReactJS
                applications, our team of experts is here to deliver outstanding
                results.`}
              </p>
              <p>
                {` Don't miss out on this opportunity to take your business to the
                next level. Visit giopio.com now and explore the possibilities!`}
              </p>

              <a href="#" className="common-bttn">
                Get Started
              </a>
            </div>
            {/* <!-- attention text --> */}
          </div>
        </div>
      </section>
      {/* <!-- attention marketers end --> */}
    </>
  );
};

export default AttentionMarketeers;
