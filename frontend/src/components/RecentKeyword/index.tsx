"use client";
import axiosInstance from "@/utils/axiosInstance";
import { useEffect, useState } from "react";

export interface KeywordProps {
  id: string | number;
  name: string;
}
const RecentKeywords = () => {
  const [keywords, setKeywords] = useState<KeywordProps[]>([]);
  useEffect(() => {
    axiosInstance.get("/key").then((res) => {
      setKeywords(res.data);
    });
  }, []);
  if (keywords.length <= 0) return null;
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
