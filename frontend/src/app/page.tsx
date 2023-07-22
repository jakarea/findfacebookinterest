/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <main className="">
      {/* <!-- navbar start --> */}
      <nav className="navbar-section">
        <div className="header-container">
          <div className="d-flex">
            {/* <!-- header logo --> */}
            <div className="header-brand">
              <a href="index.html">
                <img
                  src="./assets/images/logo.svg"
                  alt="Logo"
                  className="img-fluid"
                />
              </a>
            </div>
            {/* <!-- header logo --> */}
            {/* <!-- header menu  --> */}
            <div className="header-menu">
              <ul>
                <li>
                  <a href="project.html">My Project</a>
                </li>
                <li>
                  <a href="#" /*onclick="showLoginFilter()" */>Log in</a>
                </li>
                <li>
                  <a
                    href="#"
                    className="signup-bttn" /*onclick="showRegisFilter()" */
                  >
                    {" "}
                    Sign up
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- header menu  --> */}
          </div>
        </div>
      </nav>
      {/* <!-- navbar end --> */}

      {/* <!-- hero section start --> */}
      <section className="hero-section pa-y4">
        <div className="container">
          {/* <!-- hero txt --> */}
          <div className="hero-txt-box">
            <h1>
              Reach Relevance, Reduce Costs with <br /> Facebook™ Interests
            </h1>
            <div className="hero-flag">
              <span>100% Free</span>
              <span>No Credit Required</span>
            </div>
          </div>
          {/* <!-- hero txt --> */}

          {/* <!-- find interest search box --> */}
          <div className="find-interest-search-box">
            <form>
              <div className="d-flex">
                <div className="form-group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g opacity="0.6">
                      <path
                        d="M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033Z"
                        stroke="#7B8591"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <input type="text" placeholder="Enter Keywords" />
                </div>
                <div className="form-bttns">
                  <select>
                    <option value="en">English (US)</option>
                    <option value="bn">Bangla (BN)</option>
                  </select>
                  <button type="submit" className="btn common-bttn">
                    Explore
                  </button>
                </div>
              </div>
            </form>

            {/* <!-- recent keyword start --> */}
            <div className="recent-keywird-box">
              <a href="#">Real Estate</a>
              <a href="#">Marketing</a>
              <a href="#">Generative AI</a>
              <a href="#">Toys</a>
            </div>
            {/* <!-- recent keyword end --> */}
          </div>
          {/* <!-- find interest search box --> */}

          {/* <!-- feature flag start --> */}
          <div className="feature-flag-wrap">
            {/* <!-- item --> */}
            <div className="feature-box">
              <div className="media">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M11.6668 23.3327C9.9322 24.312 8.52957 25.787 7.63874 27.5686C6.74791 29.3503 6.40948 31.3574 6.66682 33.3327C8.64208 33.59 10.6492 33.2516 12.4309 32.3608C14.2125 31.4699 15.6875 30.0673 16.6668 28.3327M6.66683 21.666C9.63865 22.0192 12.4052 23.3619 14.5214 25.4781C16.6376 27.5943 17.9803 30.3609 18.3335 33.3327C19.8067 32.4834 21.039 31.2724 21.9139 29.8142C22.7888 28.3561 23.2774 26.6989 23.3335 24.9993C26.132 24.0149 28.5758 22.2227 30.3557 19.8494C32.1357 17.4761 33.172 14.6282 33.3335 11.666C33.3335 10.3399 32.8067 9.06816 31.869 8.13048C30.9313 7.1928 29.6596 6.66602 28.3335 6.66602C25.3713 6.82753 22.5234 7.86379 20.1501 9.64377C17.7768 11.4237 15.9846 13.8675 15.0002 16.666C13.3006 16.7221 11.6434 17.2107 10.1853 18.0856C8.72711 18.9605 7.51615 20.1928 6.66683 21.666ZM23.3335 14.9993C23.3335 15.4414 23.5091 15.8653 23.8217 16.1779C24.1342 16.4904 24.5581 16.666 25.0002 16.666C25.4422 16.666 25.8661 16.4904 26.1787 16.1779C26.4912 15.8653 26.6668 15.4414 26.6668 14.9993C26.6668 14.5573 26.4912 14.1334 26.1787 13.8208C25.8661 13.5083 25.4422 13.3327 25.0002 13.3327C24.5581 13.3327 24.1342 13.5083 23.8217 13.8208C23.5091 14.1334 23.3335 14.5573 23.3335 14.9993Z"
                    stroke="#6F7984"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="media-body">
                  <h6>Instantly Outperform Your Competitors.</h6>
                </div>
              </div>
            </div>
            {/* <!-- item --> */}
            {/* <!-- item --> */}
            <div className="feature-box feat-color-2">
              <div className="media">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M5 11.666L15 21.666L21.6667 14.9993L35 28.3327M35 28.3327V16.666M35 28.3327H23.3333"
                    stroke="#6F7984"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="media-body">
                  <h6>Lower Facebook Ad Spend.</h6>
                </div>
              </div>
            </div>
            {/* <!-- item --> */}
            {/* <!-- item --> */}
            <div className="feature-box feat-color-3">
              <div className="media">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M27.5666 11.6667C26.225 7.725 23.34 5 20 5C15.3766 5 11.6283 9.38667 11.6283 15.8267C11.6283 19.0867 14.265 23.705 15.815 25.8267M7.85165 19.965C5.09165 23.0933 4.16165 26.94 5.83332 29.8167C8.14498 33.8 14.3966 34.535 20.0016 31.3167C22.84 29.685 24.7933 25.7133 25.8616 23.32M25.0233 33.3167C29.2083 33.3167 32.5616 32.5867 34.1683 29.8167C36.48 25.8333 33.81 19.995 28.2033 16.7767C25.3666 15.145 20.9416 14.7183 18.325 14.9933M17.4883 16.4367C18.2883 16.8967 19.3133 16.6233 19.7749 15.8267C19.9953 15.4438 20.0546 14.9892 19.9399 14.5626C19.8252 14.136 19.5459 13.7724 19.1633 13.5517C18.7787 13.3301 18.322 13.2699 17.8932 13.3842C17.4643 13.4985 17.0982 13.7781 16.8749 14.1617C16.6547 14.5447 16.5957 14.9995 16.7107 15.4261C16.8257 15.8527 17.1054 16.2162 17.4883 16.4367ZM14.1666 25.8333C14.1666 26.2754 14.3422 26.6993 14.6548 27.0118C14.9674 27.3244 15.3913 27.5 15.8333 27.5C16.2753 27.5 16.6993 27.3244 17.0118 27.0118C17.3244 26.6993 17.5 26.2754 17.5 25.8333C17.5 25.3913 17.3244 24.9674 17.0118 24.6548C16.6993 24.3423 16.2753 24.1667 15.8333 24.1667C15.3913 24.1667 14.9674 24.3423 14.6548 24.6548C14.3422 24.9674 14.1666 25.3913 14.1666 25.8333ZM24.1666 23.3333C24.1666 23.7754 24.3422 24.1993 24.6548 24.5118C24.9674 24.8244 25.3913 25 25.8333 25C26.2753 25 26.6993 24.8244 27.0118 24.5118C27.3244 24.1993 27.5 23.7754 27.5 23.3333C27.5 22.8913 27.3244 22.4674 27.0118 22.1548C26.6993 21.8423 26.2753 21.6667 25.8333 21.6667C25.3913 21.6667 24.9674 21.8423 24.6548 22.1548C24.3422 22.4674 24.1666 22.8913 24.1666 23.3333Z"
                    stroke="#6F7984"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="media-body">
                  <h6>Discover Hidden Facebook Audiences.</h6>
                </div>
              </div>
            </div>
            {/* <!-- item --> */}
          </div>
          {/* <!-- feature flag end --> */}
        </div>
      </section>
      {/* <!-- hero section end --> */}

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

      {/* <!-- discover section start --> */}
      <section className="discover-section pa-y4">
        <div className="container">
          <div className="common-heading">
            <h2>
              Discover an Abundance of Interests on Facebook™ <br /> Beyond the
              25 Shown!
            </h2>
          </div>

          {/* <!-- discover post one --> */}
          <div className="discover-post-wrap">
            <div className="d-grid">
              {/* <!-- text --> */}
              <div className="discover-txt">
                <h5>The Traditional Method</h5>
                <h3>
                  Unveiling{`Facebook™'s`} Limited Interest Discoverability.
                </h3>
                <p>
                  All advertisers on Facebook, using Facebook™ Ads Manager, are
                  presented with identical 25 interest {`suggestions."`}
                </p>

                <ul>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.28033 7.21967C7.98744 6.92678 7.51256 6.92678 7.21967 7.21967C6.92678 7.51256 6.92678 7.98744 7.21967 8.28033L8.93934 10L7.21967 11.7197C6.92678 12.0126 6.92678 12.4874 7.21967 12.7803C7.51256 13.0732 7.98744 13.0732 8.28033 12.7803L10 11.0607L11.7197 12.7803C12.0126 13.0732 12.4874 13.0732 12.7803 12.7803C13.0732 12.4874 13.0732 12.0126 12.7803 11.7197L11.0607 10L12.7803 8.28033C13.0732 7.98744 13.0732 7.51256 12.7803 7.21967C12.4874 6.92678 12.0126 6.92678 11.7197 7.21967L10 8.93934L8.28033 7.21967Z"
                        fill="#F51D1D"
                      />
                    </svg>
                    <span>Competing for the Same Audience</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.28033 7.21967C7.98744 6.92678 7.51256 6.92678 7.21967 7.21967C6.92678 7.51256 6.92678 7.98744 7.21967 8.28033L8.93934 10L7.21967 11.7197C6.92678 12.0126 6.92678 12.4874 7.21967 12.7803C7.51256 13.0732 7.98744 13.0732 8.28033 12.7803L10 11.0607L11.7197 12.7803C12.0126 13.0732 12.4874 13.0732 12.7803 12.7803C13.0732 12.4874 13.0732 12.0126 12.7803 11.7197L11.0607 10L12.7803 8.28033C13.0732 7.98744 13.0732 7.51256 12.7803 7.21967C12.4874 6.92678 12.0126 6.92678 11.7197 7.21967L10 8.93934L8.28033 7.21967Z"
                        fill="#F51D1D"
                      />
                    </svg>
                    <span>Costly and Irrelevant Engagement</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.28033 7.21967C7.98744 6.92678 7.51256 6.92678 7.21967 7.21967C6.92678 7.51256 6.92678 7.98744 7.21967 8.28033L8.93934 10L7.21967 11.7197C6.92678 12.0126 6.92678 12.4874 7.21967 12.7803C7.51256 13.0732 7.98744 13.0732 8.28033 12.7803L10 11.0607L11.7197 12.7803C12.0126 13.0732 12.4874 13.0732 12.7803 12.7803C13.0732 12.4874 13.0732 12.0126 12.7803 11.7197L11.0607 10L12.7803 8.28033C13.0732 7.98744 13.0732 7.51256 12.7803 7.21967C12.4874 6.92678 12.0126 6.92678 11.7197 7.21967L10 8.93934L8.28033 7.21967Z"
                        fill="#F51D1D"
                      />
                    </svg>
                    <span>Massive, Indiscriminate Audience</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.28033 7.21967C7.98744 6.92678 7.51256 6.92678 7.21967 7.21967C6.92678 7.51256 6.92678 7.98744 7.21967 8.28033L8.93934 10L7.21967 11.7197C6.92678 12.0126 6.92678 12.4874 7.21967 12.7803C7.51256 13.0732 7.98744 13.0732 8.28033 12.7803L10 11.0607L11.7197 12.7803C12.0126 13.0732 12.4874 13.0732 12.7803 12.7803C13.0732 12.4874 13.0732 12.0126 12.7803 11.7197L11.0607 10L12.7803 8.28033C13.0732 7.98744 13.0732 7.51256 12.7803 7.21967C12.4874 6.92678 12.0126 6.92678 11.7197 7.21967L10 8.93934L8.28033 7.21967Z"
                        fill="#F51D1D"
                      />
                    </svg>
                    <span>Consumes Excessive Time</span>
                  </li>
                </ul>
              </div>
              {/* <!-- text --> */}

              {/* <!-- image --> */}
              <div className="discover-image">
                <img
                  src="./assets/images/discover.png"
                  alt="Discover"
                  className="img-fluid"
                />
              </div>
              {/* <!-- image --> */}
            </div>
          </div>
          {/* <!-- discover post one --> */}

          {/* <!-- discover post two --> */}
          <div className="discover-post-wrap mt-5 discover-2">
            <div className="d-grid d-grid-2">
              {/* <!-- image --> */}
              <div className="discover-image text-start">
                <img
                  src="./assets/images/discover.png"
                  alt="Discover"
                  className="img-fluid"
                />
              </div>
              {/* <!-- image --> */}
              {/* <!-- text --> */}
              <div className="discover-txt">
                <h5>Our Method</h5>
                <h3>
                  Explore a Vast Array of Available Interests with find fb
                  Interest.
                </h3>
                <p>
                  Unlock {` Facebook's`} vast range of interests with
                  interestAds. Empower your {`campaign's`} success effortlessly
                  using the right tools.
                </p>

                <ul>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10ZM13.0086 8.48827C13.2092 8.20739 13.1442 7.81705 12.8633 7.61642C12.5824 7.41579 12.192 7.48084 11.9914 7.76173L9.29525 11.5364L7.94194 10.1831C7.69786 9.93898 7.30214 9.93898 7.05806 10.1831C6.81398 10.4271 6.81398 10.8229 7.05806 11.0669L8.93306 12.9419C9.06297 13.0719 9.24346 13.138 9.42655 13.1229C9.60964 13.1077 9.7768 13.0128 9.88358 12.8633L13.0086 8.48827Z"
                        fill="#36CC18"
                      />
                    </svg>
                    <span>Discover a Fresh Audience</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10ZM13.0086 8.48827C13.2092 8.20739 13.1442 7.81705 12.8633 7.61642C12.5824 7.41579 12.192 7.48084 11.9914 7.76173L9.29525 11.5364L7.94194 10.1831C7.69786 9.93898 7.30214 9.93898 7.05806 10.1831C6.81398 10.4271 6.81398 10.8229 7.05806 11.0669L8.93306 12.9419C9.06297 13.0719 9.24346 13.138 9.42655 13.1229C9.60964 13.1077 9.7768 13.0128 9.88358 12.8633L13.0086 8.48827Z"
                        fill="#36CC18"
                      />
                    </svg>
                    <span>Maximize ROI of Campaigns</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10ZM13.0086 8.48827C13.2092 8.20739 13.1442 7.81705 12.8633 7.61642C12.5824 7.41579 12.192 7.48084 11.9914 7.76173L9.29525 11.5364L7.94194 10.1831C7.69786 9.93898 7.30214 9.93898 7.05806 10.1831C6.81398 10.4271 6.81398 10.8229 7.05806 11.0669L8.93306 12.9419C9.06297 13.0719 9.24346 13.138 9.42655 13.1229C9.60964 13.1077 9.7768 13.0128 9.88358 12.8633L13.0086 8.48827Z"
                        fill="#36CC18"
                      />
                    </svg>
                    <span>Ample Time for Ad Creation</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10ZM13.0086 8.48827C13.2092 8.20739 13.1442 7.81705 12.8633 7.61642C12.5824 7.41579 12.192 7.48084 11.9914 7.76173L9.29525 11.5364L7.94194 10.1831C7.69786 9.93898 7.30214 9.93898 7.05806 10.1831C6.81398 10.4271 6.81398 10.8229 7.05806 11.0669L8.93306 12.9419C9.06297 13.0719 9.24346 13.138 9.42655 13.1229C9.60964 13.1077 9.7768 13.0128 9.88358 12.8633L13.0086 8.48827Z"
                        fill="#36CC18"
                      />
                    </svg>
                    <span>Elevated Conversion Rates</span>
                  </li>
                </ul>
              </div>
              {/* <!-- text --> */}
            </div>
          </div>
          {/* <!-- discover post two --> */}
        </div>
      </section>
      {/* <!-- discover section end --> */}

      {/* <!-- explorer section start --> */}
      <section className="explorer-section pa-y4">
        <div className="container">
          <div className="common-heading">
            <h2>Explore Others have done with us</h2>
            <p>
              We have some Amazing Growth Marketing tools to help you scale your
              Business. Unlike most similar <br /> tools on the market, we
              provide you with 100% Accurate Results at a much more Affordable
              Rate.
            </p>
          </div>

          {/* <!-- explorer boxs start --> */}
          <div className="explorer-box-wrapper">
            {/* <!-- item --> */}
            <div className="explorer-box">
              <div className="thumbnail">
                <img
                  src="./assets/images/Blog1.webp"
                  alt="Blog"
                  className="img-fluid"
                />
              </div>
              <div className="txt">
                <h5>
                  Unlocking Relevance and Cost Efficiency with Facebook™
                  Interests
                </h5>
                <p>
                  Are you looking to optimize your Facebook™ ad campaigns?
                  Discover how targeting thousands of Facebook™.
                </p>
              </div>
            </div>
            {/* <!-- item --> */}
            {/* <!-- item --> */}
            <div className="explorer-box">
              <div className="thumbnail">
                <img
                  src="./assets/images/Blog2.webp"
                  alt="Blog"
                  className="img-fluid"
                />
              </div>
              <div className="txt">
                <h5>
                  Unlocking Relevance and Cost Efficiency with Facebook™
                  Interests
                </h5>
                <p>
                  Are you looking to optimize your Facebook™ ad campaigns?
                  Discover how targeting thousands of Facebook™.
                </p>
              </div>
            </div>
            {/* <!-- item --> */}
            {/* <!-- item --> */}
            <div className="explorer-box">
              <div className="thumbnail">
                <img
                  src="./assets/images/Blog3.webp"
                  alt="Blog"
                  className="img-fluid"
                />
              </div>
              <div className="txt">
                <h5>
                  Unlocking Relevance and Cost Efficiency with Facebook™
                  Interests
                </h5>
                <p>
                  Are you looking to optimize your Facebook™ ad campaigns?
                  Discover how targeting thousands of Facebook™.
                </p>
              </div>
            </div>
            {/* <!-- item --> */}
            {/* <!-- item --> */}
            <div className="explorer-box">
              <div className="thumbnail">
                <img
                  src="./assets/images/Blog4.webp"
                  alt="Blog"
                  className="img-fluid"
                />
              </div>
              <div className="txt">
                <h5>
                  Unlocking Relevance and Cost Efficiency with Facebook™
                  Interests
                </h5>
                <p>
                  Are you looking to optimize your Facebook™ ad campaigns?
                  Discover how targeting thousands of Facebook™.
                </p>
              </div>
            </div>
            {/* <!-- item --> */}
            {/* <!-- item --> */}
            <div className="explorer-box">
              <div className="thumbnail">
                <img
                  src="./assets/images/Blog5.webp"
                  alt="Blog"
                  className="img-fluid"
                />
              </div>
              <div className="txt">
                <h5>
                  Unlocking Relevance and Cost Efficiency with Facebook™
                  Interests
                </h5>
                <p>
                  Are you looking to optimize your Facebook™ ad campaigns?
                  Discover how targeting thousands of Facebook™.
                </p>
              </div>
            </div>
            {/* <!-- item --> */}
            {/* <!-- item --> */}
            <div className="explorer-box">
              <div className="thumbnail">
                <img
                  src="./assets/images/Blog6.webp"
                  alt="Blog"
                  className="img-fluid"
                />
              </div>
              <div className="txt">
                <h5>
                  Unlocking Relevance and Cost Efficiency with Facebook™
                  Interests
                </h5>
                <p>
                  Are you looking to optimize your Facebook™ ad campaigns?
                  Discover how targeting thousands of Facebook™.
                </p>
              </div>
            </div>
            {/* <!-- item --> */}
          </div>
          {/* <!-- explorer boxs end --> */}
        </div>
      </section>
      {/* <!-- explorer section end --> */}

      {/* <!-- faq section start --> */}
      <section className="faq-section pa-y4">
        <div className="container">
          <div className="common-heading">
            <h2>Frequently Asked Question</h2>
          </div>

          {/* <!-- faq asked start --> */}
          <div className="faq-box-wrap">
            {/* <!-- item --> */}
            <div className="faq-box-item show">
              <button type="button" className="btn faq-item">
                <span>How do your tools works?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4.5 15.75L12 8.25L19.5 15.75"
                    stroke="#CFAF9C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div className="faq-answer">
                <p>
                  We have some Amazing Growth Marketing tools to help you scale
                  your Business. Unlike most similar tools on the market, we
                  provide you with 100% Accurate Results at a much more
                  Affordable Rate.
                </p>
              </div>
            </div>
            {/* <!-- item --> */}
            {/* <!-- item --> */}
            <div className="faq-box-item">
              <button type="button" className="btn faq-item">
                <span>How do your tools works?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4.5 15.75L12 8.25L19.5 15.75"
                    stroke="#CFAF9C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div className="faq-answer">
                <p>
                  We have some Amazing Growth Marketing tools to help you scale
                  your Business. Unlike most similar tools on the market, we
                  provide you with 100% Accurate Results at a much more
                  Affordable Rate.
                </p>
              </div>
            </div>
            {/* <!-- item --> */}
            {/* <!-- item --> */}
            <div className="faq-box-item">
              <button type="button" className="btn faq-item">
                <span>How do your tools works?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4.5 15.75L12 8.25L19.5 15.75"
                    stroke="#CFAF9C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div className="faq-answer">
                <p>
                  We have some Amazing Growth Marketing tools to help you scale
                  your Business. Unlike most similar tools on the market, we
                  provide you with 100% Accurate Results at a much more
                  Affordable Rate.
                </p>
              </div>
            </div>
            {/* <!-- item --> */}
            {/* <!-- item --> */}
            <div className="faq-box-item">
              <button type="button" className="btn faq-item">
                <span>How do your tools works?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4.5 15.75L12 8.25L19.5 15.75"
                    stroke="#CFAF9C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div className="faq-answer">
                <p>
                  We have some Amazing Growth Marketing tools to help you scale
                  your Business. Unlike most similar tools on the market, we
                  provide you with 100% Accurate Results at a much more
                  Affordable Rate.
                </p>
              </div>
            </div>
            {/* <!-- item --> */}
            {/* <!-- item --> */}
            <div className="faq-box-item">
              <button type="button" className="btn faq-item">
                <span>How do your tools works?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4.5 15.75L12 8.25L19.5 15.75"
                    stroke="#CFAF9C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div className="faq-answer">
                <p>
                  We have some Amazing Growth Marketing tools to help you scale
                  your Business. Unlike most similar tools on the market, we
                  provide you with 100% Accurate Results at a much more
                  Affordable Rate.
                </p>
              </div>
            </div>
            {/* <!-- item --> */}
            {/* <!-- item --> */}
            <div className="faq-box-item">
              <button type="button" className="btn faq-item">
                <span>How do your tools works?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4.5 15.75L12 8.25L19.5 15.75"
                    stroke="#CFAF9C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div className="faq-answer">
                <p>
                  We have some Amazing Growth Marketing tools to help you scale
                  your Business. Unlike most similar tools on the market, we
                  provide you with 100% Accurate Results at a much more
                  Affordable Rate.
                </p>
              </div>
            </div>
            {/* <!-- item --> */}
          </div>
          {/* <!-- faq asked end --> */}
        </div>
      </section>
      {/* <!-- faq section end --> */}

      {/* <!-- get start --> */}
      <section className="get-start-sec pa-y4">
        <div className="container">
          <div className="get-txt-box">
            <h3>
              Supercharge Your Marketing Efforts Today and Drive <br />{" "}
              Exceptional Results!
            </h3>

            <a href="#" className="common-bttn">
              Sign up for free
            </a>
          </div>
        </div>
      </section>
      {/* <!-- get start --> */}

      {/* <!-- footer section start --> */}
      <footer className="footer-section">
        <div className="container">
          <div className="d-grid">
            {/* <!-- footer logo part --> */}
            <div className="footer-logo-part">
              <div className="ftr-logo">
                <a href="#">
                  <img
                    src="./assets/images/ftr-logo.svg"
                    alt="Logo"
                    className="img-fluid"
                  />
                </a>
              </div>
              <h6>Follow us</h6>
              <ul>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.5 7.5V7.51M4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H16C17.0609 4 18.0783 4.42143 18.8284 5.17157C19.5786 5.92172 20 6.93913 20 8V16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20H8C6.93913 20 5.92172 19.5786 5.17157 18.8284C4.42143 18.0783 4 17.0609 4 16V8ZM9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z"
                        stroke="#887C76"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 10V14H10V21H14V14H17L18 10H14V8C14 7.73478 14.1054 7.48043 14.2929 7.29289C14.4804 7.10536 14.7348 7 15 7H18V3H15C13.6739 3 12.4021 3.52678 11.4645 4.46447C10.5268 5.40215 10 6.67392 10 8V10H7Z"
                        stroke="#887C76"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M22 4.00904C21 4.49904 20.02 4.69804 19 4.99904C17.879 3.73404 16.217 3.66404 14.62 4.26204C13.023 4.86004 11.977 6.32204 12 7.99904V8.99904C8.755 9.08204 5.865 7.60404 4 4.99904C4 4.99904 -0.182 12.432 8 15.999C6.128 17.246 4.261 18.087 2 17.999C5.308 19.802 8.913 20.422 12.034 19.516C15.614 18.476 18.556 15.793 19.685 11.774C20.0218 10.5517 20.189 9.2889 20.182 8.02104C20.182 7.77204 21.692 5.24904 22 4.00804V4.00904Z"
                        stroke="#887C76"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3 9C3 7.93913 3.42143 6.92172 4.17157 6.17157C4.92172 5.42143 5.93913 5 7 5H17C18.0609 5 19.0783 5.42143 19.8284 6.17157C20.5786 6.92172 21 7.93913 21 9V15C21 16.0609 20.5786 17.0783 19.8284 17.8284C19.0783 18.5786 18.0609 19 17 19H7C5.93913 19 4.92172 18.5786 4.17157 17.8284C3.42143 17.0783 3 16.0609 3 15V9Z"
                        stroke="#887C76"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 9L15 12L10 15V9Z"
                        stroke="#887C76"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- footer logo part --> */}

            {/* <!-- footer menu part --> */}
            <div className="footer-menu-part">
              {/* <!-- links --> */}
              <div className="ftr-menu-links">
                <h6>Company</h6>
                <ul>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">F.A.Q</a>
                  </li>
                </ul>
              </div>
              {/* <!-- links --> */}
              {/* <!-- links --> */}
              <div className="ftr-menu-links">
                <h6>Product</h6>
                <ul>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                </ul>
              </div>
              {/* <!-- links --> */}
              {/* <!-- links --> */}
              <div className="ftr-menu-links">
                <h6>Product</h6>
                <ul>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                </ul>
              </div>
              {/* <!-- links --> */}
            </div>
            {/* <!-- footer menu part --> */}
          </div>
          <div className="ftr-copy">
            <p>Copyright &copy; 2023 giopio.com All rights reserved.</p>
            <ul>
              <li>
                <a href="#">Terms Of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* <!-- footer section end --> */}

      {/* <!-- register modal start --> */}
      <div className="register-page-wrap" id="register-box">
        <div className="register-form">
          <div className="form-header">
            <h5>Register</h5>
            <a href="#" /*onclick="hideRegisFilter()" */>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z"
                  fill="#050400"
                />
              </svg>
            </a>
          </div>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter Your Email" />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="text" placeholder="Enter Your Phone Number" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="********" />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="********" />
            </div>
            <div className="form-submit">
              <button type="submit" className="btn btn-submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- register modal end --> */}

      {/* <!-- login modal start --> */}
      <div className="register-page-wrap" id="login-box">
        <div className="register-form">
          <div className="form-header">
            <h5>Login</h5>
            <a href="#" /*</div>onClick="hideLoginFilter()" */>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z"
                  fill="#050400"
                />
              </svg>
            </a>
          </div>
          <form className="mt-5">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter Your Email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="********" />
            </div>
            <div className="form-submit">
              <button type="submit" className="btn btn-submit">
                Login
              </button>
            </div>
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- login modal end --> */}
    </main>
  );
}
