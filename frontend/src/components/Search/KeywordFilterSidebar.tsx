"use client";
import React from "react";
import Drawer from "react-modern-drawer";
interface Props {
  isFilterOpen: boolean;
  setIsFilterOpen: Function;
}

const KeywordFilterSidebar: React.FC<Props> = (props) => {
  const { isFilterOpen, setIsFilterOpen } = props;
  const closeModal = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsFilterOpen(false);
  };
  return (
    <>
      <Drawer
        open={isFilterOpen}
        onClose={closeModal}
        direction="right"
        className="register-page-wrap active"
        size={400}
        enableOverlay={false}
      >
        <div
          className={`keyword-filter-wrap ${isFilterOpen ? "active" : ""}`}
          id="filter-box"
        >
          <div className="filter-box-wrap">
            <div className="close-filter">
              <a href="#" onClick={closeModal}>
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
      </Drawer>
    </>
  );
};

export default KeywordFilterSidebar;
