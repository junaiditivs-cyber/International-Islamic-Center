import { useEffect, useState } from "react";
import {
  Star,
  Quote,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  MessageSquare,
  CheckCircle2,
  Send,
  Globe2,
  Users,
  HeartHandshake,
} from "lucide-react";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("INTERNATIONALISLAMIC CENTERReviews");

    if (saved) {
      try {
        setReviews(JSON.parse(saved));
        return;
      } catch {
        localStorage.removeItem("INTERNATIONALISLAMIC CENTERReviews");
      }
    }

    const defaultReviews: Review[] = [
      {
        id: 1,
        name: "Ahmed Khan",
        rating: 5,
        comment:
          "My son has improved tremendously in Tajweed. Teachers are extremely professional and supportive throughout the journey.",
        date: "2 weeks ago",
      },
      {
        id: 2,
        name: "Fatima Ali",
        rating: 5,
        comment:
          "Flexible timings and highly qualified female teachers. The learning environment feels very professional.",
        date: "1 month ago",
      },
      {
        id: 3,
        name: "Mohammed Hassan",
        rating: 5,
        comment:
          "Completed my Hifz journey with excellent guidance and continuous progress tracking. Highly recommended.",
        date: "3 months ago",
      },
    ];

    setReviews(defaultReviews);
    localStorage.setItem("INTERNATIONALISLAMIC CENTERReviews", JSON.stringify(defaultReviews));
  }, []);

  useEffect(() => {
    if (reviews.length > 0) {
      localStorage.setItem("INTERNATIONALISLAMIC CENTERReviews", JSON.stringify(reviews));
    }
  }, [reviews]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.comment.trim()) {
      alert("Please enter your name and review.");
      return;
    }

    const newReview: Review = {
      id: Date.now(),
      name: formData.name,
      rating: formData.rating,
      comment: formData.comment,
      date: "Just now",
    };

    setReviews([newReview, ...reviews]);

    setFormData({
      name: "",
      rating: 5,
      comment: "",
    });

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const Stars = ({ rating }: { rating: number }) => (
    <div className="flex gap-1.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 transition-all ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-zinc-700"
          }`}
        />
      ))}
    </div>
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.12),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[150px]" />

      {/* HERO */}
      <section className="relative z-10 px-6 pt-28 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-2 text-sm text-yellow-300">
                 
                Trusted By Students Worldwide
              </div>

              <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
                Student
                <span className="block text-yellow-400">Reviews</span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400 mx-auto lg:mx-0">
                Real experiences from students and parents around the world
                learning Quran online with our professional teachers.
              </p>

              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
                {["Tajweed", "Hifz Quran", "Kids Classes", "Female Tutors"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-zinc-300"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[36px] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 to-white/[0.04] p-7 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.7)]">
                <div className="flex items-center gap-5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-400 text-black shadow-[0_0_45px_rgba(250,204,21,0.4)]">
                    <Star className="h-10 w-10 fill-black" />
                  </div>

                  <div>
                    <p className="text-5xl font-black text-yellow-400">4.9</p>
                    <p className="text-zinc-400">Average Parent Rating</p>
                  </div>
                </div>

                <div className="mt-6">
                  <Stars rating={5} />
                </div>

                <p className="mt-5 text-zinc-300 leading-relaxed">
                  Parents trust our ISLAMIC CENTER for safe, flexible and professional
                  Quran learning from home.
                </p>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
            {[
              { icon: Star, title: "4.9/5", subtitle: "Average Rating" },
              { icon: Users, title: "10K+", subtitle: "Students" },
              { icon: Globe2, title: "50+", subtitle: "Countries" },
              {
                icon: HeartHandshake,
                title: "98%",
                subtitle: "Parent Satisfaction",
              },
            ].map((item) => (
              <div
                key={item.subtitle}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all"
              >
                <item.icon className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="text-3xl font-black text-yellow-400">
                  {item.title}
                </h3>
                <p className="mt-2 text-zinc-400">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTERNAL REVIEWS */}
      <section className="relative z-10 mx-auto mb-16 max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="https://g.co/kgs/yourgooglelink"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-yellow-400/30 md:p-8"
          >
            <div className="pointer-events-none absolute top-0 right-0 h-48 w-48 bg-yellow-400/10 blur-[90px]" />

            <div className="relative z-10 flex items-center justify-between gap-5">
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-yellow-400 text-3xl font-black text-black shadow-[0_0_35px_rgba(250,204,21,0.35)]">
                    G
                  </div>

                  <div>
                    <h3 className="text-2xl font-black">Google Reviews</h3>
                    <p className="text-zinc-400">
                      Verified student feedback
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Stars rating={5} />
                  <span className="text-zinc-400">
                    4.9 Rating • 127+ Reviews
                  </span>
                </div>
              </div>

              <ExternalLink className="h-6 w-6 flex-shrink-0 text-yellow-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </div>
          </a>

          <a
            href="https://facebook.com/yourpage/reviews"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 md:p-8"
          >
            <div className="pointer-events-none absolute top-0 right-0 h-48 w-48 bg-blue-400/10 blur-[90px]" />

            <div className="relative z-10 flex items-center justify-between gap-5">
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-500 text-3xl font-black text-white shadow-[0_0_35px_rgba(59,130,246,0.35)]">
                    f
                  </div>

                  <div>
                    <h3 className="text-2xl font-black">Facebook Reviews</h3>
                    <p className="text-zinc-400">
                      Community recommendations
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Stars rating={5} />
                  <span className="text-zinc-400">
                    Excellent parent feedback
                  </span>
                </div>
              </div>

              <ExternalLink className="h-6 w-6 flex-shrink-0 text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </div>
          </a>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* REVIEWS GRID */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <p className="text-yellow-400 font-bold mb-2">
                Real Experiences
              </p>
              <h2 className="text-4xl md:text-5xl font-black">
                What Families Say
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-yellow-400/25 hover:bg-yellow-400/5"
                >
                  <div className="pointer-events-none absolute top-0 right-0 h-36 w-36 bg-yellow-400/5 blur-[80px]" />

                  <div className="relative z-10">
                    <div className="mb-5 flex items-center justify-between">
                      <Stars rating={review.rating} />
                      <Quote className="h-10 w-10 text-yellow-400/20" />
                    </div>

                    <p className="mb-8 text-[15px] leading-relaxed text-zinc-300">
                      “{review.comment}”
                    </p>

                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-black">{review.name}</h4>
                        <p className="text-sm text-zinc-500">{review.date}</p>
                      </div>

                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10">
                        <MessageSquare className="h-5 w-5 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* REVIEW FORM */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.65)] md:p-8">
                <div className="pointer-events-none absolute top-0 right-0 h-60 w-60 bg-yellow-400/10 blur-[120px]" />

                <div className="relative z-10 mb-8">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300">
                    <Star className="h-4 w-4 fill-yellow-400" />
                    Share Your Experience
                  </div>

                  <h2 className="text-4xl font-black leading-tight tracking-tight">
                    Leave A
                    <span className="block text-yellow-400">Review</span>
                  </h2>

                  <p className="mt-5 leading-relaxed text-zinc-400">
                    Your feedback helps parents understand our Quran learning
                    experience.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full h-[56px] rounded-2xl border border-white/10 bg-white/5 px-5 text-white placeholder:text-zinc-500 outline-none focus:border-yellow-400"
                  />

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="mb-4 font-semibold text-zinc-300">
                      Your Rating
                    </p>

                    <div className="grid grid-cols-5 gap-3">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, rating: num })
                          }
                          className={`flex h-12 items-center justify-center rounded-2xl transition-all duration-300 sm:h-14 ${
                            num <= formData.rating
                              ? "scale-105 bg-yellow-400 text-black shadow-[0_0_25px_rgba(250,204,21,0.4)]"
                              : "border border-white/10 bg-white/5 text-zinc-500 hover:border-yellow-400/30 hover:text-yellow-400"
                          }`}
                        >
                          <Star
                            className={`h-5 w-5 sm:h-6 sm:w-6 ${
                              num <= formData.rating ? "fill-black" : ""
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <textarea
                    placeholder="Write your experience with our Quran ISLAMIC CENTER..."
                    value={formData.comment}
                    onChange={(e) =>
                      setFormData({ ...formData, comment: e.target.value })
                    }
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 outline-none focus:border-yellow-400"
                  />

                  <div className="space-y-3">
                    {[
                      "Verified student reviews",
                      "Trusted by parents globally",
                      "Professional Quran teachers",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-zinc-400"
                      >
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-yellow-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-yellow-400 py-5 text-lg font-black text-black transition-all duration-300 hover:scale-[1.01] hover:bg-yellow-300 hover:shadow-[0_0_40px_rgba(250,204,21,0.45)]"
                  >
                    Publish Review
                    <Send className="h-5 w-5" />
                  </button>

                  {submitted && (
                    <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-green-300">
                      Thank you! Your review has been published.
                    </div>
                  )}
                </form>

                <div className="relative z-10 mt-8 rounded-3xl border border-yellow-400/20 bg-gradient-to-r from-yellow-400/10 to-yellow-300/5 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-[0_0_30px_rgba(250,204,21,0.35)]">
                      <ShieldCheck className="h-7 w-7" />
                    </div>

                    <div>
                      <h4 className="mb-2 text-xl font-black text-yellow-300">
                        Trusted International ISLAMIC CENTER
                      </h4>

                      <p className="leading-relaxed text-zinc-300">
                        Students from over 50+ countries trust our Quran
                        learning platform and certified tutors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}