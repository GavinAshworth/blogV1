import { useParams, useNavigate } from "react-router-dom";
import weeks from "../data/weeks";
import type { Week } from "../data/types";
// @ts-ignore
import arrowSprite from "../assets/Art/Arrow.png";
// @ts-ignore
import lebronSprite from "../assets/Art/Lebron.gif";
// @ts-ignore
import coconutTreeSprite from "../assets/Art/CoconutTree.png";

export default function WeekPage() {
    const { weekNumber } = useParams();
    const navigate = useNavigate();

    const weekIndex = weekNumber ? Number(weekNumber) - 1 : weeks.length - 1;
    const week: Week | undefined = weeks[weekIndex];

    if (!week)
        return (
            <div className="min-h-screen flex items-center justify-center p-6 text-2xl font-bold text-blue-600 font-myFont">
                Week not found
            </div>
        );

    // Handlers for navigation
    const goToPrevWeek = () => {
        if (weekIndex > 0) {
            navigate(`/week/${weekIndex}`);
        }
    };

    const goToNextWeek = () => {
        if (weekIndex < weeks.length - 1) {
            navigate(`/week/${weekIndex + 2}`);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-300 to-blue-800 font-myFont text-gray-800 p-6">
            <div className="max-w-4xl mx-auto space-y-16">
                <header className="text-center space-y-2">
                    <div className="flex justify-center items-center gap-4">
                        {/* Title */}
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wider text-blue-900 drop-shadow-lg font-myFont flex">
                            {Array.from("Hoop's Dive").map((char, index) => (
                                <span
                                    key={index}
                                    className="inline-block animate-wave"
                                    style={{animationDelay: `${index * 0.1}s`}}
                                >
          {char === " " ? "\u00A0" : char}
        </span>
                            ))}
                        </h1>

                        {/* Lebron Sprite */}
                        <img
                            src={lebronSprite}
                            alt="Lebron sprite"
                            className="w-16 h-16 md:w-20 md:h-20 drop-shadow-lg"
                        />
                    </div>

                    {/* Week number with arrows */}
                    <div className="flex justify-center items-center gap-4">
                        <button
                            onClick={goToPrevWeek}
                            className={weekIndex > 0 ? "visible" : "invisible"}
                        >
                            <img
                                src={arrowSprite}
                                alt="Previous Week"
                                className="w-8 h-8 transform rotate-180 hover:scale-110 transition-transform"
                            />
                        </button>

                        <h2 className="text-2xl md:text-3xl text-blue-700 font-semibold font-myFont">
                            Week {week.weekNumber}
                        </h2>

                        <button
                            onClick={goToNextWeek}
                            className={weekIndex < weeks.length - 1 ? "visible" : "invisible"}
                        >
                            <img
                                src={arrowSprite}
                                alt="Next Week"
                                className="w-8 h-8 hover:scale-110 transition-transform"
                            />
                        </button>
                    </div>
                </header>

                {/* Video & Content Blocks */}
                {/* Set of the Week with coconut tree */}
                <section className="relative bg-white rounded-xl p-6 md:p-8 shadow-md border-2 border-blue-200 font-myFont">
                    {/* Coconut Tree in top-right */}
                    <img
                        src={coconutTreeSprite}
                        alt="Coconut tree"
                        className="absolute top-[6px] right-0 w-20 h-20  transform -translate-y-24 -translate-x-2  scale-125 "
                    />

                    <h2 className="text-3xl font-bold mb-3 text-blue-900 font-myFont">
                        Set of the Week
                    </h2>
                    <h3 className="text-xl font-semibold text-blue-700 font-myFont">
                        {week.setOfTheWeek.title}
                    </h3>
                    {week.setOfTheWeek.description && (
                        <p className="mt-2 text-lg font-myFont">{week.setOfTheWeek.description}</p>
                    )}
                    {week.setOfTheWeek.video && renderVideo(week.setOfTheWeek.video)}
                </section>

                {renderContentBlock("Blob of the Week", week.blobOfTheWeek)}
                {renderContentBlock("Slob of the Week", week.slobOfTheWeek)}

                {/* Quotes */}
                {renderQuote("Quote (Sports)", week.quoteSports)}
                {renderQuote("Quote (Philosophy)", week.quotePhilosophy)}

                {renderContentBlock("Basketball Reel of the Week", week.basketballReel)}
                {renderContentBlock("Drill of the Week", week.drillOfTheWeek)}

                {/* Podcast */}
                <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border-2 border-blue-200 font-myFont">
                    <h2 className="text-3xl font-bold mb-3 text-blue-800 font-myFont">
                        Podcast of the Week
                    </h2>
                    <h3 className="text-xl font-semibold text-blue-700 font-myFont">
                        {week.podcastOfTheWeek.title}
                    </h3>
                    <p className="mt-2 text-lg font-myFont">{week.podcastOfTheWeek.description}</p>
                    <a
                        href={week.podcastOfTheWeek.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block text-blue-900 font-bold underline hover:text-blue-600 transition-colors text-lg font-myFont"
                    >
                        Listen here
                    </a>
                </section>

                {renderContentBlock("Bonus Video", week.bonusVideo)}

                {/* Editor’s Note */}
                <section className="bg-white rounded-xl p-6 md:p-8 shadow-inner border-l-4 border-blue-400 font-myFont">
                    <h2 className="text-3xl font-bold mb-3 font-myFont">{week.editorsNote.title}</h2>
                    <p className="leading-relaxed text-lg font-myFont">{week.editorsNote.story}</p>
                </section>
            </div>
        </div>
    );
}

// 🔁 Reusable block
function renderContentBlock(title: string, block: any) {
    if (!block) return null;
    return (
        <section className="bg-white rounded-xl p-6 md:p-8 shadow-md border-2 border-blue-200 font-myFont">
            <h2 className="text-3xl font-bold mb-3 text-blue-900 font-myFont">{title}</h2>
            <h3 className="text-xl font-semibold text-blue-700 font-myFont">{block.title}</h3>
            {block.description && <p className="mt-2 text-lg font-myFont">{block.description}</p>}
            {block.video && renderVideo(block.video)}
        </section>
    );
}

function renderQuote(title: string, block: any) {
    return (
        <section className="bg-yellow-50 rounded-xl p-6 md:p-8 shadow-inner border-l-4 border-yellow-400 font-myFont">
            <h2 className="text-3xl font-bold mb-3 text-yellow-800 font-myFont">{title}</h2>
            <p className="italic text-yellow-900 text-lg font-myFont">"{block.text}"</p>
            {block.video && renderVideo(block.video)}
        </section>
    );
}

function renderVideo(src: string) {
    return (
        <div className="mt-6 rounded-lg overflow-hidden border-2 border-blue-300 shadow-lg">
            <video controls className="w-full">
                <source src={src} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
