import { CMS_NAME, CMS_URL } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        PowiedzRosjanom.pl
      </h1>
      <h3 className="text-center text-l md:text-3xl">
        Pomóż powstrzymać rosyjską propagandę
      </h3>
    </section>
  );
}
