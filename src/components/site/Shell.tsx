import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-clip">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
