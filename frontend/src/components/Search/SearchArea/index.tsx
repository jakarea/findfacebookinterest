"use client";
import RecentKeywords from "@/components/RecentKeyword";
import { useAuthContext } from "@/context/authContext";
import axiosInstance from "@/utils/axiosInstance";
import cookie from "@/utils/cookie";
import copy from "copy-to-clipboard";
import { useCallback, useMemo, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "react-toastify";
import KeywordFilterSidebar from "../KeywordFilterSidebar";
import SaveToProjectModal from "../SaveToProjectModal";
import ListTable, { AdsProps } from "./ListTable";
import Menus from "./Menus";
import SearchBox from "./SearchBox";
import SelectedKeyword, { KeywordProps } from "./SelectedKeyword";
type SelectedAdsType = string | number;
export interface WordListForFilterTypes {
  [key: string]: number;
}

const SearchArea = () => {
  // global state
  const { state } = useAuthContext();

  // static states
  const [isProjectOpen, setIsProjectOpen] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [minAudience, setMinAudience] = useState<number>(0);
  const [maxAudience, setMaxAudience] = useState<number>(0);

  // dynamic states
  const [data, setData] = useState<AdsProps[]>([]);
  const [selectedAds, setSelectedAds] = useState<SelectedAdsType[]>([]);
  const [includeWords, setIncludeWords] = useState<string[]>([]);
  const [excludeTopics, setExcludeTopics] = useState<string[]>([]);

  // static functions
  const toggleProject = () => {
    if (!state.isAuthenticated) {
      toast.error("You must login to save you project data!");
      return;
    }
    setIsProjectOpen((p) => !p);
  };
  const toggleFilter = () => {
    setIsFilterOpen((p) => !p);
  };

  const filteredData = useMemo<AdsProps[]>(() => {
    let filter = data
      .reduce<AdsProps[]>((acc: AdsProps[], cur: AdsProps) => {
        let condition = false;
        if (minAudience === 0 || maxAudience === 0) condition = true;
        if (minAudience && cur.audience_size_lower_bound >= minAudience) {
          condition = true;
        }
        if (maxAudience && cur.audience_size_upper_bound <= maxAudience) {
          condition = true;
        }

        if (condition) {
          acc.push(cur);
        }
        return acc;
      }, [])
      .filter((ads: AdsProps) => {
        if (excludeTopics.length === 0) return true;
        return !excludeTopics.includes(ads.topic || "None");
      })
      .filter((ads: AdsProps) => {
        let condition = false;
        if (includeWords.length === 0) return true;
        includeWords.forEach((i: string) => {
          if (ads.name.toLowerCase().includes(i)) {
            condition = true;
          }
        });
        return condition;
      });

    setSelectedAds((p: SelectedAdsType[]): SelectedAdsType[] => {
      return filter.reduce<SelectedAdsType[]>(
        (acc: SelectedAdsType[], cur: AdsProps) => {
          if (p.includes(cur.id)) {
            acc.push(cur.id);
          }
          return acc;
        },
        []
      );
    });
    return filter;
  }, [data, minAudience, maxAudience, includeWords, excludeTopics]);

  // dynamic functions
  const searchData = useCallback(async (key: string, lang: string) => {
    try {
      setIsLoading(true);
      const data = {
        name: key,
        lang,
        cookie: cookie.get(),
      };
      const res = await axiosInstance.post("/key", data);
      setData(res.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
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
    return filteredData.reduce((acc: any[], cur: AdsProps) => {
      if (selectedAds.includes(cur.id)) {
        acc.push(cur.name);
      }
      return acc;
    }, []);
  }, [filteredData, selectedAds]);

  const clearSelectedAds = () => {
    setSelectedAds([]);
  };

  const selectAllAdsToggle = useCallback(() => {
    setSelectedAds((p: SelectedAdsType[]): SelectedAdsType[] => {
      if (p.length === filteredData.length) {
        return [];
      }
      return filteredData.map((i: AdsProps) => i.id);
    });
  }, [filteredData]);

  const wordListForFilter = useMemo<WordListForFilterTypes>(() => {
    const words: WordListForFilterTypes = data
      .reduce<string>((acc: string, cur: AdsProps) => {
        return acc + " " + cur.name;
      }, "")
      .toLowerCase()
      .replace(/[^a-zA-Z ]/g, "")
      .split(" ")
      .reduce<WordListForFilterTypes>(
        (acc: WordListForFilterTypes, cur: string) => {
          if (cur) {
            acc[cur] = acc?.hasOwnProperty(cur) ? acc[cur] + 1 : 1;
          }
          return acc;
        },
        {}
      );
    return words;
  }, [data]);

  const topicsListFilter =
    useMemo<WordListForFilterTypes>((): WordListForFilterTypes => {
      const words: WordListForFilterTypes = data.reduce<WordListForFilterTypes>(
        (acc: WordListForFilterTypes, cur: AdsProps) => {
          if (cur.hasOwnProperty("topic") && cur?.topic) {
            acc[cur.topic] = acc?.hasOwnProperty(cur.topic)
              ? acc[cur.topic] + 1
              : 1;
          } else {
            console.log(acc);
            acc.None = acc?.None ? acc.None + 1 : 1;
          }
          return acc;
        },
        {}
      );
      return words;
    }, [data]);

  const copySelectedWord = () => {
    copy(selectedKeywords.join(", "));
    toast.success("Copied to Clipboard!");
  };

  const csvData = useMemo<AdsProps[]>(() => {
    return data.reduce<AdsProps[]>(
      (acc: AdsProps[], cur: AdsProps): AdsProps[] => {
        if (selectedAds.includes(cur.id)) {
          acc.push(cur);
        }
        return acc;
      },
      []
    );
  }, [data, selectedAds]);

  return (
    <>
      <section className="search-section hero-section pa-y4">
        <div className="container">
          {/* <!-- find interest search box --> */}
          <div className="find-interest-search-box mt-0">
            <SearchBox searchData={searchData} />
            {isLoading && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <RotatingLines
                  strokeColor="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="96"
                  visible={true}
                />
              </div>
            )}
            <RecentKeywords />
            <SelectedKeyword
              selectedKeywords={selectedKeywords}
              clearSelectedAds={clearSelectedAds}
            />

            <Menus
              {...{ toggleFilter, toggleProject }}
              total={filteredData.length}
              selectedTotal={selectedAds.length}
              copySelectedWord={copySelectedWord}
              csvData={csvData}
            />
            <ListTable
              data={filteredData}
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
          minAudience={minAudience}
          maxAudience={maxAudience}
          setMinAudience={setMinAudience}
          setMaxAudience={setMaxAudience}
          wordListForFilter={wordListForFilter}
          topicsListFilter={topicsListFilter}
          includeWords={includeWords}
          setIncludeWords={setIncludeWords}
          excludeTopics={excludeTopics}
          setExcludeTopics={setExcludeTopics}
        />

        <SaveToProjectModal
          isProjectOpen={isProjectOpen}
          setIsProjectOpen={setIsProjectOpen}
          selectedString={selectedKeywords.join(",")}
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
