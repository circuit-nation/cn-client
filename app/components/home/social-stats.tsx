import type { Icon } from "@tabler/icons-react";
import { motion } from "motion/react";

interface SocialStatData {
    icon: Icon;
    count: number;
    label: string;
    color: string;
    link?: string;
}

interface SocialStatsProps {
    stats: SocialStatData[];
}

const SocialStats = ({ stats }: SocialStatsProps) => {
    return (
        <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.6 + index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <div className={`${stat.color}`}>
                        <stat.icon size={20} />
                    </div>
                    <div className="text-sm font-medium text-foreground">
                        {stat.count}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default SocialStats;