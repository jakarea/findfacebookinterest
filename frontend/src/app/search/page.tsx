/* eslint-disable @next/next/no-img-element */
export default function Page() {
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
                  <a href="#">Log in</a>
                </li>
                <li>
                  <a href="#" className="signup-bttn">
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

      {/* <!-- search section start --> */}
      <section className="search-section hero-section pa-y4">
        <div className="container">
          {/* <!-- find interest search box --> */}
          <div className="find-interest-search-box mt-0">
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

            {/* <!-- selected keyword wrap start --> */}
            <div className="selected-keyword">
              <div className="clear-selection">
                <button type="button" className="btn">
                  Clear Selection
                </button>
              </div>
              {/* <!-- selected keywords --> */}
              <div className="selected-area">
                <span className="selected-key">Courtney</span>
                <span className="selected-key">Max</span>
                <span className="selected-key">Greg</span>
                <span className="selected-key">Angel</span>
                <span className="selected-key">Marjorie</span>
                <span className="selected-key">Marketing</span>
                <span className="selected-key">Marketing</span>
                <span className="selected-key">Marketing</span>
                <span className="selected-key">Marketing</span>
                <span className="selected-key">Gladys</span>
                <span className="selected-key">Arlene</span>
                <span className="selected-key">Victoria</span>
                <span className="selected-key">Darlene</span>
                <span className="selected-key">Ann</span>
                <span className="selected-key">Victoria</span>
                <span className="selected-key">Marketing</span>
                <span className="selected-key">Victoria</span>
                <span className="selected-key">Victoria</span>
                <span className="selected-key">Eduardo</span>
                <span className="selected-key">Victoria</span>
                <span className="selected-key">Eduardo</span>
                <span className="selected-key">Victoria</span>
                <span className="selected-key">Greg</span>
                <span className="selected-key">Angel</span>
                <span className="selected-key">Marjorie</span>
                <span className="selected-key">Marketing</span>
                <span className="selected-key">Marketing</span>
                <span className="selected-key">Marketing</span>
                <span className="selected-key">Marketing</span>
                <span className="selected-key">Gladys</span>
                <span className="selected-key">Arlene</span>
                <span className="selected-key">Victoria</span>
                <span className="selected-key">Darlene</span>
                <span className="selected-key">Ann</span>
                <span className="selected-key">Victoria</span>
                <span className="selected-key">Marketing</span>
                <span className="selected-key">Marketing</span>
                <span className="selected-key">Marketing</span>
                <span className="selected-key">Gladys</span>
                <span className="selected-key">Arlene</span>
                <span className="selected-key">Victoria</span>
                <span className="selected-key">Darlene</span>
                <span className="selected-key">Ann</span>
                <span className="selected-key">Victoria</span>
              </div>
              {/* <!-- selected keywords --> */}
            </div>
            {/* <!-- selected keyword wrap end --> */}

            {/* <!-- interest list table --> */}
            <div className="interest-list-header">
              <h4>32 Interest Selected of 423</h4>
              {/* <!-- filter area start --> */}
              <div className="header-filter">
                <button
                  type="button"
                  className="btn filter-bttn" /* onclick="showFilter()" */
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.0001 3C14.7548 3 17.4552 3.23205 20.0831 3.67767C20.6159 3.76803 21 4.23355 21 4.77402V5.81802C21 6.41476 20.7629 6.98705 20.341 7.40901L14.909 12.841C14.4871 13.2629 14.25 13.8352 14.25 14.432V17.3594C14.25 18.2117 13.7685 18.9908 13.0062 19.3719L9.75 21V14.432C9.75 13.8352 9.51295 13.2629 9.09099 12.841L3.65901 7.40901C3.23705 6.98705 3 6.41476 3 5.81802V4.77404C3 4.23357 3.38408 3.76805 3.91694 3.67769C6.54479 3.23206 9.24533 3 12.0001 3Z"
                      stroke="#6F7984"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Filter
                </button>
                <button type="button" className="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.75 17.25V20.625C15.75 21.2463 15.2463 21.75 14.625 21.75H4.875C4.25368 21.75 3.75 21.2463 3.75 20.625V7.875C3.75 7.25368 4.25368 6.75 4.875 6.75H6.75C7.26107 6.75 7.76219 6.7926 8.25 6.87444M15.75 17.25H19.125C19.7463 17.25 20.25 16.7463 20.25 16.125V11.25C20.25 6.79051 17.0066 3.08855 12.75 2.37444C12.2622 2.2926 11.7611 2.25 11.25 2.25H9.375C8.75368 2.25 8.25 2.75368 8.25 3.375V6.87444M15.75 17.25H9.375C8.75368 17.25 8.25 16.7463 8.25 16.125V6.87444M20.25 13.5V11.625C20.25 9.76104 18.739 8.25 16.875 8.25H15.375C14.7537 8.25 14.25 7.74632 14.25 7.125V5.625C14.25 3.76104 12.739 2.25 10.875 2.25H9.75"
                      stroke="#6F7984"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Copy to Clipboard
                </button>
                <button type="button" className="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M9 14.25L12 17.25M12 17.25L15 14.25M12 17.25L12 11.25M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V20.625C4.5 21.2463 5.00368 21.75 5.625 21.75H18.375C18.9963 21.75 19.5 21.2463 19.5 20.625V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25Z"
                      stroke="#6F7984"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Export to CSV
                </button>
                <button
                  type="button"
                  className="btn modal-bttn" /* onclick="showProjectModal()" */
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 10.5V16.5M15 13.5H9M13.0607 6.31066L10.9393 4.18934C10.658 3.90804 10.2765 3.75 9.87868 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9C21.75 7.75736 20.7426 6.75 19.5 6.75H14.1213C13.7235 6.75 13.342 6.59197 13.0607 6.31066Z"
                      stroke="#6F7984"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Save to project
                </button>
              </div>
              {/* <!-- filter area end --> */}
            </div>
            <div className="interest-list-table">
              <table>
                <thead>
                  <tr>
                    <th>
                      <label className="checbox-cont">
                        Name
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </th>
                    <th>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g opacity="0.6">
                          <path
                            d="M2.5 6.25L6.25 2.5M6.25 2.5L10 6.25M6.25 2.5V13.75M17.5 13.75L13.75 17.5M13.75 17.5L10 13.75M13.75 17.5L13.75 6.25"
                            stroke="#545D68"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </svg>
                      Audience
                    </th>
                    <th>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g opacity="0.6">
                          <path
                            d="M2.5 6.25L6.25 2.5M6.25 2.5L10 6.25M6.25 2.5V13.75M17.5 13.75L13.75 17.5M13.75 17.5L10 13.75M13.75 17.5L13.75 6.25"
                            stroke="#545D68"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </svg>
                      Topic
                    </th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <!-- item --> */}
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Magna Malesuada
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>1.23 M ~ 4.25 M</td>
                    <td>Adobe MAX</td>
                    <td>
                      <a href="#">
                        <img
                          src="./assets/images/fb.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/google.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/f-icon.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                    </td>
                  </tr>
                  {/* <!-- item --> */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Magna Malesuada
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>1.23 M ~ 4.25 M</td>
                    <td>Adobe MAX</td>
                    <td>
                      <a href="#">
                        <img
                          src="./assets/images/fb.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/google.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/f-icon.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                    </td>
                  </tr>
                  {/* <!-- item --> */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Magna Malesuada
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>1.23 M ~ 4.25 M</td>
                    <td>Adobe MAX</td>
                    <td>
                      <a href="#">
                        <img
                          src="./assets/images/fb.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/google.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/f-icon.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                    </td>
                  </tr>
                  {/* <!-- item --> */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Magna Malesuada
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>1.23 M ~ 4.25 M</td>
                    <td>Adobe MAX</td>
                    <td>
                      <a href="#">
                        <img
                          src="./assets/images/fb.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/google.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/f-icon.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                    </td>
                  </tr>
                  {/* <!-- item --> */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Magna Malesuada
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>1.23 M ~ 4.25 M</td>
                    <td>Adobe MAX</td>
                    <td>
                      <a href="#">
                        <img
                          src="./assets/images/fb.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/google.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/f-icon.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                    </td>
                  </tr>
                  {/* <!-- item --> */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Magna Malesuada
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>1.23 M ~ 4.25 M</td>
                    <td>Adobe MAX</td>
                    <td>
                      <a href="#">
                        <img
                          src="./assets/images/fb.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/google.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/f-icon.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                    </td>
                  </tr>
                  {/* <!-- item --> */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Magna Malesuada
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>1.23 M ~ 4.25 M</td>
                    <td>Adobe MAX</td>
                    <td>
                      <a href="#">
                        <img
                          src="./assets/images/fb.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/google.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/f-icon.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                    </td>
                  </tr>
                  {/* <!-- item --> */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Magna Malesuada
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>1.23 M ~ 4.25 M</td>
                    <td>Adobe MAX</td>
                    <td>
                      <a href="#">
                        <img
                          src="./assets/images/fb.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/google.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/f-icon.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                    </td>
                  </tr>
                  {/* <!-- item --> */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Magna Malesuada
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>1.23 M ~ 4.25 M</td>
                    <td>Adobe MAX</td>
                    <td>
                      <a href="#">
                        <img
                          src="./assets/images/fb.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/google.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/f-icon.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                    </td>
                  </tr>
                  {/* <!-- item --> */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Magna Malesuada
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>1.23 M ~ 4.25 M</td>
                    <td>Adobe MAX</td>
                    <td>
                      <a href="#">
                        <img
                          src="./assets/images/fb.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/google.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/f-icon.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                    </td>
                  </tr>
                  {/* <!-- item --> */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Magna Malesuada
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>1.23 M ~ 4.25 M</td>
                    <td>Adobe MAX</td>
                    <td>
                      <a href="#">
                        <img
                          src="./assets/images/fb.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/google.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/f-icon.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                    </td>
                  </tr>
                  {/* <!-- item --> */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Magna Malesuada
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>1.23 M ~ 4.25 M</td>
                    <td>Adobe MAX</td>
                    <td>
                      <a href="#">
                        <img
                          src="./assets/images/fb.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/google.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/f-icon.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                    </td>
                  </tr>
                  {/* <!-- item --> */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Magna Malesuada
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>1.23 M ~ 4.25 M</td>
                    <td>Adobe MAX</td>
                    <td>
                      <a href="#">
                        <img
                          src="./assets/images/fb.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/google.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/f-icon.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                    </td>
                  </tr>
                  {/* <!-- item --> */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Magna Malesuada
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>1.23 M ~ 4.25 M</td>
                    <td>Adobe MAX</td>
                    <td>
                      <a href="#">
                        <img
                          src="./assets/images/fb.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/google.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/f-icon.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                    </td>
                  </tr>
                  {/* <!-- item --> */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Magna Malesuada
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>1.23 M ~ 4.25 M</td>
                    <td>Adobe MAX</td>
                    <td>
                      <a href="#">
                        <img
                          src="./assets/images/fb.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/google.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/f-icon.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                    </td>
                  </tr>
                  {/* <!-- item --> */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Magna Malesuada
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>1.23 M ~ 4.25 M</td>
                    <td>Adobe MAX</td>
                    <td>
                      <a href="#">
                        <img
                          src="./assets/images/fb.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/google.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/images/f-icon.svg"
                          alt="FB"
                          className="img-fluid"
                        />
                      </a>
                    </td>
                  </tr>
                  {/* <!-- item --> */}
                </tbody>
              </table>
            </div>
            {/* <!-- interest list table --> */}
          </div>
          {/* <!-- find interest search box --> */}
        </div>
      </section>
      {/* <!-- search section end --> */}

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
                {` With our cutting-edge marketing scripts for Facebook, ad spy
                tools, real-time lead collection, and seamless management of
                multiple and scheduled posts on Facebook and Instagram, we
                provide everything you need to drive exceptional results. But
                that's not all!`}
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
                {`Don't miss out on this opportunity to take your business to the
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

      {/* <!-- keyword filter sidebar start --> */}
      <div className="keyword-filter-wrap" id="filter-box">
        <div className="filter-box-wrap">
          <div className="close-filter">
            <a href="#" /* onclick="hideFilter()" */>
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
          <div className="d-grid">
            <div className="filter-item">
              <div className="form-group">
                <label>Min Audience Size</label>
                <input type="text" placeholder="100" />
              </div>
              <div className="exclude-word">
                <h6>Exclude Words</h6>
                <table>
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Magna Malesuada
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>48</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Roots Ahumados
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Tandoori Nights
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        El Deliciós - Comida Etíope
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Ratpenat
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>13</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Gastrobar Mali
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Tapes Jardí
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Pasión Mediterránea
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="text-start">
                      <a href="#">Deselect all</a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="filter-item">
              <div className="form-group">
                <label>Min Audience Size</label>
                <input type="text" placeholder="100" />
              </div>
              <div className="exclude-word">
                <h6>Exclude Words</h6>
                <table>
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Magna Malesuada
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>48</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Roots Ahumados
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Tandoori Nights
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        El Deliciós - Comida Etíope
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Ratpenat
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>13</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Gastrobar Mali
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Tapes Jardí
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checbox-cont">
                        Pasión Mediterránea
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="text-start">
                      <a href="#">Deselect all</a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- keyword filter sidebar end --> */}

      {/* <!-- save to project modal start --> */}
      <div className="modal-wrapper" id="project-modal">
        <div className="save-to-project-modal-wrap">
          <div className="modal-header">
            <h5>Save to project</h5>
          </div>
          <form>
            <div className="modal-input-text">
              <div className="form-group">
                <label>Save to an existing project</label>
                <select>
                  <option value="">Select your project</option>
                </select>
              </div>
              <div className="form-group">
                <label>Save to new project</label>
                <input type="text" placeholder="Add Name to your project" />
              </div>
            </div>
            <div className="modal-ftr">
              <button
                type="button"
                className="btn btn-cancle" /* onclick="hideProjectModal()" */
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-save">
                Save project
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- save to project modal end --> */}

      {/* <!-- modal script --> */}
    </main>
  );
}
