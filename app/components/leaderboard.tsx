import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Trophy, Users } from "lucide-react";
import { motion } from "motion/react";

const f1Drivers = [
    { position: 1, name: "Max Verstappen", team: "Red Bull Racing", points: 575, nationality: "🇳🇱" },
    { position: 2, name: "Lando Norris", team: "McLaren", points: 374, nationality: "🇬🇧" },
    { position: 3, name: "Charles Leclerc", team: "Ferrari", points: 356, nationality: "🇲🇨" },
    { position: 4, name: "Oscar Piastri", team: "McLaren", points: 292, nationality: "🇦🇺" },
    { position: 5, name: "Carlos Sainz", team: "Ferrari", points: 290, nationality: "🇪🇸" },
];

const f1Constructors = [
    { position: 1, name: "McLaren", points: 666, color: "bg-orange-500" },
    { position: 2, name: "Ferrari", points: 652, color: "bg-red-600" },
    { position: 3, name: "Red Bull Racing", points: 597, color: "bg-blue-700" },
    { position: 4, name: "Mercedes", points: 468, color: "bg-teal-400" },
    { position: 5, name: "Aston Martin", points: 94, color: "bg-green-600" },
];

const motoGpRiders = [
    { position: 1, name: "Jorge Martín", team: "Prima Pramac Racing", points: 392, nationality: "🇪🇸" },
    { position: 2, name: "Francesco Bagnaia", team: "Ducati Lenovo Team", points: 382, nationality: "🇮🇹" },
    { position: 3, name: "Marc Márquez", team: "Gresini Racing", points: 340, nationality: "🇪🇸" },
    { position: 4, name: "Enea Bastianini", team: "Ducati Lenovo Team", points: 298, nationality: "🇮🇹" },
    { position: 5, name: "Pedro Acosta", team: "Red Bull GASGAS", points: 209, nationality: "🇪🇸" },
];

const motoGpConstructors = [
    { position: 1, name: "Ducati", points: 876, color: "bg-red-600" },
    { position: 2, name: "KTM", points: 327, color: "bg-orange-500" },
    { position: 3, name: "Aprilia", points: 302, color: "bg-slate-700" },
    { position: 4, name: "Yamaha", points: 144, color: "bg-blue-600" },
    { position: 5, name: "Honda", points: 68, color: "bg-red-500" },
];

const PositionBadge = ({ position, variant }: { position: number; variant: "f1" | "motogp" }) => {
    const colors = {
        1: variant === "f1" ? "bg-red-500" : "bg-blue-800",
        2: "bg-zinc-400",
        3: "bg-amber-700",
    };

    return (
        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${colors[position as keyof typeof colors] || "bg-muted"}`}>
            {position}
        </div>
    );
};

const Leaderboards = () => {
    return (
        <section className="py-20 bg-linear-to-b from-background to-card/50">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">
                        Championship Standings
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Track the battle for glory in both championships
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* F1 Leaderboard */}
                    <motion.div 
                        className="glass-card rounded-2xl p-6 md:p-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-red-500/60">
                                <Trophy className="w-5 h-5" />
                            </div>
                            <h3 className="font-serif text-2xl text-red-500">Formula 1</h3>
                        </div>

                        <Tabs defaultValue="drivers" className="w-full">
                            <TabsList className="w-full grid grid-cols-2 bg-secondary/50 mb-6">
                                <TabsTrigger value="drivers" className="flex items-center gap-2">
                                    <Users className="w-4 h-4" /> Drivers
                                </TabsTrigger>
                                <TabsTrigger value="constructors" className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4" /> Constructors
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="drivers" className="space-y-3">
                                {f1Drivers.map((driver) => (
                                    <div key={driver.position} className="leaderboard-row">
                                        <div className="flex items-center gap-4">
                                            <PositionBadge position={driver.position} variant="f1" />
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-lg">{driver.nationality}</span>
                                                    <span className="font-semibold">{driver.name}</span>
                                                </div>
                                                <span className="text-sm text-muted-foreground">{driver.team}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xl font-bold text-red-200">{driver.points}</span>
                                            <span className="text-sm text-muted-foreground ml-1">pts</span>
                                        </div>
                                    </div>
                                ))}
                            </TabsContent>

                            <TabsContent value="constructors" className="space-y-3">
                                {f1Constructors.map((team) => (
                                    <div key={team.position} className="leaderboard-row">
                                        <div className="flex items-center gap-4">
                                            <PositionBadge position={team.position} variant="f1" />
                                            <div className="flex items-center gap-3">
                                                <div className={`w-3 h-8 rounded-full ${team.color}`} />
                                                <span className="font-semibold">{team.name}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xl font-bold text-red-200">{team.points}</span>
                                            <span className="text-sm text-muted-foreground ml-1">pts</span>
                                        </div>
                                    </div>
                                ))}
                            </TabsContent>
                        </Tabs>
                    </motion.div>

                    {/* MotoGP Leaderboard */}
                    <motion.div 
                        className="glass-card rounded-2xl p-6 md:p-8"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-blue-800/60">
                                <Trophy className="w-5 h-5" />
                            </div>
                            <h3 className="font-serif text-2xl text-blue-800">MotoGP</h3>
                        </div>

                        <Tabs defaultValue="riders" className="w-full">
                            <TabsList className="w-full grid grid-cols-2 bg-secondary/50 mb-6">
                                <TabsTrigger value="riders" className="flex items-center gap-2">
                                    <Users className="w-4 h-4" /> Riders
                                </TabsTrigger>
                                <TabsTrigger value="constructors" className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4" /> Constructors
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="riders" className="space-y-3">
                                {motoGpRiders.map((rider) => (
                                    <div key={rider.position} className="leaderboard-row">
                                        <div className="flex items-center gap-4">
                                            <PositionBadge position={rider.position} variant="motogp" />
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-lg">{rider.nationality}</span>
                                                    <span className="font-semibold">{rider.name}</span>
                                                </div>
                                                <span className="text-sm text-muted-foreground">{rider.team}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xl font-bold text-blue-200">{rider.points}</span>
                                            <span className="text-sm text-muted-foreground ml-1">pts</span>
                                        </div>
                                    </div>
                                ))}
                            </TabsContent>

                            <TabsContent value="constructors" className="space-y-3">
                                {motoGpConstructors.map((team) => (
                                    <div key={team.position} className="leaderboard-row">
                                        <div className="flex items-center gap-4">
                                            <PositionBadge position={team.position} variant="motogp" />
                                            <div className="flex items-center gap-3">
                                                <div className={`w-3 h-8 rounded-full ${team.color}`} />
                                                <span className="font-semibold">{team.name}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xl font-bold text-blue-200">{team.points}</span>
                                            <span className="text-sm text-muted-foreground ml-1">pts</span>
                                        </div>
                                    </div>
                                ))}
                            </TabsContent>
                        </Tabs>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Leaderboards;
