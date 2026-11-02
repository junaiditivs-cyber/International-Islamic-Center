import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { sendWebhook } from '../config/webhook';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function WhatsAppButton({ 
  phoneNumber = "+923295631797",
  defaultMessage = "Salam! I want to know about your classes and other details." 
}: WhatsAppButtonProps) {
  const [utmString, setUtmString] = useState('');
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Hide the tooltip automatically after 6 seconds
    const timer = setTimeout(() => setShowTooltip(false), 6000);
    
    // Collect UTM parameters on mount
    const params = new URLSearchParams(window.location.search);
    const utms: string[] = [];
    
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
      const value = params.get(param);
      if (value) {
        utms.push(`${param}=${value}`);
      }
    });

    if (utms.length > 0) {
      setUtmString(`\n\n[Tracking Data: ${utms.join(', ')}]`);
    }
    
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    const fullMessage = `${defaultMessage}${utmString}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    
    // Send UTM parameters to webhook tracking
    const params = new URLSearchParams(window.location.search);
    const utms: Record<string, string | null> = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
      utms[param] = params.get(param);
    });

    sendWebhook({
      event: 'whatsapp_click',
      utms,
    }).catch(err => console.error('Webhook payload failed', err));
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-4 pointer-events-none">
      
        {showTooltip && (
          <div
            className="bg-white text-slate-800 px-4 py-3 rounded-2xl shadow-xl shadow-brand-900/10 border border-slate-100 flex items-center gap-3 relative pointer-events-auto"
          >
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -left-2 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full p-1 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="text-sm">
              <span className="font-semibold block text-brand-900">Have questions?</span>
              <span className="text-slate-500 text-xs">Chat with our counselors</span>
            </div>
            {/* Chat bubble tail */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-slate-100 transform rotate-45" />
          </div>
        )}

      <button
        onClick={handleClick}
        className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg shadow-emerald-500/30 transition-all pointer-events-auto flex items-center justify-center group relative cursor-pointer"
        aria-label="Contact us on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        
        {/* WhatsApp SVG Icon */}
        <svg 
          className="w-7 h-7 fill-current" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.697c1.004.577 1.765.818 2.806.818 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.77-5.767-5.77zm3.377 8.272c-.14.394-.816.744-1.123.774-.298.029-.687.141-2.222-.497-1.782-.74-2.906-2.557-2.996-2.676-.089-.118-.724-.963-.724-1.836 0-.872.457-1.301.62-1.479.163-.178.356-.223.475-.223.119 0 .237.001.341.007.109.006.255-.041.399.305.15.359.508 1.238.552 1.328.045.089.075.193.015.312-.059.119-.089.193-.178.297-.089.104-.188.232-.268.312-.089.089-.182.186-.078.365.104.178.463.763.994 1.236.684.609 1.26.797 1.439.886.178.089.282.074.386-.045.104-.118.445-.519.564-.698.119-.178.237-.149.399-.089.163.059 1.036.489 1.214.578.178.089.297.133.341.208.045.074.045.43-.095.824z"/>
        </svg>
      </button>
    </div>
  );
}
