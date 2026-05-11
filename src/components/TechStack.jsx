import SectionTitle from "./SectionTitle.jsx";

const stack = [
  {
    category: "Frontend",
    items: [
      "JavaScript",
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Zustand",
    ],
  },
  {
    category: "Backend",
    items: [
      "PHP",
      "Laravel",
      "Node.js",
      "Express",
      "Socket.io",
      "C#",
      "TypeScript",
    ],
  },
  {
    category: "Database",
    items: ["SQL", "SQLite", "MySQL", "MongoDB", "Supabase"],
  },
  {
    category: "Tools & CMS",
    items: [
      "Git",
      "GitHub",
      "Vite",
      "npm",
      "Composer",
      "WordPress",
      "VS Code",
      "Figma",
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="scroll-mt-14 pb-20 min-w-xs flex flex-row-reverse sm:mr-10 lg:mr-20 p-4"
    >
      <div className="bg-black p-4 min-w-xs max-w-lg md:max-w-4xl">
        <SectionTitle title="Tech Stack" />

        <div className="p-4 flex flex-col md:flex-row gap-8 select-none justify-between">
          {stack.map(({ category, items }) => (
            <div key={category} className="flex flex-col gap-3">
              <h2 className="text-white text-xs uppercase tracking-widest font-bold opacity-60">
                {category}
              </h2>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="bg-white text-black text-sm font-bold px-2 py-1 uppercase hover:invert transition-all duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
