import { motion } from "motion/react"
import { CornerTick } from "@/components/landing/landing-svgs"
import { ease } from "@/components/landing/constants"

export function MockupFrame({ compact = false }: { compact?: boolean }) {
  return (
    <section
      id="mockup"
      className={
        compact
          ? "relative bg-[oklch(0.985_0_0)]"
          : "relative bg-[oklch(0.985_0_0)] px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease }}
        className={compact ? "relative mx-auto w-full" : "relative mx-auto max-w-[68rem]"}
      >
        <div className="relative rounded-[20px] border border-[oklch(0.9_0_0)] bg-[oklch(0.985_0_0)] p-2">
          <CornerTick className="absolute -top-1.5 -left-1.5 size-3 text-[oklch(0.62_0.21_18/0.7)]" />
          <CornerTick className="absolute -top-1.5 -right-1.5 size-3 rotate-90 text-[oklch(0.48_0.13_145/0.7)]" />
          <CornerTick className="absolute -bottom-1.5 -left-1.5 size-3 -rotate-90 text-[oklch(0.48_0.13_145/0.7)]" />
          <CornerTick className="absolute -right-1.5 -bottom-1.5 size-3 rotate-180 text-[oklch(0.62_0.21_18/0.7)]" />

          <div className="relative overflow-hidden rounded-[14px] border border-[oklch(0.9_0_0)] bg-gradient-to-b from-[oklch(1_0_0)] to-[oklch(0.97_0_0)]">
            <div className="flex items-center justify-between border-b border-[oklch(0.9_0_0)] bg-[oklch(0.985_0_0)] px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-[oklch(0.62_0.21_18/0.55)]" />
                <span className="size-2.5 rounded-full bg-[oklch(0.48_0.13_145/0.55)]" />
                <span className="size-2.5 rounded-full bg-[oklch(0.145_0_0/0.15)]" />
              </div>
              <span className="font-mono text-[10px] tracking-widest text-[oklch(0.145_0_0/0.4)] uppercase">tokokino</span>
              <span className="font-mono text-[10px] text-[oklch(0.145_0_0/0.3)]">⌘ K</span>
            </div>

            <div className="relative aspect-[16/10] w-full">
              <div className="absolute inset-0 [background-image:linear-gradient(to_right,oklch(0.7_0.2_18/0.05)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.82_0.14_145/0.05)_1px,transparent_1px)] [background-size:42px_42px]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.97_0_0)_95%)]" />
              <div className="relative h-full w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://assets.tokokino.com/screenshot.png`}
                  alt="Tokokino demo preview"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
