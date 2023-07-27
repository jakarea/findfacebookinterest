"use client";
import axiosInstance from "@/utils/axiosInstance";
import { useCallback, useMemo, useState } from "react";
import KeywordFilterSidebar from "../KeywordFilterSidebar";
import SaveToProjectModal from "../SaveToProjectModal";
import ListTable, { AdsProps } from "./ListTable";
import Menus from "./Menus";

import RecentKeywords from "@/components/RecentKeyword";
import cookie from "@/utils/cookie";
import SearchBox from "./SearchBox";
import SelectedKeyword, { KeywordProps } from "./SelectedKeyword";

type SelectedAdsType = string | number;

const SearchArea = () => {
  // static states
  const [isProjectOpen, setIsProjectOpen] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  // dynamic states
  const [data, setData] = useState<AdsProps[]>(ADS_DATA);
  const [selectedAds, setSelectedAds] = useState<SelectedAdsType[]>([]);
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

  const toggleSelect = useCallback((id: SelectedAdsType): void => {
    setSelectedAds((p: SelectedAdsType[]): SelectedAdsType[] => {
      if (p.includes(id)) {
        return p.filter((i: SelectedAdsType) => i !== id);
      }
      return [...p, id];
    });
  }, []);

  const selectedKeywords = useMemo<KeywordProps[]>(() => {
    const filter: any[] = data.reduce((acc: any[], cur: any) => {
      if (selectedAds.includes(cur.id)) {
        cur?.path?.forEach((value: any) => {
          if (!acc.includes(value)) {
            acc.push(value);
          }
        });
      }
      return acc;
    }, []);
    return filter;
  }, [data, selectedAds]);

  const clearSelectedAds = () => {
    setSelectedAds([]);
  };
  const selectAllAdsToggle = useCallback(() => {
    setSelectedAds((p: SelectedAdsType[]): SelectedAdsType[] => {
      if (p.length === data.length) {
        return [];
      }
      return data.map((i: AdsProps) => i.id);
    });
  }, [data]);

  return (
    <>
      <section className="search-section hero-section pa-y4">
        <div className="container">
          {/* <!-- find interest search box --> */}
          <div className="find-interest-search-box mt-0">
            <SearchBox searchData={searchData} />

            <RecentKeywords />
            <SelectedKeyword
              selectedKeywords={selectedKeywords}
              clearSelectedAds={clearSelectedAds}
            />

            <Menus
              {...{ toggleFilter, toggleProject }}
              total={data.length}
              selectedTotal={selectedAds.length}
            />
            <ListTable
              data={data}
              toggleSelect={toggleSelect}
              selectedAds={selectedAds}
              selectAllAdsToggle={selectAllAdsToggle}
            />
          </div>
          {/* <!-- find interest search box --> */}
        </div>

        <KeywordFilterSidebar
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
        />

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

const ADS_DATA: AdsProps[] = [
  {
    id: "6002970955594",
    name: "Fantasy films",
    audience_size_lower_bound: 178575374,
    audience_size_upper_bound: 210004640,
    path: ["Interests", "Additional interests", "Fantasy films"],
    description: null,
    topic: "News and entertainment",
  },
  {
    id: "6003283449854",
    name: "Fandom",
    audience_size_lower_bound: 166488375,
    audience_size_upper_bound: 195790330,
    path: ["Interests", "Additional interests", "Fandom"],
    description: null,
    topic: "Technology",
  },
  {
    id: "6003179672350",
    name: "Fanatics",
    audience_size_lower_bound: 120244804,
    audience_size_upper_bound: 141407890,
    path: ["Interests", "Additional interests", "Fanatics"],
    description: null,
    topic: "Company",
  },
  {
    id: "6003143359761",
    name: "Anime and manga fandom",
    audience_size_lower_bound: 41102814,
    audience_size_upper_bound: 48336910,
    path: ["Interests", "Additional interests", "Anime and manga fandom"],
    description: null,
    topic: "Technology",
  },
  {
    id: "6003420695831",
    name: "Science fantasy",
    audience_size_lower_bound: 32817151,
    audience_size_upper_bound: 38592970,
    path: ["Interests", "Additional interests", "Science fantasy"],
    description: null,
    topic: "News and entertainment",
  },
  {
    id: "6003221212067",
    name: "Romantic fantasy",
    audience_size_lower_bound: 22859302,
    audience_size_upper_bound: 26882540,
    path: ["Interests", "Additional interests", "Romantic fantasy"],
    description: null,
    topic: "News and entertainment",
  },
  {
    id: "6003319851418",
    name: "Harry Potter fandom",
    audience_size_lower_bound: 14873622,
    audience_size_upper_bound: 17491380,
    path: ["Interests", "Additional interests", "Harry Potter fandom"],
    description: null,
    topic: "News and entertainment",
  },
];

export default SearchArea;
