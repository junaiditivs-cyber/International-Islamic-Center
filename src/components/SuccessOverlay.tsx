import { CheckCircle2, Sparkles } from "lucide-react";

interface SuccessOverlayProps {
  type?: "trial" | "contact";
}

export default function SuccessOverlay({ type = "trial" }: SuccessOverlayProps) {
  const title =
    type === "contact"
      ? "Contact Request Submitted"
      : "Registration Submitted";

  const message =
    type === "contact"
      ? "Alhamdulillah! We received your contact request. Our team will contact you shortly."
      : "Alhamdulillah! We received your registration request. Our team will contact you shortly for your free Quran trial class.";

  return (
    <div className="fixed inset-0 z-[999999] bg-gradient-to-b from-black via-zinc-950 to-black text-white flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.12),transparent_35%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-3xl w-full text-center rounded-[40px] border border-yellow-400/20 bg-white/[0.05] backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.7)] p-10 md:p-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/25 text-yellow-300 text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          INTERNATIONAL ISLAMIC CENTER
        </div>

        <div className="mx-auto w-28 h-28 rounded-full bg-yellow-400 text-black flex items-center justify-center shadow-[0_0_60px_rgba(250,204,21,0.45)] mb-8">
          <CheckCircle2 className="w-16 h-16" />
        </div>

        <h1 className="text-4xl md:text-6xl font-black leading-tight">
          Alhamdulillah!
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-black text-yellow-400">
          {title}
        </h2>

        <p className="mt-6 text-zinc-300 leading-relaxed max-w-2xl mx-auto">
          {message}
        </p>

        <p className="mt-6 text-zinc-500 text-sm">
          This message will close automatically in 4 seconds.
        </p>
      </div>
    </div>
  );
}