import React from "react";
import { motion } from "framer-motion";
import giftboxImg from "../../assets/images/giftbox.png";

export default function IntroStage({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="relative z-10 mx-auto flex w-full flex-col items-center justify-center px-4 py-4 text-center">
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8 }}
        className="font-script text-4xl text-blush-600 sm:text-5xl"
      >
        20 <span className="text-gold-soft">·</span> 10
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-1 font-body text-xs uppercase tracking-[0.35em] text-blush-500"
      >
        Ngày Phụ nữ Việt Nam
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.75, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.9, type: "spring", bounce: 0.35 }}
        className="relative mt-3 flex justify-center w-full"
      >
        <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(255,214,228,0.9),rgba(255,214,228,0))] glow-pulse" />
        <img
          src={giftboxImg}
          alt="Hộp quà màu hồng"
          className="watercolor gentle-float w-32 select-none sm:w-44"
          draggable={false}
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.9 }}
        className="mt-2 font-display text-2xl italic leading-snug text-ink-300 sm:text-3xl"
      >
        Đây là quà của
        <br />
        <span className="not-italic font-semibold text-blush-700">Ma Công Huy</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.9 }}
        className="mt-3 max-w-sm font-body text-sm leading-relaxed text-ink-100"
      >
        Tặng mẹ yêu nhân ngày 20/10 — có một điều bất ngờ đang chờ mẹ mở ra 💗
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.05, duration: 0.7 }}
        className="mt-6 flex flex-col items-center gap-2"
      >
        <div className="relative ring-ripple rounded-full">
          <button
            type="button"
            onClick={onOpen}
            className="rounded-full bg-gradient-to-br from-blush-400 via-blush-500 to-blush-600 px-9 py-3 font-display text-lg font-semibold tracking-wide text-white shadow-[0_12px_30px_-10px_rgba(189,75,109,0.75)] transition active:scale-95 sm:text-xl cursor-pointer"
          >
            🎁 Mở quà!
          </button>
        </div>
        <p className="hint-bounce font-body text-xs text-blush-500">
          Mẹ bấm nhẹ vào nút nhé ↓
        </p>
      </motion.div>
    </section>
  );
}