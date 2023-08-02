import axiosInstance from "@/utils/axiosInstance";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface Props {
  isProjectOpen: boolean;
  setIsProjectOpen: Function;
  selectedString: string;
}

interface FormFields {
  project: string;
  name: string;
}

interface ProjectItemProps {
  name: string;
  results: string;
  id: number | string;
}

const SaveToProjectModal: React.FC<Props> = (props) => {
  const { isProjectOpen, setIsProjectOpen, selectedString } = props;
  const closeModal = () => [setIsProjectOpen(false)];
  const [projects, setProjects] = useState<ProjectItemProps[]>([]);
  const {
    register,
    control,
    formState: { errors },
    reset,
    handleSubmit,
    setError,
  } = useForm<FormFields>({
    defaultValues: {
      name: "",
      project: "",
    },
  });

  const submitHandler = async (values: FormFields) => {
    try {
      if (!values.project) {
        const res = await axiosInstance.post("/project", {
          name: values.name,
          results: selectedString,
        });
        toast.success(res.data.message);
        setProjects((p) => [...p, res.data.data]);
        reset();
        closeModal();
      } else {
        const project = projects.find(
          (project: ProjectItemProps) => project.id === parseInt(values.project)
        );

        const res = await axiosInstance.put(`/project/${values.project}`, {
          name: project?.name,
          results: project?.results + ", " + selectedString,
        });
        toast.success(res.data.message);
        reset();
        closeModal();
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          Object.keys(error.response.data.data).forEach((item: any) => {
            setError(item, { message: error.response.data.data[item][0] });
          });
        }
      }
    }
  };

  useEffect(() => {
    axiosInstance
      .get("/project")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((e) => [console.log(e)]);
  }, []);

  return (
    <>
      <div
        className="modal-wrapper"
        style={{ display: isProjectOpen ? "flex" : "none" }}
        id="project-modal"
      >
        <div className="save-to-project-modal-wrap">
          <div className="modal-header">
            <h5>Save to project</h5>
          </div>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="modal-input-text">
              <div className="form-group">
                <label>Save to an existing project</label>
                <Controller
                  name="project"
                  control={control}
                  defaultValue=""
                  rules={{
                    validate: (project, { name }) => {
                      if (!project && !name)
                        return "Either select an existing project or add to a new project";
                      return true;
                    },
                  }}
                  render={({ field }) => (
                    <select {...field}>
                      <option value={""}>Select your project</option>
                      {projects.map((project: ProjectItemProps) => (
                        <option key={project.id} value={project.id}>
                          {project.name}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors?.project && (
                  <small className="" style={{ color: "red" }}>
                    {errors?.project?.message}
                  </small>
                )}
              </div>
              <div className="form-group">
                <label>Save to new project</label>
                <input
                  type="text"
                  placeholder="Add Name to your project"
                  {...register("name", {
                    validate: (name, { project }) => {
                      if (!project && !name)
                        return "Either select an existing project or add to a new project";
                      return true;
                    },
                  })}
                />
                {errors?.name && (
                  <small className="" style={{ color: "red" }}>
                    {errors?.name?.message}
                  </small>
                )}
              </div>
            </div>
            <div className="modal-ftr">
              <button
                type="button"
                className="btn btn-cancle"
                onClick={closeModal}
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
    </>
  );
};

export default SaveToProjectModal;
