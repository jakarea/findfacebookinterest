"use client";
import { useState } from "react";
import { v4 } from "uuid";
import KeywordFilterSidebar from "../KeywordFilterSidebar";
import SaveToProjectModal from "../SaveToProjectModal";
import ListTable from "./ListTable";
import Menus from "./Menus";
import RecentKeywords from "./RecentKeywords";
import SearchBox from "./SearchBox";
import SelectedKeyword, { KeywordProps } from "./SelectedKeyword";

const SearchArea = () => {
  const [selectedKeywords, setSelectedKeywords] =
    useState<KeywordProps[]>(DATA);

  const [saveToProjectModal, setSaveToProjectModal] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(true);

  const toggleProject = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSaveToProjectModal((p) => !p);
  };
  const toggleFilter = () => {
    setIsFilterOpen((p) => !p);
  };

  return (
    <>
      <section className="search-section hero-section pa-y4">
        <div className="container">
          {/* <!-- find interest search box --> */}
          <div className="find-interest-search-box mt-0">
            <SearchBox />

            <RecentKeywords />
            <SelectedKeyword {...{ selectedKeywords, setSelectedKeywords }} />

            <Menus {...{ toggleFilter, toggleProject }} />
            <ListTable />
          </div>
          {/* <!-- find interest search box --> */}
        </div>

        <KeywordFilterSidebar {...{ isFilterOpen, setIsFilterOpen }} />

        <SaveToProjectModal
          {...{
            saveToProjectModal,
            setSaveToProjectModal,
          }}
        />
      </section>
    </>
  );
};

const DATA: KeywordProps[] = [
  {
    id: v4(),
    name: "Courtney",
  },
  {
    id: v4(),
    name: "Max",
  },
  {
    id: v4(),
    name: "Greg",
  },
  {
    id: v4(),
    name: "Angel",
  },
  {
    id: v4(),
    name: "Marjorie",
  },
  {
    id: v4(),
    name: "Marketing",
  },
  {
    id: v4(),
    name: "Marketing",
  },
  {
    id: v4(),
    name: "Marketing",
  },
  {
    id: v4(),
    name: "Marketing",
  },
  {
    id: v4(),
    name: "Gladys",
  },
  {
    id: v4(),
    name: "Arlene",
  },
  {
    id: v4(),
    name: "Victoria",
  },
];

export default SearchArea;
