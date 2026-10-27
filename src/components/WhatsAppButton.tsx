import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function WhatsAppButton({ 
  phoneNumber = "+923431905776", // Replace with your actual WhatsApp number
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
    // Strip non-numeric characters from the phone number for the wa.me link
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

    try {
      fetch('https://n8n.srv756914.hstgr.cloud/webhook-test/316db688-9adc-4aa8-9aff-48fbbec36d2b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: 'whatsapp_click',
          utms,
          timestamp: new Date().toISOString()
        }),
      }).catch(err => console.error('Webhook payload failed', err));
    } catch (e) {
      // Ignore
    }
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-4 pointer-events-none">
      
        {showTooltip && (
          <div
            className="pointer-events-auto bg-white text-slate-800 px-4 py-3 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-3 mr-2 relative"
          >
            <p className="text-sm font-medium">Have questions? Chat with us!</p>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Close tooltip"
            >
               <X className="w-4 h-4" />
            </button>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-slate-100 rotate-45 transform" />
          </div>
        )}

      <button
        onClick={handleClick}
        className="pointer-events-auto flex items-center justify-center w-14 h-14 hover:scale-110 active:scale-95 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 hover:bg-[#1DA851] transition-colors focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          width="32" 
          height="32"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </button>
    </div>
  );
}
