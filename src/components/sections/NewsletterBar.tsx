"use client";

export function NewsletterBar() {
  return (
    <section className="bg-[#2f2f2f] py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6">
        <p className="text-sm font-semibold tracking-wide text-white uppercase">Sign Up To Our Newsletter</p>
        <form className="flex flex-1 flex-wrap gap-3 md:flex-nowrap" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="First name"
            className="h-11 flex-1 border border-white/20 bg-white px-4 text-sm text-black placeholder:text-muted-foreground"
          />
          <input
            type="email"
            placeholder="youremail@example.com"
            className="h-11 flex-1 border border-white/20 bg-white px-4 text-sm text-black placeholder:text-muted-foreground"
          />
          <button className="h-11 bg-black px-6 text-sm font-medium tracking-wide text-white uppercase hover:bg-white hover:text-black">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
