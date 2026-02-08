import { Trophy } from "lucide-react";
import { motion } from "motion/react";
import ComponentHeading from "../common/component-heading";
import { RaceCountdownCounter } from "../common/counter";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";
import { cn } from "~/lib/utils";

type DriverStanding = {
    position: number;
    name: string;
    team: string;
    nationality: string;
    points: number;
    driverImage: string;
    teamLogo: string;
    teamColor: string;
};

type TeamStanding = {
    position: number;
    name: string;
    points: number;
    teamLogo: string;
    teamColor: string;
};

type EventInfo = {
    name: string;
    location: string;
    round: string;
    dateLabel: string;
    circuit: string;
    laps: string;
    trackImage: string;
    accentClass: string;
};

type StandingsPayload = {
    counter: {
        title: string;
        subtitle?: string;
        targetDate: Date;
        accentClass: string;
        backgroundImage: string;
    };
    event: EventInfo;
    drivers: DriverStanding[];
    teams: TeamStanding[];
};

const driverAvatar = (seed: string) =>
    `https://api.dicebear.com/7.x/identicon/svg?seed=${seed}`;

const teamLogo = (seed: string) =>
    `https://api.dicebear.com/7.x/shapes/svg?seed=${seed}`;

const f1Standings: StandingsPayload = {
    counter: {
        title: "Formula 1",
        targetDate: new Date("2026-03-14T04:00:00Z"),
        accentClass: "text-cn-red",
        backgroundImage: "/assets/f1-car.png",
    },
    event: {
        name: "Australian Grand Prix",
        location: "Melbourne, Australia",
        round: "Round 1",
        dateLabel: "March 14-16, 2026",
        circuit: "Albert Park Circuit",
        laps: "58 laps",
        trackImage: "/assets/circuits/australia.png",
        accentClass: "text-cn-red",
    },
    drivers: [
        {
            position: 1,
            name: "Max Verstappen",
            team: "Red Bull Racing",
            nationality: "🇳🇱",
            points: 98,
            driverImage: driverAvatar("verstappen"),
            teamLogo: teamLogo("redbull"),
            teamColor: "var(--team-f1-redbull)",
        },
        {
            position: 2,
            name: "Lando Norris",
            team: "McLaren",
            nationality: "🇬🇧",
            points: 88,
            driverImage: driverAvatar("norris"),
            teamLogo: teamLogo("mclaren"),
            teamColor: "var(--team-f1-mclaren)",
        },
        {
            position: 3,
            name: "Charles Leclerc",
            team: "Ferrari",
            nationality: "🇲🇨",
            points: 82,
            driverImage: driverAvatar("leclerc"),
            teamLogo: teamLogo("ferrari"),
            teamColor: "var(--team-f1-ferrari)",
        },
        {
            position: 4,
            name: "George Russell",
            team: "Mercedes",
            nationality: "🇬🇧",
            points: 71,
            driverImage: driverAvatar("russell"),
            teamLogo: teamLogo("mercedes"),
            teamColor: "var(--team-f1-mercedes)",
        },
        {
            position: 5,
            name: "Oscar Piastri",
            team: "McLaren",
            nationality: "🇦🇺",
            points: 69,
            driverImage: driverAvatar("piastri"),
            teamLogo: teamLogo("mclaren-2"),
            teamColor: "var(--team-f1-mclaren)",
        },
    ],
    teams: [
        {
            position: 1,
            name: "Red Bull Racing",
            points: 186,
            teamLogo: teamLogo("redbull"),
            teamColor: "var(--team-f1-redbull)",
        },
        {
            position: 2,
            name: "McLaren",
            points: 157,
            teamLogo: teamLogo("mclaren"),
            teamColor: "var(--team-f1-mclaren)",
        },
        {
            position: 3,
            name: "Ferrari",
            points: 148,
            teamLogo: teamLogo("ferrari"),
            teamColor: "var(--team-f1-ferrari)",
        },
        {
            position: 4,
            name: "Mercedes",
            points: 119,
            teamLogo: teamLogo("mercedes"),
            teamColor: "var(--team-f1-mercedes)",
        },
        {
            position: 5,
            name: "Aston Martin",
            points: 88,
            teamLogo: teamLogo("aston"),
            teamColor: "var(--team-f1-aston)",
        },
    ],
};

