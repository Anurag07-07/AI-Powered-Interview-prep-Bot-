import { ReactNode } from "react";

export default function Page({children}:{children:ReactNode}) {
  return <div className=" auth-layout">
    {children}
  </div>
}