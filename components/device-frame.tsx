"use client"

import Image from "next/image"

const FALLBACK_IMAGE_SRC = "/placeholder.svg"

/**
 * Shared props used by all framed screenshot components.
 */
type DeviceFrameProps = {
  src: string
  alt: string
  className?: string
}

type FillFrameImageProps = Pick<DeviceFrameProps, "src" | "alt"> & {
  sizes: string
  className: string
}

/**
 * Renders a responsive image that fully fills a frame viewport.
 */
function FillFrameImage({ src, alt, sizes, className }: FillFrameImageProps) {
  return (
    <Image
      src={src || FALLBACK_IMAGE_SRC}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      quality={75}
    />
  )
}

/**
 * Renders a mobile screenshot inside an iPhone-style frame.
 * Frame: opaque status bar on top, then image area (750×1333 ratio). Image is not behind the bar, so the device elongates.
 */
export function IPhoneFrame({
  src,
  alt,
  className = "",
}: DeviceFrameProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      <div className="relative flex flex-col rounded-[2.5rem] border-[6px] border-[#1a1a1a] bg-[#1a1a1a]">
        {/* Opaque status bar: image does not show here, device is longer */}
        <div
          className="flex w-[280px] shrink-0 items-center justify-between rounded-t-[2rem] bg-black px-6 py-3 text-[10px] font-medium text-white"
          aria-hidden
        >
          <span className="tabular-nums">9:41</span>
          <svg className="h-4 w-3.5" viewBox="0 0 25 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <rect x="0.5" y="1" width="21" height="10" rx="2" />
            <path d="M23 4v4a1.5 1.5 0 01-1.5 1.5" />
          </svg>
        </div>
        {/* Screenshot only in this block; aspect ratio 750×1333 */}
        <div
          className="relative w-[280px] overflow-hidden rounded-b-[2rem]"
          style={{ aspectRatio: `${750}/${1333}` }}
        >
          <FillFrameImage
            src={src}
            alt={alt}
            sizes="280px"
            className="object-contain object-top"
          />
        </div>
        <div className="absolute bottom-2 left-1/2 h-[4px] w-[100px] -translate-x-1/2 rounded-full bg-white/20" />
      </div>
    </div>
  )
}

/**
 * Renders a desktop screenshot inside a MacBook-style frame.
 * Frame viewport matches standard desktop ratio (1512×945, 16:10); image uses object-contain so it fits without cropping.
 */
export function MacBookFrame({
  src,
  alt,
  className = "",
}: DeviceFrameProps) {
  return (
    <div
      className={`relative inline-flex flex-col items-center ${className}`}
    >
      <div className="relative rounded-t-xl border-[8px] border-[#1a1a1a] bg-[#1a1a1a]">
        <div className="absolute left-1/2 top-[-4px] z-10 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[#333] md:hidden" />
        <div
          className="relative w-[640px] overflow-hidden rounded-[4px]"
          style={{ aspectRatio: `${1512}/${945}` }}
        >
          <FillFrameImage
            src={src}
            alt={alt}
            sizes="640px"
            className="object-contain object-center"
          />
        </div>
      </div>
      <div className="h-[14px] w-[105%] rounded-b-lg bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]" />
      <div className="h-[4px] w-[115%] rounded-b-xl bg-[#1a1a1a]" />
    </div>
  )
}

/**
 * Renders a screenshot in a lightweight wireframe container.
 */
export function WireframeFrame({
  src,
  alt,
  className = "",
}: DeviceFrameProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      <div className="relative overflow-hidden rounded-xl border-2 border-dashed border-muted-foreground/30 bg-secondary/30 p-2">
        <Image
          src={src || FALLBACK_IMAGE_SRC}
          alt={alt}
          width={800}
          height={500}
          className="block h-auto max-w-full rounded-lg"
          style={{ height: "auto" }}
          quality={75}
        />
      </div>
    </div>
  )
}

/**
 * Renders a vertical screenshot inside a kiosk terminal frame.
 * Viewport height matches the phone frame (same as IPhoneFrame content area) so it fits in the carousel;
 * width grows to match the image aspect ratio.
 */
export function TerminalFrame({
  src,
  alt,
  className = "",
}: DeviceFrameProps) {
  // Same height as IPhoneFrame image area: 280 * (1333/750) ≈ 498px
  const viewportHeight = 498

  return (
    <div
      className={`relative inline-flex flex-col items-center ${className}`}
    >
      <div className="relative rounded-2xl border-[10px] border-[#2c2c2c] bg-[#2c2c2c]">
        <div
          className="relative inline-block overflow-hidden rounded-lg ring-1 ring-white/5"
          style={{ height: viewportHeight }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src || FALLBACK_IMAGE_SRC}
            alt={alt}
            className="block h-full w-auto max-h-full object-contain object-top"
            style={{ height: viewportHeight, width: "auto" }}
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-0 h-[6px] w-[70%] rounded-b-md bg-gradient-to-b from-[#2c2c2c] to-[#1f1f1f]" />
      <div className="h-[20px] w-[16px] bg-[#1f1f1f]" />
      <div className="h-[6px] w-[50px] rounded-sm bg-[#252525] shadow-sm shadow-black/10" />
    </div>
  )
}
