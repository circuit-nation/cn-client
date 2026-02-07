import { Instagram, Youtube } from "lucide-react";
import { motion } from "motion/react";

const RedditIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
    </svg>
);

const socialStats = [
    { icon: RedditIcon, count: "125K+", label: "Members", color: "text-cn-orange" },
    { icon: Instagram, count: "89K+", label: "Followers", color: "text-cn-pink" },
    { icon: Youtube, count: "210K+", label: "Subscribers", color: "text-cn-red" },
];

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-background via-background to-muted/20">
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
                                {/* <span className="text-cn-red">Circuit</span>{" "}
                <span className="text-cn-blue-dark">Nation</span> */}
                                Ultimate Hub for
                                <span className="text-cn-red"> Everything</span>
                                <span className="text-cn-blue"> Motorsports</span>
                            </h1>
                        </motion.div>

                        {/* Tagline */}
                        {/* <motion.p
              className="text-lg md:text-xl text-muted-foreground font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Ultimate Hub for Everything Motorsports
            </motion.p> */}

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
                                    <div className={`${stat.color} w-5 h-5`}>
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

                    {/* Right Column - Placeholder */}
                    <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="w-full h-150 rounded-xl border-2 border-dashed border-muted-foreground/20 flex items-center justify-center bg-muted/10">
                            <p className="text-muted-foreground text-lg">Content Placeholder</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
