const get = (name: string): string | null => {
  return localStorage.getItem(name);
};

const set = (name: string, value: string): void => {
  localStorage.setItem(name, value);
};

const clear = (): void => {
  localStorage.clear();
};
const remove = (name: string): void => {
  localStorage.removeItem(name);
};

const session = {
  set,
  get,
  clear,
};

export default session;
