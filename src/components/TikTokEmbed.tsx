"use client";

import { useEffect } from 'react';

export default function TikTokEmbed() {
  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-[605px] min-w-[325px] mx-auto">
      <blockquote 
        className="tiktok-embed" 
        cite="https://www.tiktok.com/@tipster.arena1/video/7533779172859104534" 
        data-video-id="7533779172859104534" 
        style={{ maxWidth: '605px', minWidth: '325px' }}
      >
        <section>
          <a 
            target="_blank" 
            title="@tipster.arena1" 
            href="https://www.tiktok.com/@tipster.arena1?refer=embed"
            className="text-white/70 hover:text-white transition-colors"
          >
            @tipster.arena1
          </a>
          <a 
            title="tipsterarena" 
            target="_blank" 
            href="https://www.tiktok.com/tag/tipsterarena?refer=embed"
            className="text-white/70 hover:text-white transition-colors"
          >
            #tipsterarena
          </a>
          <a 
            title="sports" 
            target="_blank" 
            href="https://www.tiktok.com/tag/sports?refer=embed"
            className="text-white/70 hover:text-white transition-colors"
          >
            #sports
          </a>
          <a 
            title="sportstiktok" 
            target="_blank" 
            href="https://www.tiktok.com/tag/sportstiktok?refer=embed"
            className="text-white/70 hover:text-white transition-colors"
          >
            #sportstiktok
          </a>
          <a 
            target="_blank" 
            title="♬ original sound - Tipster Arena" 
            href="https://www.tiktok.com/music/original-sound-7533779156635486998?refer=embed"
            className="text-white/70 hover:text-white transition-colors"
          >
            ♬ original sound - Tipster Arena
          </a>
        </section>
      </blockquote>
    </div>
  );
}
