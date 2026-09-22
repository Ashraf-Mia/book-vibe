import Image from "next/image";
import React from "react";
import hero from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="px-4 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-10 overflow-hidden rounded-3xl bg-linear-to-br from-slate-100 via-slate-200 to-slate-300 px-6 py-12 md:px-16 md:py-20 shadow-sm">
          {/* Decorative accent blob */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

          {/* Text content */}
          <div className="relative z-10 max-w-xl space-y-6 text-center md:text-left">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
              New Arrivals
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
              Books to freshen up your bookshelf
            </h2>

            <p className="text-slate-600 text-lg">
              Curated picks to inspire your next great read — handpicked,
              timeless, unforgettable.
            </p>

            <button className="btn btn-success btn-lg rounded-xl px-8 shadow-md transition-transform hover:scale-105">
              View The List
            </button>
          </div>

          {/* Image */}
          <div className="relative z-10 w-64 md:w-80 lg:w-96">
            <Image
              src={hero}
              alt="book img"
              className="rounded-2xl object-cover shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
