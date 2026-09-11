export default function SiteFooter() {
  return (
      <footer className="bg-black border-t border-neutral-900 text-center py-6 text-xs text-gray-400 mt-0">
        © {new Date().getFullYear()} Rav Fitness. All rights reserved.
      </footer>
  );
}
