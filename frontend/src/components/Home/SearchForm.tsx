"use client";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

interface FormInitialType {
  key: string;
  lang: string;
}

const HomeSearchForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInitialType>();

  const router = useRouter();

  const submitHandler = (values: FormInitialType) => {
    const query = `key=${values.key}&lang=${values.lang}`;
    router.push(`/search?${query}`);
  };

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

export default HomeSearchForm;