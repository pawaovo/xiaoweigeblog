export default (req, res) => {
    // 获取所有当前设置的响应头
    const headers = res.getHeaders();
  
    // 遍历响应头，修正非 ASCII 字符
    for (const key in headers) {
      const value = headers[key];
      if (typeof value === "string") {
        // 将非 ASCII 字符进行百分比编码
        const encodedValue = value.replace(/[^\x00-\x7F]/g, (char) =>
          `%${char.charCodeAt(0).toString(16).toUpperCase()}`
        );
  
        // 重置响应头
        res.setHeader(key, encodedValue);
      }
    }
  
    // 返回响应
    res.status(200).send("Headers processed successfully.");
  };
  