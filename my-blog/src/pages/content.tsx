import { useParams } from "react-router-dom";
import weeks from "../data/weeks";
import type { Week } from "../data/types";

export default function WeekPage() {
    const { weekNumber } = useParams();

    const weekIndex = weekNumber ? Number(weekNumber) - 1 : weeks.length - 1;
    const week: Week | undefined = weeks[weekIndex];

    if (!week)
        return (
            <div className="min-h-screen flex items-center justify-center p-6 text-xl font-bold text-blue-600">
                Week not found
            </div>
        );

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-300 to-blue-800 font-sans text-gray-800 p-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <header className="text-center space-y-2">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider text-blue-900 drop-shadow-lg">
                        Hoop's Dive
                    </h1>
                    <h2 className="text-xl md:text-2xl text-blue-700 font-semibold">
                        Week {week.weekNumber}
                    </h2>
                </header>

                {/* Video & Content Blocks */}
                {renderContentBlock("Set of the Week", week.setOfTheWeek)}
                {renderContentBlock("Blob of the Week", week.blobOfTheWeek)}
                {renderContentBlock("Slob of the Week", week.slobOfTheWeek)}

                {/* Quotes */}
                {renderQuote("Quote (Sports)", week.quoteSports)}
                {renderQuote("Quote (Philosophy)", week.quotePhilosophy)}

                {renderContentBlock("Basketball Reel of the Week", week.basketballReel)}
                {renderContentBlock("Drill of the Week", week.drillOfTheWeek)}

                {/* Podcast */}
                <section className="bg-blue-50 rounded-xl shadow-md p-4 md:p-6 border-2 border-blue-200">
                    <h2 className="text-2xl font-bold mb-2 text-blue-800">
                        Podcast of the Week
                    </h2>
                    <h3 className="font-semibold text-blue-700">{week.podcastOfTheWeek.title}</h3>
                    <p className="mt-1">{week.podcastOfTheWeek.description}</p>
                    <a
                        href={week.podcastOfTheWeek.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-blue-900 font-bold underline hover:text-blue-600 transition-colors"
                    >
                        Listen here
                    </a>
                </section>

                {renderContentBlock("Bonus Video", week.bonusVideo)}

                {/* Editor’s Note */}
                <section className="bg-blue-100 rounded-xl p-4 md:p-6 shadow-inner border-l-4 border-blue-400">
                    <h2 className="text-2xl font-bold mb-2">{week.editorsNote.title}</h2>
                    <p className="leading-relaxed">{week.editorsNote.story}</p>
                </section>
            </div>
        </div>
    );
}

// 🔁 Reusable block
function renderContentBlock(title: string, block: any) {
    if (!block) return null;
    return (
        <section className="bg-white bg-opacity-70 rounded-xl p-4 md:p-6 shadow-md border-2 border-blue-200">
            <h2 className="text-2xl font-bold mb-2 text-blue-900">{title}</h2>
            <h3 className="font-semibold text-blue-700">{block.title}</h3>
            {block.description && <p className="mt-2">{block.description}</p>}
            {block.video && renderVideo(block.video)}
        </section>
    );
}

function renderQuote(title: string, block: any) {
    return (
        <section className="bg-yellow-50 rounded-xl p-4 md:p-6 shadow-inner border-l-4 border-yellow-400">
            <h2 className="text-2xl font-bold mb-2 text-yellow-800">{title}</h2>
            <p className="italic text-yellow-900">"{block.text}"</p>
            {block.video && renderVideo(block.video)}
        </section>
    );
}

function renderVideo(src: string) {
    return (
        <div className="mt-4 rounded-lg overflow-hidden border-2 border-blue-300 shadow-lg">
            <video controls className="w-full">
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
