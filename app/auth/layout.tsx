import { Outlet } from "react-router";


export default function layout() {
  return <>
    <p className="text-center font-bold font-stretch-200%" >
      Auth layout
    </p>
    <Outlet />
  </>;
}
