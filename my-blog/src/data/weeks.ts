import type { Week } from "./types";

// @ts-ignore
import sampleVid from "../assets/videos/sets/15.mp4";


// Weekly content array
const weeks: Week[] = [
    {
        weekNumber: 1,
        setOfTheWeek: {
            title: "Set Example",
            video: sampleVid,
            description: "Cool set here",
        },
        blobOfTheWeek: {
            title: "Blob Example",
            video: sampleVid,
        },
        slobOfTheWeek: {
            title: "Slob Example",
            video: sampleVid,
            description: "Quick hitter out of bounds",
        },
        quoteSports: {
            text: "There is no such thing as a foul, either you die or you dont - Joe Mazzulla",
            video: "",
        },
        quotePhilosophy: {
            text: "We gain our first measure of intelligence when we first admit our own ignorance - Socrates",
            video: "",
        },
        basketballReel: {
            title: "Reel of the Week",
            video: sampleVid,
        },
        drillOfTheWeek: {
            title: "Closeout Drill",
            description: "Helps improve defensive footwork",
            video: sampleVid,
        },
        podcastOfTheWeek: {
            title: "Understanding Fear and Anxiety in High Performance, Finding Flow States, and Attributions of Success and Failures",
            description: "Dr. Gio Valiante discusses the science behind fear and its relationships with performance and confidence. An excellent listen for anyone, athlete or not, who is interested in better understanding how to manage and understand the bodies fear response in an effort to achieve more consistent performance in any field. Dr. Gio also delves into how coaches can best support their athletes journey by being intentional with language and practice design to best facilitate an environment in which athletes do not develop negative fear responses.",
            link: "https://www.slappinglass.com/2025/01/13/gio_valiante_fear_anxiety_flow_states/",
        },
        bonusVideo: {
            title: "Dealing With Knee Pain",
            video: "https://www.youtube.com/watch?v=jWd9IH4GaRE",
            description: "Isaiah Rivera discusses the science behind healing various forms of tendinopathy focusing on the patella tendon. He is a professional dunker with one of the highest ever recorded vertical jumps. ",
        },
        editorsNote: {
            title: "Coach’s Note",
            story: "This week was all about discipline and focus...",
        },
    },

];

export default weeks;
