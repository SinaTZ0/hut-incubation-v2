import { BuilderPhilosophy } from "./components/sections/BuilderPhilosophy";
import { FounderPath } from "./components/sections/FounderPath";
import { LabShowcase } from "./components/sections/LabShowcase";
import { LaunchHero } from "./components/sections/LaunchHero";
import { MentorMatch } from "./components/sections/MentorMatch";
import { ProgramTracks } from "./components/sections/ProgramTracks";
import { ResourceBridge } from "./components/sections/ResourceBridge";
import { SuccessStories } from "./components/sections/SuccessStories";
import { NewsSection } from "./components/sections/NewsSection";
import { EventsSection } from "./components/sections/EventsSection";
import { Faq } from "./components/sections/Faq";
import { SiteFooter } from "./components/sections/SiteFooter";
import { SiteHeader } from "./components/sections/SiteHeader";
import { StationedTeamsSection } from "./components/sections/StationedTeamsSection";
import { TrackRecord } from "./components/sections/TrackRecord";
import styles from "./App.module.css";

function App() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = useCallback((nextPath: string) => {
    if (window.location.pathname !== nextPath) window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  if (path === "/admin" || path === "/admin/") {
    return <AdminPage onNavigateHome={() => navigate("/")} />;
  }

  return (
    <div className={styles.app}>
      <a className={styles.skipLink} href="#main">
        پرش به محتوای اصلی
      </a>
      <SiteHeader onNavigateAdmin={() => navigate("/admin")} />
      <main id="main">
        <LaunchHero />
        <EventsSection />
        <NewsSection />
        <BuilderPhilosophy />
        <ProgramTracks />
        <FounderPath />
        <LabShowcase />
        <StationedTeamsSection />
        <MentorMatch />
        <TrackRecord />
        <SuccessStories />
        <ResourceBridge />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
import { useCallback, useEffect, useState } from "react";
import { AdminPage } from "./components/admin/AdminPage";
