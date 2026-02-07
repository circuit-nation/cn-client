import { Heart, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import { IconBrandInstagram as Instagram } from "@tabler/icons-react";
import ComponentHeading from "../common/component-heading";

interface Post {
    id: number;
    image: string;
    likes: string;
    comments: string;
    caption: string;
}

const posts: Post[] = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=400&fit=crop",
        likes: "12.4K",
        comments: "234",
        caption: "Race day vibes! 🏎️ Who's ready for the showdown?",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        likes: "8.9K",
        comments: "156",
        caption: "Behind the scenes at the paddock 🔧",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1541447271487-09612b3f49f7?w=400&h=400&fit=crop",
        likes: "15.2K",
        comments: "342",
        caption: "That winning moment! 🏆",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=400&h=400&fit=crop",
        likes: "10.1K",
        comments: "189",
        caption: "Track walk with the community 🚶‍♂️",
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=400&h=400&fit=crop",
        likes: "7.3K",
        comments: "98",
        caption: "Sunset at the circuit 🌅",
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=400&fit=crop",
        likes: "11.8K",
        comments: "267",
        caption: "Speed demons in action! 💨",
    },
];

const SocialWall = () => {
    return (
        <section className="py-20">
            <div className="mx-auto px-4 space-y-4">
                <div>
                    <ComponentHeading
                        title="Social Wall"
                        subtitle="Catch the latest from our Instagram feed and join the conversation with fellow motorsport enthusiasts!"
                        badgeText="Instagram"
                        badgeIcon={<Instagram data-icon="align-start" />}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            className="group"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.05,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <Card className="overflow-hidden border-muted/40 bg-background/80 shadow-sm pb-4 pt-1">
                                <div className="relative">
                                    <img
                                        src={post.image}
                                        alt={post.caption}
                                        className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                                <CardHeader className="gap-2">
                                    <CardTitle className="text-base line-clamp-1">
                                        {post.caption}
                                    </CardTitle>
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                        <span className="inline-flex items-center gap-1">
                                            <Heart className="h-4 w-4 text-cn-red fill-cn-red" />
                                            {post.likes}
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <MessageCircle className="h-4 w-4" />
                                            {post.comments}
                                        </span>
                                    </div>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border border-muted/50 bg-background/80 hover:scale-105 transition-transform duration-300"
                    >
                        <Instagram className="w-5 h-5 text-cn-pink" />
                        View More on Instagram
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default SocialWall;
