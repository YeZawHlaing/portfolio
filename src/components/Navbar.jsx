import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ dark, setDark }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center p-4 md:p-6 backdrop-blur bg-white/70 dark:bg-gray-900/70 sticky top-0 z-50">
<h1
  onClick={() => {
    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="font-bold text-xl cursor-pointer"
>
  Ye Zaw
</h1>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experiences">Experience</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 p-6">
          <a onClick={() => setOpen(false)} href="#about">About</a>
          <a onClick={() => setOpen(false)} href="#projects">Projects</a>
          <a onClick={() => setOpen(false)} href="#skills">Skills</a>
          <a onClick={() => setOpen(false)} href="#experiences">Experience</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;