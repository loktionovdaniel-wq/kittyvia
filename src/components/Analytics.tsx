'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { CAMPAIGN_STORAGE_KEY } from '@/lib/analytics';

const CONSENT_KEY = 'kittyvia_analytics_consent';

function GoogleAnalytics({ gaId }: { gaId?: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const sync = () => setEnabled(localStorage.getItem(CONSENT_KEY) === 'granted');
    sync();
    window.addEventListener('kittyvia-consent-change', sync);
    return () => window.removeEventListener('kittyvia-consent-change', sync);
  }, []);

  if (!gaId || !enabled) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="kittyvia-ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}

function CampaignCapture() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'pin_id'];
    const context = Object.fromEntries(
      keys.map((key) => [key, params.get(key)]).filter((entry): entry is [string, string] => Boolean(entry[1])),
    );
    if (Object.keys(context).length > 0) {
      sessionStorage.setItem(CAMPAIGN_STORAGE_KEY, JSON.stringify(context));
    }
  }, []);
  return null;
}

function ConsentBanner({ enabled }: { enabled: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(enabled && !localStorage.getItem(CONSENT_KEY));
  }, [enabled]);

  if (!visible) return null;

  const choose = (choice: 'granted' | 'denied') => {
    localStorage.setItem(CONSENT_KEY, choice);
    window.dispatchEvent(new Event('kittyvia-consent-change'));
    setVisible(false);
  };

  return (
    <aside className="consent" aria-label="Analytics preference">
      <p>
        We use privacy-conscious analytics to understand what visitors find useful. You can accept optional Google Analytics or continue without it.
      </p>
      <div className="consent__actions">
        <button type="button" className="button button--small button--ghost" onClick={() => choose('denied')}>
          Continue without
        </button>
        <button type="button" className="button button--small button--dark" onClick={() => choose('granted')}>
          Allow analytics
        </button>
      </div>
    </aside>
  );
}

export function AnalyticsProviders() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <GoogleAnalytics gaId={gaId} />
      <CampaignCapture />
      <ConsentBanner enabled={Boolean(gaId)} />
    </>
  );
}
