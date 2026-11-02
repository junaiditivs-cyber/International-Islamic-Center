import { useState, lazy, Suspense } from "react";
import {
  Sparkles,
  Globe,
  Clock,
  ShieldCheck,
  GraduationCap,
  CheckCircle2,
  Star,
  ChevronDown,
  AlertCircle,
} from "lucide-react";
import PhoneInput from "react-phone-input-2";
// @ts-ignore: no type declarations for CSS import
import "react-phone-input-2/lib/style.css";
import { sendWebhook } from "../config/webhook";

const SuccessOverlay = lazy(() => import("../components/SuccessOverlay"));

export default function Trial() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("92");
  const [email, setEmail] = useState("");
  const [preferredCallTime, setPreferredCallTime] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
    preferredCallTime?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    const newErrors: {
      name?: string;
      phone?: string;
      email?: string;
      preferredCallTime?: string;
    } = {};

    if (!name.trim()) {
      newErrors.name = "Student Name / Parent Name is required";
    }

    // PhoneInput returns strings like "92" (just country code) or "923001234567"
    const cleanedPhone = phone ? phone.replace(/\D/g, "") : "";
    if (!cleanedPhone || cleanedPhone.length < 7) {
      newErrors.phone = "A valid Phone / WhatsApp number is required";
    }

    if (email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        newErrors.email = "Please enter a valid email address (e.g. name@example.com)";
      }
    }

    if (!preferredCallTime) {
      newErrors.preferredCallTime = "Please select your preferred call time";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Collect UTM parameters if available
    const utms: Record<string, string | null> = {};
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach(
        (param) => {
          utms[param] = params.get(param);
        }
      );
    }

    const formData = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      preferredCallTime,
      message: message.trim(),
      utms,
      timestamp: new Date().toISOString(),
    };

    console.log("Trial Form Data:", formData);

    // Send data to production n8n webhook
    await sendWebhook({
      event: "trial_registration",
      data: formData,
      utms,
      timestamp: formData.timestamp,
    });

    try {
      await fetch("https://formsubmit.co/ajax/mustafauetnet@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Free Quran Trial - INTERNATIONAL ISLAMIC CENTER",
          _template: "table",
          "Student / Parent Name": formData.name,
          "Phone / WhatsApp": formData.phone,
          Email: formData.email || "Not provided",
          "Preferred Call Time": formData.preferredCallTime,
          "Additional Message": formData.message || "None",
          ...utms,
        }),
      });
    } catch (err) {
      console.error("Trial email notification error:", err);
    }

    setIsSubmitting(false);
    setShowSuccess(true);

    // Reset form fields
    setName("");
    setPhone("92");
    setEmail("");
    setPreferredCallTime("");
    setMessage("");
    setErrors({});

    setTimeout(() => {
      setShowSuccess(false);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }, 4000);
  };

  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.12),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="pointer-events-none absolute top-[-160px] left-[-120px] w-[500px] h-[500px] bg-yellow-400/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute bottom-[-160px] right-[-120px] w-[500px] h-[500px] bg-yellow-400/10 blur-[150px] rounded-full" />

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-20 sm:pb-24">
        {/* Layout container:
            Mobile (< lg): Registration form appears FIRST (order-1), then info content (order-2).
            Desktop (lg+): Two-column layout with info on left (lg:col-span-5, lg:order-1) and form on right (lg:col-span-7, lg:order-2).
        */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* 1. Registration Form Container */}
          <div className="w-full order-1 lg:order-2 lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/10 bg-white/[0.055] backdrop-blur-2xl shadow-[0_0_90px_rgba(0,0,0,0.75)] p-6 sm:p-8 md:p-10"
            >
              <div className="pointer-events-none absolute -top-32 -left-32 w-72 h-72 bg-yellow-400/10 blur-[120px] rounded-full" />
              <div className="pointer-events-none absolute top-24 -right-24 w-72 h-72 bg-yellow-400/20 blur-[130px] rounded-full" />
              <div className="pointer-events-none absolute bottom-10 -right-16 w-52 h-52 bg-yellow-300/10 blur-[100px] rounded-full" />

              <div className="relative z-10">
                {/* Form Heading */}
                <div className="mb-7 sm:mb-8">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 text-xs sm:text-sm font-medium mb-4">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Global Free Trial Registration</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                    Registration <span className="text-yellow-400">Form</span>
                  </h2>

                  <p className="mt-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
                    Book your free 3-day Quran trial classes. No credit card or payment required.
                  </p>
                </div>

                {/* Form Fields - in exact required order */}
                <div className="space-y-5">
                  {/* Field 1: Student Name / Parent Name */}
                  <div>
                    <label
                      htmlFor="student-parent-name"
                      className="block text-sm font-semibold text-zinc-200 mb-2"
                    >
                      Student Name / Parent Name{" "}
                      <span className="text-yellow-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="student-parent-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Enter Student or Parent Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) {
                          setErrors((prev) => ({ ...prev, name: undefined }));
                        }
                      }}
                      className={`w-full h-[56px] bg-white/5 border rounded-2xl px-5 text-white placeholder:text-zinc-400 text-base outline-none transition-all duration-200 ${
                        errors.name
                          ? "border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-400/50"
                          : "border-white/10 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/40"
                      }`}
                    />
                    {errors.name && (
                      <p
                        className="mt-1.5 text-xs sm:text-sm text-red-400 flex items-center gap-1.5"
                        role="alert"
                      >
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 2: Phone / WhatsApp Number */}
                  <div>
                    <label
                      htmlFor="trial-phone"
                      className="block text-sm font-semibold text-zinc-200 mb-2"
                    >
                      Phone / WhatsApp Number{" "}
                      <span className="text-yellow-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <div
                      className={`relative min-h-[56px] rounded-2xl transition-all duration-200 ${
                        errors.phone ? "ring-1 ring-red-400/60" : ""
                      }`}
                    >
                      <PhoneInput
                        country="pk"
                        value={phone}
                        onChange={(value) => {
                          setPhone(value);
                          if (errors.phone) {
                            setErrors((prev) => ({ ...prev, phone: undefined }));
                          }
                        }}
                        enableSearch
                        countryCodeEditable={false}
                        inputProps={{
                          id: "trial-phone",
                          name: "phone",
                          "aria-label": "Phone / WhatsApp Number",
                          required: true,
                        }}
                        placeholder="Phone / WhatsApp Number"
                        containerClass="!w-full"
                        inputClass={`!w-full !h-[56px] !bg-white/5 !border ${
                          errors.phone ? "!border-red-500" : "!border-white/10"
                        } !rounded-2xl !pl-[64px] !pr-5 !text-white !text-base !outline-none focus:!border-yellow-400 focus:!ring-1 focus:!ring-yellow-400/40`}
                        buttonClass="!bg-white/5 !border !border-white/10 !rounded-l-2xl !w-[56px] hover:!bg-white/10"
                        dropdownClass="!bg-white !text-black !rounded-xl !shadow-2xl"
                        searchClass="!text-black"
                      />
                    </div>
                    {errors.phone ? (
                      <p
                        className="mt-1.5 text-xs sm:text-sm text-red-400 flex items-center gap-1.5"
                        role="alert"
                      >
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    ) : (
                      <p className="mt-1.5 text-xs text-zinc-400">
                        Supports all countries. Click the flag to select your country code.
                      </p>
                    )}
                  </div>

                  {/* Field 3: Parent Email / Student Email */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="trial-email"
                        className="block text-sm font-semibold text-zinc-200"
                      >
                        Parent Email / Student Email
                      </label>
                      <span className="text-xs text-zinc-400">Optional</span>
                    </div>
                    <input
                      id="trial-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Enter Parent or Student Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) {
                          setErrors((prev) => ({ ...prev, email: undefined }));
                        }
                      }}
                      className={`w-full h-[56px] bg-white/5 border rounded-2xl px-5 text-white placeholder:text-zinc-400 text-base outline-none transition-all duration-200 ${
                        errors.email
                          ? "border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-400/50"
                          : "border-white/10 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/40"
                      }`}
                    />
                    {errors.email && (
                      <p
                        className="mt-1.5 text-xs sm:text-sm text-red-400 flex items-center gap-1.5"
                        role="alert"
                      >
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 4: Preferred Call Time */}
                  <div>
                    <label
                      htmlFor="preferred-call-time"
                      className="block text-sm font-semibold text-zinc-200 mb-2"
                    >
                      Preferred Call Time{" "}
                      <span className="text-yellow-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <div className="relative">
                      <select
                        id="preferred-call-time"
                        name="preferredCallTime"
                        required
                        aria-label="Select Preferred Call Time"
                        value={preferredCallTime}
                        onChange={(e) => {
                          setPreferredCallTime(e.target.value);
                          if (errors.preferredCallTime) {
                            setErrors((prev) => ({
                              ...prev,
                              preferredCallTime: undefined,
                            }));
                          }
                        }}
                        className={`w-full h-[56px] appearance-none bg-white/5 border rounded-2xl pl-5 pr-12 text-base outline-none transition-all duration-200 cursor-pointer ${
                          !preferredCallTime ? "text-zinc-400" : "text-white"
                        } ${
                          errors.preferredCallTime
                            ? "border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-400/50"
                            : "border-white/10 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/40"
                        }`}
                      >
                        <option value="" disabled className="bg-zinc-900 text-zinc-400">
                          Select Preferred Call Time
                        </option>
                        <option value="Morning" className="bg-zinc-900 text-white py-2">
                          Morning
                        </option>
                        <option value="Evening" className="bg-zinc-900 text-white py-2">
                          Evening
                        </option>
                        <option value="Night" className="bg-zinc-900 text-white py-2">
                          Night
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5 text-yellow-400">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                    {errors.preferredCallTime && (
                      <p
                        className="mt-1.5 text-xs sm:text-sm text-red-400 flex items-center gap-1.5"
                        role="alert"
                      >
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.preferredCallTime}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 5: Additional Message */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="trial-message"
                        className="block text-sm font-semibold text-zinc-200"
                      >
                        Additional Message
                      </label>
                      <span className="text-xs text-zinc-400">Optional</span>
                    </div>
                    <textarea
                      id="trial-message"
                      name="trialMessage"
                      rows={4}
                      placeholder="Any questions, special learning requests, or preferred days..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-400 text-base resize-none outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/40 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-7 py-4 sm:py-5 rounded-2xl bg-yellow-400 text-black font-black text-lg transition-transform duration-200 hover:bg-yellow-300 hover:scale-[1.01] active:scale-[0.99] shadow-[0_0_40px_rgba(250,204,21,0.35)] disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <span>Submit Free Trial Registration</span>
                  )}
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-400 text-center">
                  <ShieldCheck className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span>100% Free 3-Day Trial • No Payment or Credit Card Needed</span>
                </div>
              </div>
            </form>
          </div>

          {/* 2-7. Informational Content Container:
              On desktop: Left column (lg:order-1, lg:col-span-5) with sticky positioning.
              On mobile: Appears directly AFTER the Registration Form (order-2).
          */}
          <div className="w-full order-2 lg:order-1 lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              {/* Introduction */}
              <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/25 text-yellow-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
                <Sparkles className="w-4 h-4" />
                <span>International Quran ISLAMIC CENTER</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                Start Your
                <span className="block text-yellow-400">
                  Free Quran Trial
                </span>
              </h1>

              <p className="text-zinc-300 mt-5 sm:mt-6 leading-relaxed text-base sm:text-lg max-w-xl">
                Our online Quran classes make learning easy, comfortable and
                accessible worldwide. We provide flexible timings so your child
                can learn Quran from the comfort and safety of home.
              </p>

              {/* Feature Cards: Global Students, Flexible Timing, Safe Learning, Expert Teachers */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-10">
                {[
                  {
                    icon: Globe,
                    title: "Global Students",
                    desc: "Available for all time zones",
                  },
                  {
                    icon: Clock,
                    title: "Flexible Timing",
                    desc: "Schedule as per your routine",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Safe Learning",
                    desc: "Learn from comfort of home",
                  },
                  {
                    icon: GraduationCap,
                    title: "Expert Teachers",
                    desc: "Male & female qualified tutors",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-colors duration-200"
                  >
                    <item.icon className="text-yellow-400 w-8 h-8 mb-4" />
                    <h2 className="font-black text-lg">{item.title}</h2>
                    <p className="text-zinc-300 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Why Parents Trust Us */}
              <div className="mt-8 sm:mt-9 rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-6">
                <h2 className="text-yellow-400 font-black flex items-center gap-2 text-lg">
                  <Star size={18} />
                  <span>Why Parents Trust Us</span>
                </h2>

                <ul className="mt-5 space-y-3 text-zinc-300 text-sm">
                  {[
                    "One-on-One personalized attention",
                    "Focus on proper Tajweed & understanding",
                    "Secure and peaceful Islamic environment",
                    "Free trial before any payment",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal Overlay */}
      {showSuccess && (
        <Suspense fallback={null}>
          <SuccessOverlay type="trial" />
        </Suspense>
      )}
    </main>
  );
}
