export default function SiteHeader() {
  return (
      <header className="fixed top-0 left-0 right-0 w-full h-14 md:h-16 shadow-md bg-black/95 backdrop-blur z-50">


        <div className="max-w-6xl mx-auto px-6 h-full flex justify-between items-center">
          {/* Logo + Tagline */}
          <div className="flex items-center gap-3">
            {/* RF Logo (Gold) */}
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#f5b533] text-[#f5b533] font-extrabold text-lg tracking-tight">
              RF
            </div>

            {/* Brand Text */}
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold text-white">
                Rav<span className="text-[#f5b533]"> Fitness</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#f5b533]">
                Never Break The Chain
              </span>
            </div>
          </div>

          {/* Navigation + CTA */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex space-x-6 text-sm font-medium">
              <a href="#home" className="text-white hover:text-[#f5b533]">
                Home
              </a>
              <a href="#services" className="text-white hover:text-[#f5b533]">
                Services
              </a>
              <a href="#about" className="text-white hover:text-[#f5b533]">
                About
              </a>
              <a href="#results" className="text-white hover:text-[#f5b533]">
                Results
              </a>
              <a href="#contact" className="text-white hover:text-[#f5b533]">
                Contact
              </a>
            </nav>

            {/* TOP RIGHT button */}
            <a
              href="#contact"
              className="hidden md:inline-block px-4 py-2 rounded-xl text-sm font-semibold bg-[#f5b533] text-black hover:brightness-110 shadow"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </header>
  );
}
