// headers.js
export default (req, res) => {
    const headers = res.headers();
    for (const key in headers) {
      const value = headers[key];
      if (typeof value === 'string') {
        headers[key] = value.replace(/[^\x00-\x7F]/g, (char) => {
          return `%${char.charCodeAt(0).toString(16).toUpperCase()}`;
        });
      }
    }
    return res;
  };