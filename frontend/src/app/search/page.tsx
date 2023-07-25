import AttentionMarketeers from "@/components/AttentionMarketeers";
import GetStart from "@/components/Search/GetStart";
import SearchArea from "@/components/Search/SearchArea";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <main className="">
      <SearchArea />

      <AttentionMarketeers />

      <GetStart />

      {/* <!-- modal script --> */}
    </main>
  );
}
