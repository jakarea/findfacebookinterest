import { baseUrl } from "@/utils";

import axios from "axios";
import { useEffect, useState } from "react";
import { KeywordProps } from "./SelectedKeyword";

const RecentKeywords = () => {
  const [keywords, setKeywords] = useState<KeywordProps[]>([]);
  useEffect(() => {
    const getKeyword = async () => {
      try {
        const data = await axios.get(`${baseUrl}/key`);
        setKeywords(data.data);
      } catch (error) {
        console.error("Error while fetching data");
      }
    };
    getKeyword();
  }, []);
  return (
    <>
      <div className="recent-keywird-box">
        {keywords.map((key: KeywordProps) => (
          <a href="#" key={key.id}>
            {key.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default RecentKeywords;
