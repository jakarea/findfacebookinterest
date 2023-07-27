"use client";
import React from "react";
import Drawer from "react-modern-drawer";
import { WordListForFilterTypes } from "./SearchArea";
interface Props {
  isFilterOpen: boolean;
  setIsFilterOpen: Function;
  minAudience: number | undefined;
  maxAudience: number | undefined;
  setMinAudience: Function;
  setMaxAudience: Function;
  wordListForFilter: WordListForFilterTypes;
  includeWords: string[];
  excludeWords: string[];
  setIncludeWords: Function;
  setExcludeWords: Function;
}

const KeywordFilterSidebar: React.FC<Props> = (props) => {
  const {
    isFilterOpen,
    setIsFilterOpen,
    minAudience,
    maxAudience,
    setMinAudience,
    setMaxAudience,
    wordListForFilter,
    includeWords,
    excludeWords,
    setIncludeWords,
    setExcludeWords,
  } = props;
  const closeModal = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsFilterOpen(false);
  };

  const toggleIncludeWords = (name: string) => {
    setIncludeWords((p: string[]): string[] => {
      return p.includes(name)
        ? p.filter((i: string) => i !== name)
        : [...p, name];
    });
  };
  const toggleExcludeWords = (name: string) => {
    setExcludeWords((p: string[]): string[] => {
      return p.includes(name)
        ? p.filter((i: string) => i !== name)
        : [...p, name];
    });
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
                  <input
                    type="number"
                    placeholder="100"
                    value={minAudience}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => [
                      setMinAudience(e.target.value),
                    ]}
                  />
                </div>
                <div className="exclude-word">
                  <h6>Include Words</h6>
                  <table>
                    {Object.entries(wordListForFilter)
                      .sort((a: [string, number], b: [string, number]) => {
                        return b[1] - a[1];
                      })
                      .map(([name, count]: [string, number]) => (
                        <tr key={name}>
                          <td>
                            <label className="checbox-cont">
                              {name}
                              <input
                                type="checkbox"
                                disabled={excludeWords.includes(name)}
                                onChange={() => {
                                  toggleIncludeWords(name);
                                }}
                                checked={includeWords.includes(name)}
                              />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td>{count}</td>
                        </tr>
                      ))}
                  </table>
                </div>
              </div>
              <div className="filter-item">
                <div className="form-group">
                  <label>Max Audience Size</label>
                  <input
                    type="number"
                    placeholder="100"
                    value={maxAudience}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => [
                      setMaxAudience(e.target.value),
                    ]}
                  />
                </div>
                <div className="exclude-word">
                  <h6>Exclude Words</h6>
                  <table>
                    {Object.entries(wordListForFilter)
                      .sort((a: [string, number], b: [string, number]) => {
                        return b[1] - a[1];
                      })
                      .map(([name, count]: [string, number]) => (
                        <tr key={name}>
                          <td>
                            <label className="checbox-cont">
                              {name}
                              <input
                                type="checkbox"
                                disabled={includeWords.includes(name)}
                                onChange={() => {
                                  toggleExcludeWords(name);
                                }}
                                checked={excludeWords.includes(name)}
                              />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td>{count}</td>
                        </tr>
                      ))}
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
