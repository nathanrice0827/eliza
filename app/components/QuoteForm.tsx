"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const artTypes = [
  "Watercolor Painting",
  "Oil Painting",
  "Botanical Illustration",
  "Mixed Media",
  "Portrait",
  "Landscape",
  "Abstract",
  "Other",
];

const budgets = [
  "Under $200",
  "$200 – $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500+",
  "Not sure yet",
];

type FormData = {
  name: string;
  email: string;
  artType: string;
  size: string;
  description: string;
  budget: string;
};

type FormStatus = "idle" | "sending" | "success" | "error";

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    artType: "",
    size: "",
    description: "",
    budget: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Build mailto href as fallback
    const subject = encodeURIComponent(
      `Custom Art Commission Request — ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nArt Type: ${formData.artType}\nSize: ${formData.size}\nBudget: ${formData.budget}\n\nDescription:\n${formData.description}`
    );

    // Simulate short delay, then open mailto
    await new Promise((r) => setTimeout(r, 800));
    window.location.href = `mailto:elizarice23@icloud.com?subject=${subject}&body=${body}`;
    setStatus("success");
  };

  return (
    <section id="quote" className="py-28 md:py-36 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#DDD5EE] opacity-20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#D5E3D7] opacity-20 blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#8C7B6E] mb-4 font-light">
            Commissions
          </p>
          <h2
            style={{ fontFamily: "var(--font-display, 'Fraunces', Georgia, serif)" }}
            className="text-5xl md:text-6xl font-light text-[#3D2E28] mb-6"
          >
            Request a Quote
          </h2>
          <p className="text-[#8C7B6E] font-light leading-relaxed max-w-md mx-auto">
            I love bringing your vision to life. Fill out the form below and I&rsquo;ll
            get back to you within 2–3 business days.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/60 backdrop-blur-sm border border-[#F0D5CE] rounded-3xl p-8 md:p-12 shadow-sm shadow-[#D4948D]/10"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-[#D5E3D7] flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#668A6E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3
                  style={{ fontFamily: "var(--font-display, 'Fraunces', Georgia, serif)" }}
                  className="text-3xl font-light text-[#3D2E28] mb-3"
                >
                  Your request is on its way!
                </h3>
                <p className="text-[#8C7B6E] font-light">
                  I&rsquo;ll be in touch within 2–3 business days to chat about your
                  commission.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-7"
              >
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="quote-name"
                      className="block text-[11px] tracking-[0.2em] uppercase text-[#8C7B6E] mb-2.5 font-light"
                    >
                      Your Name *
                    </label>
                    <input
                      id="quote-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full bg-[#FAF7F2] border border-[#E8C5C1] rounded-xl px-4 py-3.5 text-[#3D2E28] placeholder-[#C5B5AB] text-sm font-light focus:outline-none focus:border-[#D4948D] focus:ring-2 focus:ring-[#E8C5C1]/50 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="quote-email"
                      className="block text-[11px] tracking-[0.2em] uppercase text-[#8C7B6E] mb-2.5 font-light"
                    >
                      Email Address *
                    </label>
                    <input
                      id="quote-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full bg-[#FAF7F2] border border-[#E8C5C1] rounded-xl px-4 py-3.5 text-[#3D2E28] placeholder-[#C5B5AB] text-sm font-light focus:outline-none focus:border-[#D4948D] focus:ring-2 focus:ring-[#E8C5C1]/50 transition-all"
                    />
                  </div>
                </div>

                {/* Art Type + Size */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="quote-art-type"
                      className="block text-[11px] tracking-[0.2em] uppercase text-[#8C7B6E] mb-2.5 font-light"
                    >
                      Art Type *
                    </label>
                    <select
                      id="quote-art-type"
                      name="artType"
                      required
                      value={formData.artType}
                      onChange={handleChange}
                      className="w-full bg-[#FAF7F2] border border-[#E8C5C1] rounded-xl px-4 py-3.5 text-[#3D2E28] text-sm font-light focus:outline-none focus:border-[#D4948D] focus:ring-2 focus:ring-[#E8C5C1]/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select a medium…</option>
                      {artTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="quote-size"
                      className="block text-[11px] tracking-[0.2em] uppercase text-[#8C7B6E] mb-2.5 font-light"
                    >
                      Approximate Size
                    </label>
                    <input
                      id="quote-size"
                      name="size"
                      type="text"
                      value={formData.size}
                      onChange={handleChange}
                      placeholder="e.g. 16 × 20 in"
                      className="w-full bg-[#FAF7F2] border border-[#E8C5C1] rounded-xl px-4 py-3.5 text-[#3D2E28] placeholder-[#C5B5AB] text-sm font-light focus:outline-none focus:border-[#D4948D] focus:ring-2 focus:ring-[#E8C5C1]/50 transition-all"
                    />
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <p className="block text-[11px] tracking-[0.2em] uppercase text-[#8C7B6E] mb-3 font-light">
                    Budget Range *
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        id={`budget-${b.replace(/\W+/g, "-").toLowerCase()}`}
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, budget: b }))
                        }
                        className={`px-4 py-2 rounded-full text-[11px] tracking-[0.1em] font-light border transition-all duration-200 ${
                          formData.budget === b
                            ? "bg-[#3D2E28] text-[#FAF7F2] border-[#3D2E28]"
                            : "border-[#E8C5C1] text-[#6B5C52] hover:border-[#D4948D]"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="quote-description"
                    className="block text-[11px] tracking-[0.2em] uppercase text-[#8C7B6E] mb-2.5 font-light"
                  >
                    Tell me about your vision *
                  </label>
                  <textarea
                    id="quote-description"
                    name="description"
                    required
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe the piece you have in mind — subject, colors, mood, who it's for, any special details…"
                    className="w-full bg-[#FAF7F2] border border-[#E8C5C1] rounded-xl px-4 py-3.5 text-[#3D2E28] placeholder-[#C5B5AB] text-sm font-light focus:outline-none focus:border-[#D4948D] focus:ring-2 focus:ring-[#E8C5C1]/50 transition-all resize-none leading-relaxed"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  id="quote-submit-btn"
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-[#3D2E28] text-[#FAF7F2] text-[12px] tracking-[0.25em] uppercase font-light rounded-2xl hover:bg-[#6B5C52] transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending…" : "Send My Request"}
                </motion.button>

                <p className="text-center text-[11px] text-[#8C7B6E] font-light">
                  I typically respond within 2–3 business days. No spam, ever.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Process steps */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            {
              step: "01",
              title: "Submit your vision",
              desc: "Share your ideas, preferred medium, size, and budget.",
            },
            {
              step: "02",
              title: "We chat & plan",
              desc: "I'll reach out to refine the concept and confirm details.",
            },
            {
              step: "03",
              title: "Your art is created",
              desc: "I craft your unique piece and ship it safely to you.",
            },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex flex-col items-center">
              <span
                style={{ fontFamily: "var(--font-display, 'Fraunces', Georgia, serif)" }}
                className="text-5xl font-light text-[#E8C5C1] mb-3"
              >
                {step}
              </span>
              <p
                style={{ fontFamily: "var(--font-display, 'Fraunces', Georgia, serif)" }}
                className="text-xl text-[#3D2E28] font-light mb-2"
              >
                {title}
              </p>
              <p className="text-sm text-[#8C7B6E] font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
