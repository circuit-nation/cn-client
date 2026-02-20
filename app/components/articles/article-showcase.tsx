import ArticleCard from "./article-card"
import ComponentHeading from "../common/component-heading"
import { Newspaper } from "lucide-react"
import { motion } from "motion/react"

const articles = [
    {
        title: "Ferrari's late surge lights up Saturday qualifying",
        link: "/",
        description:
            "A final-sector flyer flips the front row in a session packed with traffic, track evolution, and bold tire calls.",
        imageUrl:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        publishedAt: Date.now() - 1000 * 60 * 60 * 6,
        tags: ["f1", "qualifying", "ferrari"],
        views: 18420,
    },
    {
        title: "Red Bull nails race setup after FP2 experiments",
        link: "/",
        description:
            "Long-run data hints at tire management gains as teams weigh a one-stop gamble against late-race pace.",
        imageUrl:
            "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
        publishedAt: Date.now() - 1000 * 60 * 60 * 18,
        tags: ["f1", "race-day", "strategy"],
        views: 26310,
    },
    {
        title: "Martin edges Bagnaia in razor-thin sprint finish",
        link: "/",
        description:
            "MotoGP delivers a photo finish after a late braking duel that saw both riders swap positions twice in two laps.",
        imageUrl:
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
        publishedAt: Date.now() - 1000 * 60 * 60 * 28,
        tags: ["motogp", "sprint", "ducati"],
        views: 14780,
    },
    {
        title: "Yamaha's aero update brings mid-corner stability",
        link: "/",
        description:
            "Riders report calmer front-end feedback, unlocking a smoother line through high-speed direction changes.",
        imageUrl:
            "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
        publishedAt: Date.now() - 1000 * 60 * 60 * 40,
        tags: ["motogp", "tech", "yamaha"],
        views: 9320,
    },
]

export default function ArticleShowcase() {
    return (
        <>
            <div className="space-y-4" id="articles">
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <ComponentHeading
                        title="Our thoughts out loud"
                        subtitle="Stay up to speed with the latest news, insights, and analysis from the world of motorsports."
                        badgeText="Articles"
                        badgeIcon={<Newspaper data-icon="align-start" />}
                    />
                </motion.div>
                <motion.section
                    className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {articles.map((article) => (
                        <ArticleCard key={article.title} {...article} />
                    ))}
                </motion.section>
            </div>
        </>
    )
}
