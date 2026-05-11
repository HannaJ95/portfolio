export default function SectionTitle({ title }) {
  return (
    <div className="sticky top-14 z-10 p-4 flex items-center gap-2 md:gap-4 mix-blend-difference w-fit">
      <div className="size-12 sm:size-14 md:size-18 rounded-full bg-white shrink-0" />

      <h1 className="text-4xl sm:text-6xl md:text-7xl uppercase font-bold text-white w-fit break-normal">
        {title}
      </h1>
    </div>
  );
}
