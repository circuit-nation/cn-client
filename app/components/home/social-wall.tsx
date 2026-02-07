import { Instagram, Heart, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

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
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="inline-flex items-center gap-2 mb-4">
                        <Instagram className="w-8 h-8 text-cn-pink" />
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
                            Social Wall
                        </h2>
                    </div>
                    <p className="text-muted-foreground text-lg">
                        Latest from our Instagram community
                    </p>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-cn-pink hover:text-cn-pink/80 transition-colors"
                    >
                        @circuitnation
                        <span className="text-muted-foreground">• Follow us</span>
                    </a>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.05,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <img
                                src={post.image}
                                alt={post.caption}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="flex items-center gap-1 text-sm">
                                        <Heart className="w-4 h-4 text-cn-red fill-cn-red" />
                                        {post.likes}
                                    </span>
                                    <span className="flex items-center gap-1 text-sm">
                                        <MessageCircle className="w-4 h-4" />
                                        {post.comments}
                                    </span>
                                </div>
                                <p className="text-xs text-center text-muted-foreground line-clamp-2">
                                    {post.caption}
                                </p>
                            </div>

                            {/* Instagram icon */}
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Instagram className="w-5 h-5 text-foreground" />
                            </div>
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
                        className="inline-flex items-center gap-2 glass-card px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
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
