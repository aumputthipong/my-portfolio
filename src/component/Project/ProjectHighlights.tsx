/** "What I did" list under a project's gallery and info panel. */
export default function ProjectHighlights({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  return (
    <section>
      <h2 className="font-display text-lg sm:text-xl font-bold uppercase tracking-[0.15em] text-ink mb-4 sm:mb-5">What I did</h2>
      <ul className="grid gap-x-8 gap-y-5 md:grid-cols-2">
        {items.map((item, i) => (
          <li key={i} className="max-w-[68ch] border-t-2 border-accent pt-3 text-base leading-relaxed text-body">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
