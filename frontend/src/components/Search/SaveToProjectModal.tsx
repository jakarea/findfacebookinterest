import React from "react";

interface Props {
  saveToProjectModal: boolean;
  setSaveToProjectModal: Function;
}

const SaveToProjectModal: React.FC<Props> = (props) => {
  const { saveToProjectModal, setSaveToProjectModal } = props;
  const closeModal = () => [setSaveToProjectModal(false)];
  return (
    <>
      <div
        className="modal-wrapper"
        style={{ display: saveToProjectModal ? "flex" : "none" }}
        id="project-modal"
      >
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
