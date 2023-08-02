"use client";
import axiosInstance from "@/utils/axiosInstance";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProjectRow from "./ProjectRow";
interface ProjectItemProps {
  name: string;
  results: string;
  id: number | string;
}
const ProjectTable = () => {
  const [projects, setProjects] = useState<ProjectItemProps[]>([]);
  useEffect(() => {
    axiosInstance
      .get("/project")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((e) => [console.log(e)]);
  }, []);

  const deleteHandler =
    (id: string) => async (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      try {
        const res = await axiosInstance.delete(`/project/${id}`);
        setProjects((prevProject: ProjectItemProps[]): ProjectItemProps[] => {
          return prevProject.filter(
            (item: ProjectItemProps) => item.id !== parseInt(id)
          );
        });
        toast.success(res?.data?.message || "Project deleted successfully!");
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || "Project deletion failed"
        );
      }
    };

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
                  {projects.map((item: ProjectItemProps) => (
                    <ProjectRow
                      count={item?.results?.split(",").length}
                      id={item.id}
                      title={item.name}
                      key={item.id}
                      deleteHandler={deleteHandler}
                      results={item.results}
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
