interface SectionProps {
  id: string;
  title: string;
  content: string;
}

export default function Section({ id, title, content }: SectionProps) {
  return (
    <section id={id} className="mb-8 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 break-words">{title}</h2>
      <div className="whitespace-pre-wrap">
        {content.split('\n').map((paragraph, index) => (
          <p 
            key={index} 
            className={`mb-3 sm:mb-4 text-sm sm:text-base ${
              paragraph.trim().startsWith('•') ? 'pl-4' : ''
            }`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}