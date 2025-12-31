import { Logo } from "./utils/logo";

export function Hero() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex items-center">
          <div className="size-32">
            <Logo />
          </div>
          Circuit Nation
        </header>
      </div>
    </main>
  );
}