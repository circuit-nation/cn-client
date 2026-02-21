import { IconBrandInstagram as Instagram, IconBrandYoutube as Youtube, IconBrandReddit as Reddit } from "@tabler/icons-react";
import { motion } from "motion/react";
import { RaceCountdownCounter } from "~/components/common/counter";
import UpdateCard from "../common/update-card";
import type { EventParsed } from "~/schema";
import SocialStats from "./social-stats";

interface HeroPageProps {
    counterData: EventParsed[]; // Array of upcoming events with parsed data
    socialStats: {
        reddit: number;
        youtube: number;
        instagram: number;
    };
}

const Hero = (props: HeroPageProps) => {
    const { counterData, socialStats } = props;

    const f1Data = counterData.find(event => event.sportData?.type === "formula");
    const motoGpData = counterData.find(event => event.sportData?.type === "motogp");

    const stats = [
        { label: "reddit", count: socialStats.reddit, icon: Reddit, color: "text-cn-orange" },
        { label: "youtube", count: socialStats.youtube, icon: Youtube, color: "text-cn-red" },
        { label: "instagram", count: socialStats.instagram, icon: Instagram, color: "text-cn-pink" },
    ]

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-48 lg:pt-0">
            {/* Content */}
            <div className="relative z-10 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Column */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Logo/Brand */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight">
                                Ultimate Hub for
                                <span className="text-cn-red"> Everything</span>
                                <span className="text-cn-blue"> Motorsports</span>
                            </h1>
                        </motion.div>

                        {/* Social Stats */}
                        <motion.div
                            className="flex items-center gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <SocialStats stats={stats} />
                        </motion.div>

                        {/* CTA Button */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <button className="px-8 py-3 bg-foreground text-background font-medium rounded-md hover:opacity-90 transition-opacity">
                                Join Community
                            </button>
                        </motion.div> */}
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="w-full rounded-xl border border-border p-4">
                            <div className="grid h-auto gap-4">
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    {f1Data && (
                                        <RaceCountdownCounter
                                            title={f1Data.sportData?.name || "Formula 1"}
                                            subtitle={f1Data.title}
                                            targetDate={new Date(f1Data.event_start_at)}
                                            accentClass="text-cn-red"
                                            backgroundImage="/assets/f1-car.png"
                                        />
                                    )}
                                    {motoGpData && (
                                        <RaceCountdownCounter
                                            title={motoGpData.sportData?.name || "MotoGP"}
                                            subtitle={motoGpData.title}
                                            targetDate={new Date(motoGpData.event_start_at)}
                                            accentClass="text-cn-blue"
                                            backgroundImage="/assets/motogp-bike.png"
                                        />
                                    )}
                                </div>

                                <div className="grid grid-cols-1">
                                    <UpdateCard />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
