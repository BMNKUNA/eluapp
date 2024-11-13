"use client"; // Add this directive at the top

import { useEffect } from 'react';

export default function TawkToChat() {
  useEffect(() => {
    // Define Tawk_API as an empty object without referencing itself
    const Tawk_API: any = {};
    const Tawk_LoadStart = new Date();

    (function () {
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/673486682480f5b4f59d7bf3/1iciiq2nf';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return null;
}