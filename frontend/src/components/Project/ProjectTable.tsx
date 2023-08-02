"use client";
import { v4 } from "uuid";
import ProjectRow, { ProjectItemProp } from "./ProjectRow";

const ProjectTable = () => {
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
                    <ProjectRow
                      count={item.count}
                      id={item.id}
                      title={item.title}
                      key={item.id}
                    />
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

export default ProjectTable;

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
