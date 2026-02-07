import { motion } from "motion/react";
import { Badge } from "~/components/ui/badge";

type ComponentHeadingProps = {
    title: string;
    subtitle: string;
    badgeIcon: React.ReactNode;
    badgeText: string;
};

export default function ComponentHeading({
    title,
    subtitle,
    badgeIcon,
    badgeText,
}: ComponentHeadingProps) {
    return (
        <motion.div
            className="text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <Badge variant="secondary" className="mb-4 gap-2 border border-muted/50">
                {badgeIcon}
                {badgeText}
            </Badge>
            <h2 className="text-xl md:text-3xl font-medium tracking-tight">
                {title}
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
                {subtitle}
            </p>
        </motion.div>
    );
}   