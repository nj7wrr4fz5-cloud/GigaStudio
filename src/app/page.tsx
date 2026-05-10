import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto py-12">
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">GigaStudio</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Корпоративное питание под ключ
        </p>
        <Button>Оставить заявку</Button>
      </section>
    </div>
  );
}