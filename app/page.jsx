/**
 * app/page.jsx
 */

import Hero2 from "@/components/created/hero/Hero2";

export default async function DashboardPage() {
  return (
    <section>
      <Hero2 />
      <div className="h-screen">This is a nice para</div>
    </section>
  );
}
