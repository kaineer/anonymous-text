//
export const configureLocalStorage = <T, >(key: string, defaultValue: T) => {
  return {
    load(): T {
      const item = localStorage.getItem(key);
      if (typeof item === "string") {
        try {
          const data: T = JSON.parse(item);
          return data;
        } catch (e) {
        }
      }

      return defaultValue;
    },
    store(value: T): void {
      localStorage.setItem(key, JSON.stringify(value || defaultValue));
    }
  }
}
