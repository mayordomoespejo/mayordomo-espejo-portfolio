"use client"

import Image from "next/image"

export function IPhoneFrame({
  src,
  alt,
  className = "",
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      {/* iPhone outer shell */}
      <div className="relative rounded-[2.5rem] border-[6px] border-[#1a1a1a] bg-[#1a1a1a]">
        {/* Notch / Dynamic Island */}
        <div className="absolute left-1/2 top-2 z-10 h-[18px] w-[72px] -translate-x-1/2 rounded-full bg-[#1a1a1a]" />
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2rem]">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={280}
            height={607}
            className="block h-auto w-[280px]"
            quality={75}
          />
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 h-[4px] w-[100px] -translate-x-1/2 rounded-full bg-white/20" />
      </div>
    </div>
  )
}

export function MacBookFrame({
  src,
  alt,
  className = "",
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div
      className={`relative inline-flex flex-col items-center ${className}`}
    >
      {/* Screen bezel */}
      <div className="relative rounded-t-xl border-[8px] border-[#1a1a1a] bg-[#1a1a1a]">
        {/* Camera dot */}
        <div className="absolute left-1/2 top-[-4px] z-10 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[#333]" />
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[4px]">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={640}
            height={400}
            className="block h-auto w-[640px]"
            quality={75}
          />
        </div>
      </div>
      {/* MacBook bottom / hinge */}
      <div className="h-[14px] w-[105%] rounded-b-lg bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]" />
      {/* Base */}
      <div className="h-[4px] w-[115%] rounded-b-xl bg-[#1a1a1a]" />
    </div>
  )
}

export function WireframeFrame({
  src,
  alt,
  className = "",
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      <div className="relative overflow-hidden rounded-xl border-2 border-dashed border-muted-foreground/30 bg-secondary/30 p-2">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={800}
          height={500}
          className="block h-auto max-w-full rounded-lg"
          quality={75}
        />
      </div>
    </div>
  )
}

export function TerminalFrame({
  src,
  alt,
  className = "",
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div
      className={`relative inline-flex flex-col items-center ${className}`}
    >
      {/* Kiosk outer housing - industrial look */}
      <div className="relative rounded-2xl border-[10px] border-[#2c2c2c] bg-[#2c2c2c]">
        {/* Top housing with status indicator */}
        <div className="absolute -top-[6px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
          <div className="h-[6px] w-[6px] rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
        </div>
        {/* Screen with slight inset effect */}
        <div className="relative overflow-hidden rounded-lg ring-1 ring-white/5">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={280}
            height={607}
            className="block h-auto w-[280px]"
            quality={75}
          />
        </div>
      </div>
      {/* Terminal mounting bracket */}
      <div className="mt-0 h-[6px] w-[70%] rounded-b-md bg-gradient-to-b from-[#2c2c2c] to-[#1f1f1f]" />
      <div className="h-[20px] w-[16px] bg-[#1f1f1f]" />
      {/* Wall mount plate */}
      <div className="h-[6px] w-[50px] rounded-sm bg-[#252525] shadow-sm shadow-black/10" />
    </div>
  )
}
