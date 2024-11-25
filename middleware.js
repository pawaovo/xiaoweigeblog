import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();

  // 获取响应头并替换非 ASCII 字符
  for (const [key, value] of Object.entries(res.headers)) {
    if (typeof value === "string") {
      const encodedValue = value.replace(/[^\x00-\x7F]/g, (char) =>
        `%${char.charCodeAt(0).toString(16).toUpperCase()}`
      );
      res.headers.set(key, encodedValue);
    }
  }

  return res;
}
