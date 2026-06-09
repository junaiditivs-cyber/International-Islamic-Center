import { useState } from "react";
import {
  Sparkles,
  Globe,
  Clock,
  ShieldCheck,
  GraduationCap,
  CheckCircle2,
  UserPlus,
  Users,
  Star,
  X,
} from "lucide-react";
import PhoneInput from "react-phone-input-2";
import SuccessOverlay from "../components/SuccessOverlay";

interface Student {
  id: number;
  studentName: string;
  age: string;
  classDuration: string;
  availableFrom: string;
}

export default function Trial() {
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      studentName: "",
      age: "",
      classDuration: "",
      availableFrom: "",
    },
  ]);

  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [countryResidence, setCountryResidence] = useState("");
  const [parentPhone, setParentPhone] = useState("92");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const addStudent = () => {
    setStudents([
      ...students,
      {
        id: Date.now(),
        studentName: "",
        age: "",
        classDuration: "",
        availableFrom: "",
      },
    ]);
  };

  const updateStudent = (id: number, field: keyof Student, value: string) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, [field]: value } : student
      )
    );
  };

  const removeStudent = (id: number) => {
    if (students.length === 1) return;
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!parentPhone || parentPhone.trim().length < 5) {
      alert("Phone number is required!");
      return;
    }

    const formData = {
      fatherName,
      email,
      countryResidence,
      parentPhone,
      students,
      message,
    };

    console.log("Trial Form Data:", formData);

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 4000);
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.12),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="pointer-events-none absolute top-[-160px] left-[-120px] w-[500px] h-[500px] bg-yellow-400/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute bottom-[-160px] right-[-120px] w-[500px] h-[500px] bg-yellow-400/10 blur-[150px] rounded-full" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/25 text-yellow-300 text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                International Quran ISLAMIC CENTER
              </div>

              <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
                Start Your
                <span className="block text-yellow-400">
                  Free Quran Trial
                </span>
              </h1>

              <p className="text-zinc-300 mt-6 leading-relaxed max-w-xl">
                Our online Quran classes make learning easy, comfortable and
                accessible worldwide. We provide flexible timings so your child
                can learn Quran from the comfort and safety of home.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-10">
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
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all"
                  >
                    <item.icon className="text-yellow-400 w-8 h-8 mb-4" />
                    <h3 className="font-black">{item.title}</h3>
                    <p className="text-zinc-400 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-9 rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-6">
                <h3 className="text-yellow-400 font-black flex items-center gap-2">
                  <Star size={18} />
                  Why Parents Trust Us
                </h3>

                <ul className="mt-5 space-y-3 text-zinc-300 text-sm">
                  {[
                    "One-on-One personalized attention",
                    "Focus on proper Tajweed & understanding",
                    "Secure and peaceful Islamic environment",
                    "Free trial before any payment",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.055] backdrop-blur-2xl shadow-[0_0_90px_rgba(0,0,0,0.75)] p-7 md:p-10"
            >
              <div className="pointer-events-none absolute -top-32 -left-32 w-72 h-72 bg-yellow-400/10 blur-[120px] rounded-full" />
              <div className="pointer-events-none absolute top-24 -right-24 w-72 h-72 bg-yellow-400/20 blur-[130px] rounded-full" />
              <div className="pointer-events-none absolute bottom-10 -right-16 w-52 h-52 bg-yellow-300/10 blur-[100px] rounded-full" />

              <div className="relative z-10">
                <div className="mb-9">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 text-sm font-medium mb-5">
                    🌍 Global Enrollment Form
                  </div>

                  <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                    Registration
                    <span className="block text-yellow-400">Form</span>
                  </h2>

                  <p className="mt-4 text-zinc-400">
                    Phone number is required. Other details help us arrange the
                    best class timing for you.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mb-6">
                  <input
                    type="text"
                    placeholder="Father / Guardian Name"
                    value={fatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                    className="h-[56px] bg-white/5 border border-white/10 rounded-2xl px-5 text-white placeholder:text-zinc-500 outline-none focus:border-yellow-400"
                  />

                  <input
                    type="email"
                    placeholder="Parent Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-[56px] bg-white/5 border border-white/10 rounded-2xl px-5 text-white placeholder:text-zinc-500 outline-none focus:border-yellow-400"
                  />

                  <input
                    type="text"
                    placeholder="Country of Residence"
                    value={countryResidence}
                    onChange={(e) => setCountryResidence(e.target.value)}
                    className="md:col-span-2 h-[56px] bg-white/5 border border-white/10 rounded-2xl px-5 text-white placeholder:text-zinc-500 outline-none focus:border-yellow-400"
                  />

                  <div className="md:col-span-2">
                    <PhoneInput
                      country="pk"
                      value={parentPhone}
                      onChange={(value) => setParentPhone(value)}
                      enableSearch
                      countryCodeEditable={false}
                      inputProps={{
                        name: "parent-phone",
                        required: true,
                      }}
                      placeholder="Phone Number"
                      containerClass="!w-full"
                      inputClass="!w-full !h-[56px] !bg-white/5 !border !border-white/10 !rounded-2xl !pl-[64px] !pr-5 !text-white !text-base !outline-none"
                      buttonClass="!bg-white/5 !border !border-white/10 !rounded-l-2xl !w-[56px]"
                      dropdownClass="!bg-white !text-black !rounded-xl !shadow-2xl"
                      searchClass="!text-black"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  {students.map((student, index) => (
                    <div
                      key={student.id}
                      className="rounded-3xl border border-white/10 bg-black/25 p-6 shadow-inner shadow-yellow-400/5"
                    >
                      <div className="flex items-center justify-between mb-7">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-yellow-400 text-black flex items-center justify-center shadow-[0_0_35px_rgba(250,204,21,0.35)]">
                            <Users className="w-7 h-7" />
                          </div>

                          <div>
                            <h3 className="text-2xl font-black">
                              Student {index + 1}
                            </h3>
                            <p className="text-zinc-400 text-sm">
                              Student learning information
                            </p>
                          </div>
                        </div>

                        {students.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeStudent(student.id)}
                            className="w-11 h-11 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center hover:bg-red-500/20 transition-all"
                          >
                            <X className="w-5 h-5 text-red-400" />
                          </button>
                        )}
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <input
                          type="text"
                          placeholder="Student Full Name"
                          value={student.studentName}
                          onChange={(e) =>
                            updateStudent(
                              student.id,
                              "studentName",
                              e.target.value
                            )
                          }
                          className="h-[56px] bg-white/5 border border-white/10 rounded-2xl px-5 text-white placeholder:text-zinc-500 outline-none focus:border-yellow-400"
                        />

                        <input
                          type="text"
                          placeholder="Student Age"
                          value={student.age}
                          onChange={(e) =>
                            updateStudent(student.id, "age", e.target.value)
                          }
                          className="h-[56px] bg-white/5 border border-white/10 rounded-2xl px-5 text-white placeholder:text-zinc-500 outline-none focus:border-yellow-400"
                        />

                        <select
                          value={student.classDuration}
                          onChange={(e) =>
                            updateStudent(
                              student.id,
                              "classDuration",
                              e.target.value
                            )
                          }
                          className="h-[56px] bg-white/5 border border-white/10 rounded-2xl px-5 text-white outline-none focus:border-yellow-400"
                        >
                          <option value="" className="bg-black">
                            Class Duration
                          </option>
                          <option value="30" className="bg-black">
                            30 Min
                          </option>
                          <option value="45" className="bg-black">
                            45 Min
                          </option>
                          <option value="60" className="bg-black">
                            60 Min
                          </option>
                        </select>

                        <input
                          type="text"
                          placeholder="Available From"
                          value={student.availableFrom}
                          onChange={(e) =>
                            updateStudent(
                              student.id,
                              "availableFrom",
                              e.target.value
                            )
                          }
                          className="h-[56px] bg-white/5 border border-white/10 rounded-2xl px-5 text-white placeholder:text-zinc-500 outline-none focus:border-yellow-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={addStudent}
                  className="w-full mt-7 py-4 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 text-yellow-300 font-black flex items-center justify-center gap-3 hover:bg-yellow-400/15 transition-all"
                >
                  <UserPlus className="w-5 h-5" />
                  Add Another Student
                </button>

                <textarea
                  placeholder="Additional message or learning requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="mt-6 w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-500 resize-none outline-none focus:border-yellow-400"
                />

                <button
                  type="submit"
                  className="w-full mt-6 py-5 rounded-2xl bg-yellow-400 text-black font-black text-lg transition-all duration-300 hover:bg-yellow-300 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(250,204,21,0.45)]"
                >
                  Submit Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {showSuccess && <SuccessOverlay type="trial" />}
    </div>
  );
}