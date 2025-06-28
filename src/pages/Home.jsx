import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { useState } from "react";
import { Footer } from "../components/Footer";

export const Home = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        {/* Background Effects */}
        <StarBackground isDarkMode={isDarkMode}/>
        {/* Navbar */}
        <Navbar/>
        {/* Main Content */}
        <main>
           <HeroSection/>
           <AboutSection/>
           <SkillsSection/>
           <ProjectsSection/>
           <ContactSection/>
        </main>

        {/* Footer */}
        <Footer />
        
    </div>
};