import Head from "next/head";
import Header from "../components/Header.js"
import Banner from "../components/Banner.js"

export default function Home() {
  return (
    <div className="bg-gray-100">
      <head>
        <title>
          Amazon 2
        </title>
      </head>
      {/* header */}
      <Header />
      <main className="relative">
        {/* banner */}
        <Banner />
      </main>
    </div>
  );
}
