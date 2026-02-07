import { IconBrandInstagram as Instagram, IconBrandYoutube as Youtube, IconBrandReddit as Reddit } from "@tabler/icons-react"; import { motion } from "motion/react";
import { RaceCountdownCounter } from "~/components/common/counter";
import UpdateCard from "../common/update-card";


const socialStats = [
    { icon: Reddit, count: "125K+", label: "Members", color: "text-cn-orange" },
    { icon: Instagram, count: "89K+", label: "Followers", color: "text-cn-pink" },
    { icon: Youtube, count: "210K+", label: "Subscribers", color: "text-cn-red" },
];

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-48 lg:pt-0">
            {/* Content */}
            <div className="relative z-10 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Column */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
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
                            {socialStats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-2"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.6 + index * 0.1,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                >
                                    <div className={`${stat.color}`}>
                                        <stat.icon />
                                    </div>
                                    <div className="text-sm font-medium text-foreground">{stat.count}</div>
                                </motion.div>
                            ))}
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
                                    <RaceCountdownCounter
                                        title="Formula 1"
                                        subtitle="Next race · Mar 6"
                                        targetDate={new Date("2026-03-06T14:00:00")}
                                        accentClass="text-cn-red"
                                    />
                                    <RaceCountdownCounter
                                        title="MotoGP"
                                        subtitle="Next race · Feb 20"
                                        targetDate={new Date("2026-02-20T14:00:00")}
                                        accentClass="text-cn-blue"
                                    />
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
