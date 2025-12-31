import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
    const difference = +targetDate - +new Date();

    if (difference > 0) {
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

const CountdownUnit = ({ value, label, variant }: { value: number; label: string; variant: "f1" | "motogp" }) => (
    <div className={`flex flex-col items-center p-4 rounded-xl ${variant === "f1" ? "bg-red-500/20" : "bg-blue-500/20"}`}>
        <span className={`text-4xl md:text-5xl font-bold font-sans ${variant === "f1" ? "text-red-500" : "text-blue-500"}`}>
            {value.toString().padStart(2, "0")}
        </span>
        <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{label}</span>
    </div>
);

interface RaceCountdownProps {
    f1Image: string;
    motoGpImage: string;
}

const RaceCountdown = ({ f1Image, motoGpImage }: RaceCountdownProps) => {
    // Race dates (example dates - upcoming races)
    const f1RaceDate = new Date("2025-01-19T14:00:00");
    const motoGpRaceDate = new Date("2025-03-02T13:00:00");

    const [f1TimeLeft, setF1TimeLeft] = useState<TimeLeft>(calculateTimeLeft(f1RaceDate));
    const [motoGpTimeLeft, setMotoGpTimeLeft] = useState<TimeLeft>(calculateTimeLeft(motoGpRaceDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setF1TimeLeft(calculateTimeLeft(f1RaceDate));
            setMotoGpTimeLeft(calculateTimeLeft(motoGpRaceDate));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">
                        Upcoming Races
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Never miss a race. Countdown to the next grand prix.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Tabs defaultValue="f1" className="w-full max-w-5xl mx-auto">
                        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-secondary/50 p-1 mb-8">
                            <TabsTrigger value="f1" className="race-tab-f1 data-[state=active]:text-foreground">
                                Formula 1
                            </TabsTrigger>
                            <TabsTrigger value="motogp" className="race-tab-motogp data-[state=active]:text-foreground">
                                MotoGP
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="f1" className="animate-fade-in">
                        <div className="glass-card rounded-2xl overflow-hidden glow-f1">
                            <div className="relative h-64 md:h-80">
                                <img
                                    src={f1Image}
                                    alt="Formula 1 Car"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
                                <div className="absolute bottom-4 left-6">
                                    <span className="bg-red-500 text-foreground px-3 py-1 rounded-full text-sm font-semibold">
                                        Formula 1
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 md:p-8">
                                <h3 className="font-serif text-2xl md:text-3xl mb-2">Australian Grand Prix</h3>
                                <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                                    <span className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        Melbourne, Australia
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        Jan 19, 2025
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        14:00 Local Time
                                    </span>
                                </div>

                                <div className="grid grid-cols-4 gap-3 md:gap-4">
                                    <CountdownUnit value={f1TimeLeft.days} label="Days" variant="f1" />
                                    <CountdownUnit value={f1TimeLeft.hours} label="Hours" variant="f1" />
                                    <CountdownUnit value={f1TimeLeft.minutes} label="Minutes" variant="f1" />
                                    <CountdownUnit value={f1TimeLeft.seconds} label="Seconds" variant="f1" />
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="motogp" className="animate-fade-in">
                        <div className="glass-card rounded-2xl overflow-hidden glow-motogp">
                            <div className="relative h-64 md:h-80">
                                <img
                                    src={motoGpImage}
                                    alt="MotoGP Bike"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
                                <div className="absolute bottom-4 left-6">
                                    <span className="bg-blue-800 text-foreground px-3 py-1 rounded-full text-sm font-semibold">
                                        MotoGP
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 md:p-8">
                                <h3 className="font-serif text-2xl md:text-3xl mb-2">Qatar Grand Prix</h3>
                                <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                                    <span className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        Lusail, Qatar
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        Mar 2, 2025
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        13:00 Local Time
                                    </span>
                                </div>

                                <div className="grid grid-cols-4 gap-3 md:gap-4">
                                    <CountdownUnit value={motoGpTimeLeft.days} label="Days" variant="motogp" />
                                    <CountdownUnit value={motoGpTimeLeft.hours} label="Hours" variant="motogp" />
                                    <CountdownUnit value={motoGpTimeLeft.minutes} label="Minutes" variant="motogp" />
                                    <CountdownUnit value={motoGpTimeLeft.seconds} label="Seconds" variant="motogp" />
                                </div>
                            </div>
                        </div>
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </div>
        </section>
    );
};

export default RaceCountdown;
