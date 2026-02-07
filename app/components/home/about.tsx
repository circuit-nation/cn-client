import { Pen } from "lucide-react"
import ComponentHeading from "../common/component-heading";

export default function About() {
    return (
        <>
            <section className="max-w-5xl mr-auto py-12 space-y-4">
                <div>
                    <ComponentHeading
                        title="Know more about Circuit Nation"
                        subtitle="Learn more about our passion for motorsports and our mission to bring you the best insights and data."
                        badgeText="About Us"
                        badgeIcon={<Pen data-icon="align-start" />}
                    />
                </div>
                <div className="text-justify space-y-6 text-lg leading-relaxed">
                    <p className="first-letter:text-5xl first-letter:text-cn-red first-letter:font-bold first-letter:leading-none">
                        We're a two developers who share a common passion, Motorsports. Our passion for racing, combined with a love for developing websites, inspired us to create this community.
                        Here, you'll find comprehensive graphs and insights, designed to enhance your understanding and enjoyment of the sport of F1. Whether you're a die-hard fan or just getting into racing, our goal is to provide you with the tools and information you need to deepen your connection to the sport.
                    </p>
                    <p>
                        Nostalgic for the V10 era, we'll remain factual and unbiased, focusing solely on delivering accurate data without favoring any team or driver.
                        Join us on this journey through the world of Formula 1, where data meets passion, and every race tells a story.
                    </p>


                    <p>
                        Don't hesitate to contact us on the social networks if you have any suggestions for analyses, stats or data to add to the dashboard.
                    </p>
                </div>
            </section >
        </>
    )
}