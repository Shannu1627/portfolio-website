import { createFileRoute } from "@tanstack/react-router";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Journey } from "@/components/portfolio/Journey";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Madem Shanmukha Sai — Frontend Developer & React.js Engineer" },
      { name: "description", content: "Portfolio of Madem Shanmukha Sai — B.Tech CSE student, frontend developer specializing in React.js, building beautiful, modern web experiences." },
      { property: "og:title", content: "Madem Shanmukha Sai — Frontend Developer" },
      { property: "og:description", content: "Frontend Developer | React.js Enthusiast | Future Software Engineer." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
