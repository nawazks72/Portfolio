import Image from "next/image";
import Link from "next/link";
import { personalInfo } from "../data/info";

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalInfo.experience.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4 min-w-[80px]">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={80}
                  height={80}
                  className="object-contain mix-blend-lighten"
                  style={{ width: "auto", height: "auto", maxWidth: "80px", maxHeight: "80px" }}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {card.description}
                </p>
                {card.link && (
                  <Link
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block"
                  >
                    LEARN MORE →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

