"use client";
import axiosInstance from "@/utils/axiosInstance";
import { useCallback, useState } from "react";
import { v4 } from "uuid";
import KeywordFilterSidebar from "../KeywordFilterSidebar";
import SaveToProjectModal from "../SaveToProjectModal";
import ListTable, { AdsProps } from "./ListTable";
import Menus from "./Menus";

import RecentKeywords from "@/components/RecentKeyword";
import cookie from "@/utils/cookie";
import SearchBox from "./SearchBox";
import SelectedKeyword, { KeywordProps } from "./SelectedKeyword";

const SearchArea = () => {
  // static states
  const [selectedKeywords, setSelectedKeywords] =
    useState<KeywordProps[]>(DATA);
  const [isProjectOpen, setIsProjectOpen] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  // dynamic states
  const [data, setData] = useState<AdsProps[]>([]);

  // static functions
  const toggleProject = () => {
    setIsProjectOpen((p) => !p);
  };
  const toggleFilter = () => {
    setIsFilterOpen((p) => !p);
  };

  // dynamic functions
  const searchData = useCallback(async (key: string, lang: string) => {
    try {
      const data = {
        name: key,
        lang,
        cookie: cookie.get(),
      };
      const res = await axiosInstance.post("/key", data);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <section className="search-section hero-section pa-y4">
        <div className="container">
          {/* <!-- find interest search box --> */}
          <div className="find-interest-search-box mt-0">
            <SearchBox searchData={searchData} />

            <RecentKeywords />
            <SelectedKeyword {...{ selectedKeywords, setSelectedKeywords }} />

            <Menus {...{ toggleFilter, toggleProject }} />
            <ListTable data={data} />
          </div>
          {/* <!-- find interest search box --> */}
        </div>

        <KeywordFilterSidebar {...{ isFilterOpen, setIsFilterOpen }} />

        <SaveToProjectModal
          {...{
            saveToProjectModal: isProjectOpen,
            setSaveToProjectModal: setIsProjectOpen,
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
