// types.ts

export interface ContentBlock {
    title: string;
    video?: string | null;
    description?: string | null;
}

export interface QuoteBlock {
    text: string;
    video?: string | null;
}

export interface PodcastBlock {
    title: string;
    description: string;
    link: string;
}

export interface EditorsNote {
    title: string;
    story: string;
}

export interface Week {
    weekNumber: number;
    setOfTheWeek: ContentBlock;
    blobOfTheWeek: ContentBlock;
    slobOfTheWeek: ContentBlock;
    quoteSports: QuoteBlock;
    quotePhilosophy: QuoteBlock;
    basketballReel: ContentBlock;
    drillOfTheWeek: ContentBlock;
    podcastOfTheWeek: PodcastBlock;
    bonusVideo: ContentBlock;
    editorsNote: EditorsNote;
}

export interface WeeksData {
    weeks: Week[];
}
