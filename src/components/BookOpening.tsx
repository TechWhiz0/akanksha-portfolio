"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "./Logo";
import { SITE } from "@/lib/constants";

const COVER_HOLD = 1.1; // seconds the closed cover stays on screen
const OPEN_DURATION = 1.5;
const OPEN_EASE = [0.76, 0, 0.24, 1] as const;

export function BookOpening({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDone(true);
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (done) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [done]);

  return (
    <>
      <div style={done ? undefined : { perspective: "2400px" }}>
        {/* The revealed "page" — the entire site settles flat as the cover opens */}
        <motion.div
          initial={done ? false : { rotateY: -14, scale: 0.94, opacity: 0.4 }}
          animate={{ rotateY: 0, scale: 1, opacity: 1 }}
          transition={{
            delay: COVER_HOLD,
            duration: OPEN_DURATION,
            ease: OPEN_EASE,
          }}
          style={done ? undefined : { transformOrigin: "left center" }}
        >
          {children}
        </motion.div>
      </div>

      {/* Cover overlay lives outside the perspective wrapper: a perspective
         ancestor becomes the containing block for position:fixed, which would
         stretch this over the full page height instead of the viewport. */}
      {!done && (
        <div className="fixed inset-0 z-[100]" style={{ perspective: "2400px" }}>
          {/* Book cover — hinged on the left spine */}
          <motion.div
            className="absolute inset-0 origin-left bg-foreground text-background"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: -115 }}
            transition={{
              delay: COVER_HOLD,
              duration: OPEN_DURATION,
              ease: OPEN_EASE,
            }}
            onAnimationComplete={() => setDone(true)}
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              boxShadow: "20px 0 60px rgba(0, 0, 0, 0.35)",
            }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-6 px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-6"
              >
                <Logo className="h-10 w-10 text-background" />
                <p className="text-[clamp(2rem,6vw,4rem)] font-semibold leading-tight tracking-tight">
                  {SITE.name}
                </p>
                <p className="text-sm uppercase tracking-[0.3em] text-background/60">
                  UX &amp; Product Designer — Portfolio
                </p>
              </motion.div>
            </div>

            {/* Stacked page edges along the right, like a closed book */}
            <div
              className="absolute bottom-0 right-0 top-0 w-2"
              style={{
                background:
                  "repeating-linear-gradient(to right, rgba(255,255,255,0.35) 0px, rgba(255,255,255,0.35) 1px, transparent 1px, transparent 3px)",
              }}
            />

            {/* Shading that deepens as the cover swings open */}
            <motion.div
              className="pointer-events-none absolute inset-0 bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.65 }}
              transition={{
                delay: COVER_HOLD,
                duration: OPEN_DURATION,
                ease: OPEN_EASE,
              }}
            />
          </motion.div>
        </div>
      )}
    </>
  );
}
