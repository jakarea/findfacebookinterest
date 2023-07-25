import React from "react";

export interface KeywordProps {
  id: string | number;
  name: string;
}

interface SelectedKeywordProps {
  selectedKeywords: KeywordProps[];
  setSelectedKeywords: Function;
}

const SelectedKeyword: React.FC<SelectedKeywordProps> = (props) => {
  const { selectedKeywords, setSelectedKeywords } = props;

  const clearSelection = () => {
    setSelectedKeywords([]);
  };

  if (selectedKeywords.length <= 0) return null;
  return (
    <>
      <div className="selected-keyword">
        <div className="clear-selection">
          <button type="button" onClick={clearSelection} className="btn">
            Clear Selection
          </button>
        </div>
        {/* <!-- selected keywords --> */}

        <div className="selected-area">
          {selectedKeywords.map((item: KeywordProps) => (
            <span className="selected-key" key={item.id}>
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default SelectedKeyword;
