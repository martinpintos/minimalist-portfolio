export default function Section({
  children,
  title,
}: Readonly<{ children: React.ReactNode; title?: string }>) {
  return (
    <section className="mt-0 mx-auto mb-12 max-w-2xl">
      {title && <h2 className="font-extrabold text-2xl mb-2">{title}</h2>}
      {children}
    </section>
  );
}
