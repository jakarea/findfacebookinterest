"use client";
const COOKIE_NAME = "COOKIE";
import Cookies from "js-cookie";
import { v4 } from "uuid";

const get = () => {
  const cookieData = Cookies.get(COOKIE_NAME);
  if (cookieData) return cookieData;
  const newCookie = v4();
  Cookies.set(COOKIE_NAME, newCookie, { secure: true });
  return newCookie;
};

const cookie = {
  get,
};

export default cookie;
