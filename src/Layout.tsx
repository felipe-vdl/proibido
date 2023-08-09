import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RegularLayout({ children }: {children: any}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div id="notifications" />
      <Navbar />
      <main id="main-container" className="flex flex-1 bg-dark-900 bg-gradient-to-br from-red-500/5 text-dark-50">
        {children}
      </main>
      <Footer />
    </div>
  );
}
