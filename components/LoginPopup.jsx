import { RiCloseLargeLine } from "react-icons/ri";

export default function LoginPopup({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-999 flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className={`relative w-full max-w-[460px] rounded-[20px] border border-primary/50 bg-[linear-gradient(180deg,rgba(11,11,11,0.96)_0%,rgba(12,12,12,0.9)_100%)] p-5 md:p-7 shadow-[0_18px_40px_rgba(0,0,0,0.45),inset_0_0_24px_rgba(255,255,255,0.02)] transition-all duration-300 ${isOpen ? "translate-y-0 scale-100" : "translate-y-3 scale-95"}`}
        onClick={e => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="cursor-pointer absolute right-4 top-4 text-primary transition hover:scale-105"
          aria-label="Close login popup"
        >
          <RiCloseLargeLine className="text-xl" />
        </button>

        <h3 className="text-[26px] md:text-[30px] font-bold leading-tight text-primary">
          Login
        </h3>
        <p className="mt-1 text-[14px] text-white/70">
          Welcome back! Please login to continue.
        </p>

        <form
          className="mt-6 space-y-4"
          onSubmit={e => {
            e.preventDefault();
            onClose();
          }}
        >
          <div>
            <label className="mb-2 block text-[14px] font-medium text-white/80">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="h-11 w-full rounded-[12px] border border-white/20 bg-black/30 px-4 text-[14px] text-white outline-none transition focus:border-primary"
            />
          </div>

          <div>
            <label className="mb-2 block text-[14px] font-medium text-white/80">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Enter your password"
              className="h-11 w-full rounded-[12px] border border-white/20 bg-black/30 px-4 text-[14px] text-white outline-none transition focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer mt-2 inline-flex h-11 w-full items-center justify-center rounded-[12px] bg-primary text-[15px] font-semibold text-black transition hover:brightness-95"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
