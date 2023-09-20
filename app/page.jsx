/**
 * app/page.jsx
 */

import Hero from "@/components/created/hero/Hero";
import CardCategories from "@/components/created/home/categories";

export default async function DashboardPage() {
  return (
    <section>
      <Hero />
      <CardCategories />
      <div className="h-screen"></div>
    </section>
  );
}
