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