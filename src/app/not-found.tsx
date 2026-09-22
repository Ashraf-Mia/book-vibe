import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="relative w-full max-w-lg text-center">
        {/* Decorative background accent */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" />
        </div>

        {/* Big 404 */}
        <p className="text-8xl font-extrabold tracking-tight text-slate-900 md:text-9xl">
          404
        </p>

        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-slate-800">
          Page not found
        </h2>

        <p className="mt-3 text-slate-500 text-base md:text-lg">
          Sorry, we couldn&apos;t find the resource you&apos;re looking for. It
          may have been moved or no longer exists.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn btn-success rounded-xl px-8 shadow-md transition-transform hover:scale-105"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="btn btn-outline rounded-xl px-8 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
