import { NavLink } from "react-router";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Concerts" },
    { name: "description", content: "Concerts list" },
  ];
}

export default function Home() {
  return <>
    <p className="text-center" >Concerts layout</p>
    <ul>
      <li><NavLink to="xi'an">xi'an</NavLink></li>
      <li><NavLink to="lanzhou">lanzhou</NavLink></li>
      <li><NavLink to="shanghai">shanghai</NavLink></li>
    </ul>

    <ul><li>
      <NavLink to="trending" end>
        Trending Concerts
      </NavLink>
    </li></ul>
  </>;
}
