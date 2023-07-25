const SearchBox = () => {
  return (
    <div>
      <form>
        <div className="d-flex">
          <div className="form-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g opacity="0.6">
                <path
                  d="M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033Z"
                  stroke="#7B8591"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <input type="text" placeholder="Enter Keywords" />
          </div>
          <div className="form-bttns">
            <select>
              <option value="en">English (US)</option>
              <option value="bn">Bangla (BN)</option>
            </select>
            <button type="submit" className="btn common-bttn">
              Explore
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
