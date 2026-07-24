import { InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/icons";
import { FOOTER_COLUMNS } from "@/data/homepage";

export function Footer() {
  return (
    <footer className="bg-black py-16 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 md:grid-cols-5">
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="mb-4 text-sm font-semibold tracking-wide uppercase">{col.title}</p>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/70 hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl gap-4 px-6">
        <InstagramIcon className="size-5 text-white/70" />
        <YoutubeIcon className="size-5 text-white/70" />
        <LinkedinIcon className="size-5 text-white/70" />
      </div>

      <div className="mx-auto mt-10 max-w-6xl space-y-2 border-t border-white/10 px-6 pt-8 text-xs text-white/50">
        <p>Albert House, 256-260 Old Street, London EC1V 9DD</p>
        <p>+44 207 426 9888</p>
        <p>
          Package holidays are sold by Rovana as an agent for Hays Tour Operating Ltd, ATOL 10531. Please
          see our booking conditions for more information. © 2026 Rovana.
        </p>
        <p>Calls may be recorded for training and quality assurance purposes.</p>
      </div>

      <div className="mx-auto mt-6 max-w-6xl px-6 text-xs text-white/40">© Rovana 2026</div>
    </footer>
  );
}
