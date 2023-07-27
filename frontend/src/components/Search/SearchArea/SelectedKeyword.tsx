import React from "react";

export type KeywordProps = string;

interface SelectedKeywordProps {
  selectedKeywords: KeywordProps[];
  setSelectedKeywords?: Function;
  clearSelectedAds: () => void;
}

const SelectedKeyword: React.FC<SelectedKeywordProps> = (props) => {
  const { selectedKeywords, clearSelectedAds } = props;

  return (
    <>
      <div className="selected-keyword">
        <div className="clear-selection">
          <button
            type="button"
            disabled={selectedKeywords.length === 0}
            onClick={clearSelectedAds}
            className="btn"
          >
            Clear Selection
          </button>
        </div>
        {/* <!-- selected keywords --> */}

        <div className="selected-area">
          {selectedKeywords.length > 0 ? (
            selectedKeywords.map((item: KeywordProps) => (
              <span className="selected-key" key={Math.random()}>
                {item}
              </span>
            ))
          ) : (
            <p style={{ marginBottom: 10 }}>No selection</p>
          )}
          {}
        </div>
      </div>
    </>
  );
};

export default SelectedKeyword;
