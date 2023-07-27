"use client";
import session from "@/utils/session";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

interface FormInitialType {
  key: string;
  lang: string;
}
interface SearchBoxTypes {
  searchData: (key: string, lang: string) => void;
}
const SearchBox: React.FC<SearchBoxTypes> = (props) => {
  const { searchData } = props;
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormInitialType>();
  const router = useRouter();

  const submitHandler = useCallback(
    (values: FormInitialType) => {
      searchData(values.key, values.lang);
    },
    [searchData]
  );
  const params = useSearchParams();
  useEffect(() => {
    const queryKey: string | null = session.get("key");
    const lang: string | null = session.get("lang");
    if (queryKey) {
      setValue("key", queryKey);
    }
    if (lang) {
      setValue("lang", lang);
    }
    if (queryKey) {
      submitHandler({ key: queryKey, lang: lang || "en" });
      session.clear();
    }
  }, [params, setValue, submitHandler, router]);

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="d-flex">
          <div className="form-group">
            <SearchIcon />
            <input
              type="text"
              placeholder="Enter Keywords"
              {...register("key", { required: "This field is required!" })}
            />
            {errors?.key && (
              <small className="" style={{ color: "red" }}>
                {errors?.key?.message}
              </small>
            )}
          </div>
          <div className="form-bttns">
            <Controller
              name="lang"
              control={control}
              defaultValue="en"
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <select {...field}>
                  <option value="en">English (US)</option>
                  <option value="bn">Bangla (BN)</option>
                </select>
              )}
            />
            {errors?.lang && (
              <small className="" style={{ color: "red" }}>
                {errors?.lang?.message}
              </small>
            )}
            <button type="submit" className="btn common-bttn">
              Explore
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

const SearchIcon = () => {
  return (
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
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default SearchBox;
