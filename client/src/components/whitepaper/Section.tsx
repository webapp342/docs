interface SectionProps {
  id: string;
  title: string;
  content: string;
}

export default function Section({ id, title, content }: SectionProps) {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="whitespace-pre-wrap">
        {content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
