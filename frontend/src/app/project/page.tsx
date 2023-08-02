"use client";
import AttentionMarketeers from "@/components/AttentionMarketeers";
import ProjectTable from "@/components/Project/ProjectTable";
import { useAuthContext } from "@/context/authContext";
import { getToken } from "@/utils/token";
import { useRouter } from "next/navigation";

export default function Page() {
  const { state } = useAuthContext();
  const router = useRouter();
  const token = getToken();
  if (!token) {
    router.push("/");
    return null;
  }
  if (token && !state.isAuthenticated) {
    return <h2>Loading....</h2>;
  }

  if (!state.isAuthenticated) {
    router.push("/");
    return null;
  }

  return (
    <main className="">
      <ProjectTable />
      <AttentionMarketeers />
    </main>
  );
}
