export const replacePathVariables = (url: string, params: string[]): string => {
    let paramIndex = 0;
  
    return url.replace(/{[^}]+}/g, (match) => {
      if (paramIndex < params.length) {
        const value = params[paramIndex];
        paramIndex++;
        return encodeURIComponent(value);
      }
      return match;
    });
  }

export const debounce = <T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void => {
    let timerId: ReturnType<typeof setTimeout>; // Timer ID

    return (...args: Parameters<T>) => {
        clearTimeout(timerId); // Clear any existing timer
        timerId = setTimeout(() => func(...args), delay); // Set a new timer
    };
};
