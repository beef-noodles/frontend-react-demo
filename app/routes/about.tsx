import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "About Page" },
    { name: "description", content: "Learn more about us on this page." },
  ];
}

export default function About() {
  return <h2 className="text-center font-bold" >About</h2>;
}
