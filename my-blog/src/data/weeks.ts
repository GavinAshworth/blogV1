import type { Week } from "./types";

// @ts-ignore
import sampleVid from "../assets/videos/sets/15.mp4";


// Weekly content array
const weeks: Week[] = [
    {
        weekNumber: 1,
        setOfTheWeek: {
            title: "Horns Rifle (and various rifle actions)",
            video: "https://www.instagram.com/reel/DPCDRcEjdSL/",
            description: "Rifle action is most commonly set up by placing a big (or a player whose defender is in a drop off the ball) in the corner, and then \"rifling\" the ball to that player typically followed by an uphill handoff (grenade action). In this specific variation we begin in horns, a ghost flair with a shooter into the rifle with the big followed by another shooter filling the empty space.",
        },
        blobOfTheWeek: {
            title: "Slip Return (Houston vs Purdue)",
            video: "https://youtu.be/OqpSQuv-iOs",
            description: "This play was specifically designed with Purdue's Braden Smith in mind. Often when guarding the inbounds Braden will peel off to guard last second entry passes. Houston attacks this by making the inbounder the target of this inbounds play. "
        },
        slobOfTheWeek: {
            title: "Peja",
            video: "https://youtu.be/AnUmANgdjZ0",
            description: "Simple side out play that has two quick looks, cut to the basket off the back screen, and the shooter coming off the pindown. This action is named after Peja Stojaković who popularized its use in the nba. The peja action is a shooter setting a backscreen and then getting into a dribble hand off or pin. ",
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
            title: "Payton Pritchard discusses his off-season skill development process",
            video: "https://www.instagram.com/p/DEiX85wznQh/",
        },
        drillOfTheWeek: {
            title: "Missouri Finishing Drill",
            description: "Small sided finishing drill designed to challenge a players ability to finish at the rim in a 1v1 advantageous scenario. Defender also gets practice contesting without fouling.",
            video: "https://www.instagram.com/p/DPcP2cFEeWX/",
        },
        podcastOfTheWeek: {
            title: "Understanding Fear and Anxiety in High Performance, Finding Flow States, and Attributions of Success and Failures",
            description: "Dr. Gio Valiante discusses the science behind fear and its relationships with performance and confidence. An excellent listen for anyone, athlete or not, who is interested in better understanding how to manage and understand the body's fear response in an effort to achieve more consistent performance in any field. Dr. Gio also delves into how coaches can best support their athlete's journey by being intentional with language and practice design to best facilitate an environment in which athletes do not develop negative fear responses.",
            link: "https://www.slappinglass.com/2025/01/13/gio_valiante_fear_anxiety_flow_states/",
        },
        bonusVideo: {
            title: "Dealing With Knee Pain",
            video: "https://www.youtube.com/watch?v=jWd9IH4GaRE",
            description: "Isaiah Rivera discusses the science behind healing various forms of tendinopathy focusing on the patella tendon. He is a professional dunker with one of the highest ever recorded vertical jumps. ",
        },
        editorsNote: {
            title: "Coach’s Note",
            story: "First week of Hoop's Dive complete! Looking at beginning another project using machine learning and NBA data to create predictive models. I am thinking either something to do with shot selection, draft selection, offensive/defensive efficiency, etc...",
        },
    },

];

export default weeks;