const motoGpStandings: StandingsPayload = {
    counter: {
        title: "MotoGP",
        targetDate: new Date("2026-03-07T17:00:00Z"),
        accentClass: "text-cn-blue-dark",
        backgroundImage: "/assets/motogp-bike.png",
    },
    event: {
        name: "Qatar Grand Prix",
        location: "Lusail, Qatar",
        round: "Round 1",
        dateLabel: "March 7-9, 2026",
        circuit: "Lusail International Circuit",
        laps: "22 laps",
        trackImage: "/assets/circuits/australia.png",
        accentClass: "text-cn-blue-dark",
    },
    drivers: [
        {
            position: 1,
            name: "Francesco Bagnaia",
            team: "Ducati Lenovo",
            nationality: "🇮🇹",
            points: 92,
            driverImage: driverAvatar("bagnaia"),
            teamLogo: teamLogo("ducati"),
            teamColor: "var(--team-motogp-ducati)",
        },
        {
            position: 2,
            name: "Jorge Martín",
            team: "Prima Pramac",
            nationality: "🇪🇸",
            points: 86,
            driverImage: driverAvatar("martin"),
            teamLogo: teamLogo("pramac"),
            teamColor: "var(--team-motogp-pramac)",
        },
        {
            position: 3,
            name: "Marc Márquez",
            team: "Gresini Racing",
            nationality: "🇪🇸",
            points: 74,
            driverImage: driverAvatar("marquez"),
            teamLogo: teamLogo("gresini"),
            teamColor: "var(--team-motogp-gresini)",
        },
        {
            position: 4,
            name: "Brad Binder",
            team: "Red Bull KTM",
            nationality: "🇿🇦",
            points: 69,
            driverImage: driverAvatar("binder"),
            teamLogo: teamLogo("ktm"),
            teamColor: "var(--team-motogp-ktm)",
        },
        {
            position: 5,
            name: "Pedro Acosta",
            team: "GASGAS Factory",
            nationality: "🇪🇸",
            points: 63,
            driverImage: driverAvatar("acosta"),
            teamLogo: teamLogo("gasgas"),
            teamColor: "var(--team-motogp-gasgas)",
        },
    ],
    teams: [
        {
            position: 1,
            name: "Ducati",
            points: 161,
            teamLogo: teamLogo("ducati"),
            teamColor: "var(--team-motogp-ducati)",
        },
        {
            position: 2,
            name: "KTM",
            points: 121,
            teamLogo: teamLogo("ktm"),
            teamColor: "var(--team-motogp-ktm)",
        },
        {
            position: 3,
            name: "Aprilia",
            points: 103,
            teamLogo: teamLogo("aprilia"),
            teamColor: "var(--team-motogp-aprilia)",
        },
        {
            position: 4,
            name: "Yamaha",
            points: 82,
            teamLogo: teamLogo("yamaha"),
            teamColor: "var(--team-motogp-yamaha)",
        },
        {
            position: 5,
            name: "Honda",
            points: 74,
            teamLogo: teamLogo("honda"),
            teamColor: "var(--team-motogp-honda)",
        },
    ],
};

