import { useParams } from "react-router-dom";
import weeks from "../data/weeks"; // ✅ your JSON array
import type { Week } from "../data/types"; // ✅ import the interface

export default function WeekPage() {
    const { weekNumber } = useParams();

    // Determine which week to show
    const weekIndex = weekNumber ? Number(weekNumber) - 1 : weeks.length - 1;
    const week: Week | undefined = weeks[weekIndex];

    if (!week) return <div className="p-6">Week not found</div>;

    return (
        <div className="min-h-screen max-w-3xl mx-auto p-6 space-y-10">
            <h1 className="text-3xl font-bold text-center mb-8">
                Week {week.weekNumber}
            </h1>

            {renderContentBlock("Set of the Week", week.setOfTheWeek)}
            {renderContentBlock("Blob of the Week", week.blobOfTheWeek)}
            {renderContentBlock("Slob of the Week", week.slobOfTheWeek)}

            {/* Quotes */}
            <section>
                <h2 className="text-2xl font-semibold">Quote (Sports)</h2>
                <p className="mt-2 italic">"{week.quoteSports.text}"</p>
                {week.quoteSports.video && renderVideo(week.quoteSports.video)}
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Quote (Philosophy)</h2>
                <p className="mt-2 italic">"{week.quotePhilosophy.text}"</p>
                {week.quotePhilosophy.video && renderVideo(week.quotePhilosophy.video)}
            </section>

            {renderContentBlock("Basketball Reel of the Week", week.basketballReel)}
            {renderContentBlock("Drill of the Week", week.drillOfTheWeek)}

            {/* Podcast */}
            <section>
                <h2 className="text-2xl font-semibold">Podcast of the Week</h2>
                <h3 className="mt-2 font-bold">{week.podcastOfTheWeek.title}</h3>
                <p>{week.podcastOfTheWeek.description}</p>
                <a
                    href={week.podcastOfTheWeek.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                >
                    Listen here
                </a>
            </section>

            {renderContentBlock("Bonus Video", week.bonusVideo)}

            {/* Editor’s Note */}
            <section>
                <h2 className="text-2xl font-semibold">{week.editorsNote.title}</h2>
                <p className="mt-2">{week.editorsNote.story}</p>
            </section>
        </div>
    );
}

// 🔁 Reusable block
function renderContentBlock(title: string, block: any) {
    if (!block) return null;
    return (
        <section>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <h3 className="mt-2 font-bold">{block.title}</h3>
            {block.description && <p className="mt-2">{block.description}</p>}
            {block.video && renderVideo(block.video)}
        </section>
    );
}

function renderVideo(src: string) {
    return (
        <div className="mt-4">
            <video controls className="w-full rounded-lg shadow-md">
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
