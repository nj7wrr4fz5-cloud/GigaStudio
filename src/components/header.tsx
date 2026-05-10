import Link from "next/link";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold">
          GigaStudio
        </Link>
        <nav className="flex gap-4">
          <Button variant="ghost">О нас</Button>
          <Button variant="ghost">Меню</Button>
          <Button variant="ghost">Контакты</Button>
        </nav>
      </div>
    </header>
  );
}