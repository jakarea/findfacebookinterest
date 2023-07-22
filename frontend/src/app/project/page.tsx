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
      <div className="search-section hero-section pa-y4">
        <div className="container">
          {/* <!-- find interest search box --> */}
          <div className="find-interest-search-box mt-0">
            {/* <!-- interest list table --> */}

            <div className="interest-list-table">
              <table>
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Keywords</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <!-- item --> */}
                  <tr>
                    <td>Playstation 4 Limited Edition (with games)</td>
                    <td>5</td>
                    <td>
                      <div className="action-bttns">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M1.35708 8.21493C1.31103 8.07676 1.31098 7.92716 1.35696 7.78895C2.28253 5.00648 4.90724 3 8.00059 3C11.0925 3 13.7162 5.00462 14.6429 7.78507C14.689 7.92325 14.689 8.07285 14.6431 8.21105C13.7175 10.9935 11.0928 13 7.99942 13C4.90751 13 2.28381 10.9954 1.35708 8.21493Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10 8C10 9.10457 9.10462 10 8.00005 10C6.89548 10 6.00005 9.10457 6.00005 8C6.00005 6.89543 6.89548 6 8.00005 6C9.10462 6 10 6.89543 10 8Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          View
                        </a>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M13.5 5L13.0831 12.0881C13.0364 12.8809 12.3799 13.5 11.5856 13.5H4.41436C3.62014 13.5 2.96358 12.8809 2.91695 12.0881L2.5 5M6.6665 7.5H9.33317M2.25 5H13.75C14.1642 5 14.5 4.66421 14.5 4.25V3.25C14.5 2.83579 14.1642 2.5 13.75 2.5H2.25C1.83579 2.5 1.5 2.83579 1.5 3.25V4.25C1.5 4.66421 1.83579 5 2.25 5Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Delete
                        </a>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- item -->  */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>Playstation 4 Limited Edition (with games)</td>
                    <td>5</td>
                    <td>
                      <div className="action-bttns">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M1.35708 8.21493C1.31103 8.07676 1.31098 7.92716 1.35696 7.78895C2.28253 5.00648 4.90724 3 8.00059 3C11.0925 3 13.7162 5.00462 14.6429 7.78507C14.689 7.92325 14.689 8.07285 14.6431 8.21105C13.7175 10.9935 11.0928 13 7.99942 13C4.90751 13 2.28381 10.9954 1.35708 8.21493Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10 8C10 9.10457 9.10462 10 8.00005 10C6.89548 10 6.00005 9.10457 6.00005 8C6.00005 6.89543 6.89548 6 8.00005 6C9.10462 6 10 6.89543 10 8Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          View
                        </a>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M13.5 5L13.0831 12.0881C13.0364 12.8809 12.3799 13.5 11.5856 13.5H4.41436C3.62014 13.5 2.96358 12.8809 2.91695 12.0881L2.5 5M6.6665 7.5H9.33317M2.25 5H13.75C14.1642 5 14.5 4.66421 14.5 4.25V3.25C14.5 2.83579 14.1642 2.5 13.75 2.5H2.25C1.83579 2.5 1.5 2.83579 1.5 3.25V4.25C1.5 4.66421 1.83579 5 2.25 5Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Delete
                        </a>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- item -->  */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>Playstation 4 Limited Edition (with games)</td>
                    <td>5</td>
                    <td>
                      <div className="action-bttns">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M1.35708 8.21493C1.31103 8.07676 1.31098 7.92716 1.35696 7.78895C2.28253 5.00648 4.90724 3 8.00059 3C11.0925 3 13.7162 5.00462 14.6429 7.78507C14.689 7.92325 14.689 8.07285 14.6431 8.21105C13.7175 10.9935 11.0928 13 7.99942 13C4.90751 13 2.28381 10.9954 1.35708 8.21493Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10 8C10 9.10457 9.10462 10 8.00005 10C6.89548 10 6.00005 9.10457 6.00005 8C6.00005 6.89543 6.89548 6 8.00005 6C9.10462 6 10 6.89543 10 8Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          View
                        </a>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M13.5 5L13.0831 12.0881C13.0364 12.8809 12.3799 13.5 11.5856 13.5H4.41436C3.62014 13.5 2.96358 12.8809 2.91695 12.0881L2.5 5M6.6665 7.5H9.33317M2.25 5H13.75C14.1642 5 14.5 4.66421 14.5 4.25V3.25C14.5 2.83579 14.1642 2.5 13.75 2.5H2.25C1.83579 2.5 1.5 2.83579 1.5 3.25V4.25C1.5 4.66421 1.83579 5 2.25 5Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Delete
                        </a>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- item -->  */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>Playstation 4 Limited Edition (with games)</td>
                    <td>5</td>
                    <td>
                      <div className="action-bttns">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M1.35708 8.21493C1.31103 8.07676 1.31098 7.92716 1.35696 7.78895C2.28253 5.00648 4.90724 3 8.00059 3C11.0925 3 13.7162 5.00462 14.6429 7.78507C14.689 7.92325 14.689 8.07285 14.6431 8.21105C13.7175 10.9935 11.0928 13 7.99942 13C4.90751 13 2.28381 10.9954 1.35708 8.21493Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10 8C10 9.10457 9.10462 10 8.00005 10C6.89548 10 6.00005 9.10457 6.00005 8C6.00005 6.89543 6.89548 6 8.00005 6C9.10462 6 10 6.89543 10 8Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          View
                        </a>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M13.5 5L13.0831 12.0881C13.0364 12.8809 12.3799 13.5 11.5856 13.5H4.41436C3.62014 13.5 2.96358 12.8809 2.91695 12.0881L2.5 5M6.6665 7.5H9.33317M2.25 5H13.75C14.1642 5 14.5 4.66421 14.5 4.25V3.25C14.5 2.83579 14.1642 2.5 13.75 2.5H2.25C1.83579 2.5 1.5 2.83579 1.5 3.25V4.25C1.5 4.66421 1.83579 5 2.25 5Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Delete
                        </a>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- item -->  */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>Playstation 4 Limited Edition (with games)</td>
                    <td>5</td>
                    <td>
                      <div className="action-bttns">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M1.35708 8.21493C1.31103 8.07676 1.31098 7.92716 1.35696 7.78895C2.28253 5.00648 4.90724 3 8.00059 3C11.0925 3 13.7162 5.00462 14.6429 7.78507C14.689 7.92325 14.689 8.07285 14.6431 8.21105C13.7175 10.9935 11.0928 13 7.99942 13C4.90751 13 2.28381 10.9954 1.35708 8.21493Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10 8C10 9.10457 9.10462 10 8.00005 10C6.89548 10 6.00005 9.10457 6.00005 8C6.00005 6.89543 6.89548 6 8.00005 6C9.10462 6 10 6.89543 10 8Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          View
                        </a>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M13.5 5L13.0831 12.0881C13.0364 12.8809 12.3799 13.5 11.5856 13.5H4.41436C3.62014 13.5 2.96358 12.8809 2.91695 12.0881L2.5 5M6.6665 7.5H9.33317M2.25 5H13.75C14.1642 5 14.5 4.66421 14.5 4.25V3.25C14.5 2.83579 14.1642 2.5 13.75 2.5H2.25C1.83579 2.5 1.5 2.83579 1.5 3.25V4.25C1.5 4.66421 1.83579 5 2.25 5Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Delete
                        </a>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- item -->  */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>Playstation 4 Limited Edition (with games)</td>
                    <td>5</td>
                    <td>
                      <div className="action-bttns">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M1.35708 8.21493C1.31103 8.07676 1.31098 7.92716 1.35696 7.78895C2.28253 5.00648 4.90724 3 8.00059 3C11.0925 3 13.7162 5.00462 14.6429 7.78507C14.689 7.92325 14.689 8.07285 14.6431 8.21105C13.7175 10.9935 11.0928 13 7.99942 13C4.90751 13 2.28381 10.9954 1.35708 8.21493Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10 8C10 9.10457 9.10462 10 8.00005 10C6.89548 10 6.00005 9.10457 6.00005 8C6.00005 6.89543 6.89548 6 8.00005 6C9.10462 6 10 6.89543 10 8Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          View
                        </a>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M13.5 5L13.0831 12.0881C13.0364 12.8809 12.3799 13.5 11.5856 13.5H4.41436C3.62014 13.5 2.96358 12.8809 2.91695 12.0881L2.5 5M6.6665 7.5H9.33317M2.25 5H13.75C14.1642 5 14.5 4.66421 14.5 4.25V3.25C14.5 2.83579 14.1642 2.5 13.75 2.5H2.25C1.83579 2.5 1.5 2.83579 1.5 3.25V4.25C1.5 4.66421 1.83579 5 2.25 5Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Delete
                        </a>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- item -->  */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>Playstation 4 Limited Edition (with games)</td>
                    <td>5</td>
                    <td>
                      <div className="action-bttns">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M1.35708 8.21493C1.31103 8.07676 1.31098 7.92716 1.35696 7.78895C2.28253 5.00648 4.90724 3 8.00059 3C11.0925 3 13.7162 5.00462 14.6429 7.78507C14.689 7.92325 14.689 8.07285 14.6431 8.21105C13.7175 10.9935 11.0928 13 7.99942 13C4.90751 13 2.28381 10.9954 1.35708 8.21493Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10 8C10 9.10457 9.10462 10 8.00005 10C6.89548 10 6.00005 9.10457 6.00005 8C6.00005 6.89543 6.89548 6 8.00005 6C9.10462 6 10 6.89543 10 8Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          View
                        </a>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M13.5 5L13.0831 12.0881C13.0364 12.8809 12.3799 13.5 11.5856 13.5H4.41436C3.62014 13.5 2.96358 12.8809 2.91695 12.0881L2.5 5M6.6665 7.5H9.33317M2.25 5H13.75C14.1642 5 14.5 4.66421 14.5 4.25V3.25C14.5 2.83579 14.1642 2.5 13.75 2.5H2.25C1.83579 2.5 1.5 2.83579 1.5 3.25V4.25C1.5 4.66421 1.83579 5 2.25 5Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Delete
                        </a>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- item -->  */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>Playstation 4 Limited Edition (with games)</td>
                    <td>5</td>
                    <td>
                      <div className="action-bttns">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M1.35708 8.21493C1.31103 8.07676 1.31098 7.92716 1.35696 7.78895C2.28253 5.00648 4.90724 3 8.00059 3C11.0925 3 13.7162 5.00462 14.6429 7.78507C14.689 7.92325 14.689 8.07285 14.6431 8.21105C13.7175 10.9935 11.0928 13 7.99942 13C4.90751 13 2.28381 10.9954 1.35708 8.21493Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10 8C10 9.10457 9.10462 10 8.00005 10C6.89548 10 6.00005 9.10457 6.00005 8C6.00005 6.89543 6.89548 6 8.00005 6C9.10462 6 10 6.89543 10 8Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          View
                        </a>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M13.5 5L13.0831 12.0881C13.0364 12.8809 12.3799 13.5 11.5856 13.5H4.41436C3.62014 13.5 2.96358 12.8809 2.91695 12.0881L2.5 5M6.6665 7.5H9.33317M2.25 5H13.75C14.1642 5 14.5 4.66421 14.5 4.25V3.25C14.5 2.83579 14.1642 2.5 13.75 2.5H2.25C1.83579 2.5 1.5 2.83579 1.5 3.25V4.25C1.5 4.66421 1.83579 5 2.25 5Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Delete
                        </a>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- item -->  */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>Playstation 4 Limited Edition (with games)</td>
                    <td>5</td>
                    <td>
                      <div className="action-bttns">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M1.35708 8.21493C1.31103 8.07676 1.31098 7.92716 1.35696 7.78895C2.28253 5.00648 4.90724 3 8.00059 3C11.0925 3 13.7162 5.00462 14.6429 7.78507C14.689 7.92325 14.689 8.07285 14.6431 8.21105C13.7175 10.9935 11.0928 13 7.99942 13C4.90751 13 2.28381 10.9954 1.35708 8.21493Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10 8C10 9.10457 9.10462 10 8.00005 10C6.89548 10 6.00005 9.10457 6.00005 8C6.00005 6.89543 6.89548 6 8.00005 6C9.10462 6 10 6.89543 10 8Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          View
                        </a>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M13.5 5L13.0831 12.0881C13.0364 12.8809 12.3799 13.5 11.5856 13.5H4.41436C3.62014 13.5 2.96358 12.8809 2.91695 12.0881L2.5 5M6.6665 7.5H9.33317M2.25 5H13.75C14.1642 5 14.5 4.66421 14.5 4.25V3.25C14.5 2.83579 14.1642 2.5 13.75 2.5H2.25C1.83579 2.5 1.5 2.83579 1.5 3.25V4.25C1.5 4.66421 1.83579 5 2.25 5Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Delete
                        </a>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- item -->  */}
                  {/* <!-- item --> */}
                  <tr>
                    <td>Playstation 4 Limited Edition (with games)</td>
                    <td>5</td>
                    <td>
                      <div className="action-bttns">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M1.35708 8.21493C1.31103 8.07676 1.31098 7.92716 1.35696 7.78895C2.28253 5.00648 4.90724 3 8.00059 3C11.0925 3 13.7162 5.00462 14.6429 7.78507C14.689 7.92325 14.689 8.07285 14.6431 8.21105C13.7175 10.9935 11.0928 13 7.99942 13C4.90751 13 2.28381 10.9954 1.35708 8.21493Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10 8C10 9.10457 9.10462 10 8.00005 10C6.89548 10 6.00005 9.10457 6.00005 8C6.00005 6.89543 6.89548 6 8.00005 6C9.10462 6 10 6.89543 10 8Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          View
                        </a>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M13.5 5L13.0831 12.0881C13.0364 12.8809 12.3799 13.5 11.5856 13.5H4.41436C3.62014 13.5 2.96358 12.8809 2.91695 12.0881L2.5 5M6.6665 7.5H9.33317M2.25 5H13.75C14.1642 5 14.5 4.66421 14.5 4.25V3.25C14.5 2.83579 14.1642 2.5 13.75 2.5H2.25C1.83579 2.5 1.5 2.83579 1.5 3.25V4.25C1.5 4.66421 1.83579 5 2.25 5Z"
                              stroke="#939FAD"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Delete
                        </a>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- item -->  */}
                </tbody>
              </table>
            </div>
            {/* <!-- interest list table --> */}
          </div>
          {/* <!-- find interest search box --> */}
        </div>
      </div>
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
            <a href="#" /* onClick="hideFilter()" */>X</a>
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
                className="btn btn-cancle" /*onclick="hideProjectModal()" */
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
    </main>
  );
}
