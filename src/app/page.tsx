import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next js",
  description: "Next js with typescript",
  openGraph: {
    title: "Learning Next js",
    description: "Next js with typescript",
  }
}

export default function Home() {
  return (
    <div>
      <h1>
        Home Page
      </h1>
    </div>
  );
};