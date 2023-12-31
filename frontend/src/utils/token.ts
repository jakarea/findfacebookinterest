const TOKEN_NAME = "JWT_TOKEN";

export const storeToken = (token: string): void => {
  localStorage.setItem(TOKEN_NAME, token);
};

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_NAME);
};

export const removeToken = (): void => {
  localStorage.removeItem(TOKEN_NAME);
};