const DriverTable = ({ rows }: { rows: DriverStanding[] }) => (
    <Table>
        <TableHeader>
            <TableRow className="border-muted/60">
                <TableHead className="w-10">#</TableHead>
                <TableHead>Driver</TableHead>
                <TableHead className="text-right">Pts</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {rows.map((row) => {
                const isLeader = row.position === 1;
                return (
                    <TableRow
                        key={row.position}
                        className={cn(
                            "border-b",
                            isLeader && "bg-muted/40 text-base",
                        )}
                    >
                        <TableCell className="font-semibold text-muted-foreground">
                            {row.position}
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <div
                                    className="h-10 w-1 rounded-full"
                                    style={{ backgroundColor: row.teamColor }}
                                />
                                <Avatar size={isLeader ? "lg" : "default"}>
                                    <AvatarImage src={row.driverImage} alt={row.name} />
                                    <AvatarFallback>{row.name.split(" ").map((part) => part[0]).join("")}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className={cn("font-semibold", isLeader && "text-foreground")}>{row.name}</span>
                                    </div>
                                    <span className="text-xs text-muted-foreground">{row.team}</span>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell className="text-right">
                            <span className={cn("font-semibold", isLeader && "text-lg")}>{row.points}</span>
                        </TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    </Table>
);

const TeamTable = ({ rows }: { rows: TeamStanding[] }) => (
    <Table>
        <TableHeader>
            <TableRow className="border-muted/60">
                <TableHead className="w-10">#</TableHead>
                <TableHead>Team</TableHead>
                <TableHead className="text-right">Pts</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {rows.map((row) => {
                const isLeader = row.position === 1;
                return (
                    <TableRow
                        key={row.position}
                        className={cn(
                            "border-b",
                            isLeader && "bg-muted/40 text-base"
                        )}
                    >
                        <TableCell className="font-semibold text-muted-foreground">
                            {row.position}
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <div
                                    className="h-10 w-1 rounded-full"
                                    style={{ backgroundColor: row.teamColor }}
                                />
                                <img
                                    src={row.teamLogo}
                                    alt={`${row.name} logo`}
                                    className={cn(
                                        "size-7 rounded-md bg-muted/50 p-1",
                                        isLeader && "size-8"
                                    )}
                                />
                                <span className={cn("font-semibold", isLeader && "text-foreground")}>{row.name}</span>
                            </div>
                        </TableCell>
                        <TableCell className="text-right">
                            <span className={cn("font-semibold", isLeader && "text-lg")}>{row.points}</span>
                        </TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    </Table>
);

const EventCard = ({ event }: { event: EventInfo }) => (
    <motion.div
        className="h-full"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-80px" }}
    >
        <Card className="border-none flex h-full flex-col">
            <CardHeader className="flex flex-col justify-between md:flex-row">
                <div className="flex flex-col justify-end">
                    <span className={cn("text-sm font-semibold uppercase tracking-tighter", event.accentClass)}>
                        {event.round}
                    </span>
                    <h4 className="text-lg font-semibold">{event.name}</h4>
                </div>
                <div>
                    <img
                        src={event.trackImage}
                        alt={`${event.name} track`}
                        className="h-18 w-full object-cover"
                        loading="lazy"
                    />
                </div>
            </CardHeader>
            <CardContent className="flex h-full flex-col gap-4">
                <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold">{event.location}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <p className="text-xs text-muted-foreground">Dates</p>
                        <p className="text-sm font-semibold">{event.dateLabel}</p>
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground">Circuit</p>
                        <p className="text-sm font-semibold line-clamp-1">{event.circuit}</p>
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground">Distance</p>
                        <p className="text-sm font-semibold">{event.laps}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    </motion.div>
);

const StandingsSection = ({ payload }: { payload: StandingsPayload }) => (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-1 border rounded-lg flex h-full flex-col gap-4">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-80px" }}
            >
                <RaceCountdownCounter
                    title={payload.counter.title}
                    subtitle={payload.counter.subtitle}
                    targetDate={payload.counter.targetDate}
                    accentClass={payload.counter.accentClass}
                    backgroundImage={payload.counter.backgroundImage}
                />
            </motion.div>
            <div className="flex-1">
                <EventCard event={payload.event} />
            </div>
        </div>
        <div className="lg:col-span-2 grid gap-4 lg:grid-cols-2">
            <motion.div
                className="h-full"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-80px" }}
            >
                <Card className="border bg-card/80 flex h-full flex-col">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-lg">Driver Standings</CardTitle>
                        <p className="text-sm text-muted-foreground">Top 5 in the championship</p>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <DriverTable rows={payload.drivers} />
                    </CardContent>
                </Card>
            </motion.div>
            <motion.div
                className="h-full"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-80px" }}
            >
                <Card className="border bg-card/80 flex h-full flex-col">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-lg">Team Standings</CardTitle>
                        <p className="text-sm text-muted-foreground">Constructor rankings, top 5</p>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <TeamTable rows={payload.teams} />
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    </div>
);

const Leaderboards = () => {
    return (
        <section className="py-20">
            <div className="mx-auto px-4 space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <ComponentHeading
                        title="Points and Leaders"
                        subtitle="Bento-style view of the latest standings with the next race countdown and event details."
                        badgeText="Standings"
                        badgeIcon={<Trophy data-icon="inline-start" />}
                    />
                </motion.div>

                <Tabs defaultValue="f1" className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        <TabsList className="mb-3 grid w-full grid-cols-2 bg-secondary/50">
                            <TabsTrigger value="f1">Formula 1</TabsTrigger>
                            <TabsTrigger value="motogp">MotoGP</TabsTrigger>
                        </TabsList>
                    </motion.div>
                    <TabsContent value="f1" className="mt-0">
                        <StandingsSection payload={f1Standings} />
                    </TabsContent>
                    <TabsContent value="motogp" className="mt-0">
                        <StandingsSection payload={motoGpStandings} />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default Leaderboards;
