"use client";
import { v4 } from "uuid";
interface ProjectItemProp {
  id: string | number;
  title: string;
  count: number;
}

const HomeSearch = () => {
  return (
    <>
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
                  {DATA.map((item: ProjectItemProp) => (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>{item.count}</td>
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
                  ))}

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
    </>
  );
};

export default HomeSearch;

const DATA: ProjectItemProp[] = [
  {
    id: v4(),
    title: "Playstation 4 Limited Edition (with games)",
    count: Math.floor(Math.random() * 100),
  },
  {
    id: v4(),
    title: "Playstation 4 Limited Edition (with games)",
    count: Math.floor(Math.random() * 100),
  },
  {
    id: v4(),
    title: "Playstation 4 Limited Edition (with games)",
    count: Math.floor(Math.random() * 100),
  },
  {
    id: v4(),
    title: "Playstation 4 Limited Edition (with games)",
    count: Math.floor(Math.random() * 100),
  },
];
