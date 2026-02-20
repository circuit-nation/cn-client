import { Pen } from "lucide-react"
import { motion } from "motion/react"
import ComponentHeading from "../common/component-heading";

export default function About() {
    return (
        <>
            <section className="max-w-5xl mr-auto py-12 space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <ComponentHeading
                        title="Know more about Circuit Nation"
                        subtitle="Learn more about our passion for motorsports and our mission to bring you the best insights and data."
                        badgeText="About Us"
                        badgeIcon={<Pen data-icon="align-start" />}
                    />
                </motion.div>
                <div className="text-justify space-y-6 text-lg leading-relaxed">
                    <motion.p
                        className="first-letter:text-5xl first-letter:text-cn-red first-letter:font-bold first-letter:leading-none"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        We're a two developers who share a common passion, Motorsports. Our passion for racing, combined with a love for developing websites, inspired us to create this community.
                        Here, you'll find comprehensive graphs and insights, designed to enhance your understanding and enjoyment of the sport of F1. Whether you're a die-hard fan or just getting into racing, our goal is to provide you with the tools and information you need to deepen your connection to the sport.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        Nostalgic for the V10 era, we'll remain factual and unbiased, focusing solely on delivering accurate data without favoring any team or driver.
                        Join us on this journey through the world of Formula 1, where data meets passion, and every race tells a story.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        Don't hesitate to contact us on the social networks if you have any suggestions for analyses, stats or data to add to the dashboard.
                    </motion.p>
                </div>
                <motion.div
                    className="font-handwriting flex gap-8 text-5xl mt-8"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <h3>Piyush Sharma</h3>
                    <h3>&</h3>
                    <h3>Pranav Tripathi</h3>
                </motion.div>
            </section >
        </>
    )
}