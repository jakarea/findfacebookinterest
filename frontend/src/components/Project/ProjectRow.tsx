import React, { useMemo, useState } from "react";
interface ProjectItemProp {
  id: string | number;
  title: string;
  count: number;
  deleteHandler: Function;
  results: string;
}

interface WordListForFilterTypes {
  [key: string]: number;
}

const ProjectRow: React.FC<ProjectItemProp> = (props) => {
  const { count, id, title, deleteHandler, results } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleModal = () => {
    setIsOpen((p) => !p);
  };

  const wordCount = useMemo<WordListForFilterTypes>(() => {
    const words: WordListForFilterTypes = results
      .split(",")
      .reduce<WordListForFilterTypes>(
        (acc: WordListForFilterTypes, cur: string) => {
          if (cur) {
            acc[cur] = acc?.hasOwnProperty(cur) ? acc[cur] + 1 : 1;
          }
          return acc;
        },
        {}
      );
    return words;
  }, [results]);

  return (
    <>
      <tr key={id}>
        <td>{title}</td>
        <td>{count}</td>
        <td>
          <div className="action-bttns">
            <a
              href=""
              onClick={(e: any) => {
                e.preventDefault();
                toggleModal();
              }}
            >
              <EyeIcon />
              View
            </a>
            <a href="" onClick={deleteHandler(id)}>
              <TrashIcon />
              Delete
            </a>
          </div>
        </td>
      </tr>

      <ViewModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        wordCount={wordCount}
      />
    </>
  );
};

interface ViewModalProps {
  isOpen: boolean;
  toggleModal: Function;
  wordCount: WordListForFilterTypes;
}

const ViewModal: React.FC<ViewModalProps> = (props) => {
  const { isOpen, toggleModal, wordCount } = props;
  return (
    <div
      className="modal-wrapper"
      style={{ display: isOpen ? "flex" : "none" }}
      id="project-modal"
    >
      <div className="save-to-project-modal-wrap">
        <div className="modal-header">
          <h5 style={{ textAlign: "center" }}>Keywords</h5>
        </div>

        <div>
          <div className="interest-list-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(wordCount).map(
                  ([name, count]: [string, number]) => (
                    <tr key={name}>
                      <td>{name}</td>
                      <td>{count}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="modal-ftr">
          <button
            type="button"
            className="btn btn-cancle"
            onClick={() => toggleModal()}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-save">
            Save project
          </button>
        </div>
      </div>
    </div>
  );
};

const TrashIcon = () => (
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EyeIcon = () => (
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 8C10 9.10457 9.10462 10 8.00005 10C6.89548 10 6.00005 9.10457 6.00005 8C6.00005 6.89543 6.89548 6 8.00005 6C9.10462 6 10 6.89543 10 8Z"
      stroke="#939FAD"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ProjectRow;
