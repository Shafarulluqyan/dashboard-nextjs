import Content from "@/components/content";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex">
      {/* <Navbar /> */}

      <Sidebar />
      <Content />
    </main>
  );
}
