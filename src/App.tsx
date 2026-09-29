/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { defaultProfile } from './data/portfolioData';
import { ProfileInfo } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Hackathons } from './components/Hackathons';
import { LearningJourney } from './components/LearningJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomizeModal } from './components/CustomizeModal';

export default function App() {
  const [profile, setProfile] = useState<ProfileInfo>(() => {
    try {
      const saved = localStorage.getItem('aspiring_ai_portfolio_profile');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback on error
    }
    return defaultProfile;
  });

  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);

  const handleSaveProfile = (updated: ProfileInfo) => {
    setProfile(updated);
    try {
      localStorage.setItem('aspiring_ai_portfolio_profile', JSON.stringify(updated));
    } catch {
      // Ignore storage errors
    }
  };

  // Sync document title if profile name changes
  useEffect(() => {
    document.title = `${profile.name} – Aspiring AI Engineer Portfolio`;
  }, [profile.name]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#1E293B]">
      {/* 1. Navigation Bar */}
      <Navbar
        profile={profile}
        onOpenCustomize={() => setIsCustomizeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero profile={profile} />

        {/* 3. About Me */}
        <About profile={profile} />

        {/* 4. Skills */}
        <Skills />

        {/* 5. Projects with Interactive Simulators */}
        <Projects githubBaseUrl={profile.githubUrl} />

        {/* 6. Hackathons & Idea-thons */}
        <Hackathons />

        {/* 7. Current Learning Journey */}
        <LearningJourney />

        {/* 8. Contact Section */}
        <Contact profile={profile} />
      </main>

      {/* 9. Footer */}
      <Footer profile={profile} />

      {/* Personalization Drawer / Modal */}
      <CustomizeModal
        isOpen={isCustomizeOpen}
        onClose={() => setIsCustomizeOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
      />
    </div>
  );
}
