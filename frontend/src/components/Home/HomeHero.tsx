const HomeHero = () => {
  return (
    <div>
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
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
    </div>
  );
};

export default HomeHero;
