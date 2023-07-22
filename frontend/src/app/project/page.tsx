import AttentionMarketeers from "@/components/AttentionMarketeers";
import HomeSearch from "@/components/Project/Search";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <main className="">
      <HomeSearch />

      <AttentionMarketeers />

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
