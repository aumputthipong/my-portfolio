"use client";

// Semicircular top on a 4:5 box (50% of the width = 40% of the height), with
// the usual soft corners at the bottom.
const ARCH = {
  borderRadius: "50% 50% 1.5rem 1.5rem / 40% 40% 1.5rem 1.5rem",
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 sm:gap-10 lg:gap-16">
          {/* ── LEFT ── */}
          <div className="w-full max-w-xl space-y-5 sm:space-y-6">
            {/* Title */}
            <div className="space-y-3">
              <h1 className="font-display font-semibold text-ink text-[clamp(2.25rem,11vw,4.5rem)] leading-[0.95] tracking-[-0.01em]">
                Putthipong
                <br />
                <span className="text-accent">Chobngam.</span>
              </h1>
              <p className="text-lg sm:text-xl text-body">
                Full-stack developer &amp; software engineer
              </p>
            </div>

            {/* Bio */}
            <p className="text-base leading-relaxed max-w-md text-body">
              I&apos;m a motivated Information Technology graduate from KMITL
              with a strong focus on full-stack development, with hands-on
              experience across the full development process, from requirements
              analysis and solution design to development, testing, and
              deployment. Eager to keep learning and improving as part of a team.
            </p>
          </div>

          {/* ── RIGHT: arched portrait with offset frame ── */}
          <div className="w-full max-w-[210px] sm:max-w-[230px] lg:max-w-[260px] flex-shrink-0">
            <div className="relative">
              {/* offset frame — signature */}
              <div
                className="absolute inset-0 translate-x-4 translate-y-4 border border-accent/50"
                style={ARCH}
                aria-hidden
              />
              {/* photo — the arch trims the busy top corners of the background */}
              <div className="relative overflow-hidden bg-surface" style={ARCH}>
                <img
                  src="/image/profile_formal.png"
                  alt="Putthipong Chobngam"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
