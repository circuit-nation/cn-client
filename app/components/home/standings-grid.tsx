import type { SVGProps } from "react";
import React from "react";
import { Trophy } from "lucide-react";
import { motion } from "motion/react";
import * as Flags from "country-flag-icons/react/3x2";
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
import type { EventCardInfo, EventParsed } from "~/schema";

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

type StandingsPayload = {
    event: EventCardInfo;
    drivers: DriverStanding[];
    teams: TeamStanding[];
};

const driverAvatar = (seed: string) =>
    `https://api.dicebear.com/7.x/identicon/svg?seed=${seed}`;

const teamLogo = (seed: string) =>
    `https://api.dicebear.com/7.x/shapes/svg?seed=${seed}`;

const f1Standings: StandingsPayload = {
    event: {
        name: "Australian Grand Prix",
        location: "Melbourne, Australia",
        countryCode: "AU",
        round: "Round 1",
        dateLabel: "March 14-16, 2026",
        circuit: "Albert Park Circuit",
        laps: "58 laps",
        trackImage: "/assets/circuits/bahrain.png",
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
    event: {
        name: "Qatar Grand Prix",
        location: "Lusail, Qatar",
        countryCode: "QA",
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

const formatEventDateRange = (startAt: string, endAt: string): string | null => {
    // if both are on the same day, just show one date
    const startDate = new Date(startAt);
    const endDate = new Date(endAt);

    if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
        return null;
    }

    const sameMonth =
        startDate.getFullYear() === endDate.getFullYear() &&
        startDate.getMonth() === endDate.getMonth();

    const sameDay = sameMonth && startDate.getDate() === endDate.getDate();

    if (sameDay) {
        return new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        }).format(startDate);
    }

    const monthDay = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
    });
    const dayOnly = new Intl.DateTimeFormat("en-US", { day: "numeric" });
    const yearOnly = new Intl.DateTimeFormat("en-US", { year: "numeric" });

    if (sameMonth) {
        return `${monthDay.format(startDate)}-${dayOnly.format(endDate)}, ${yearOnly.format(endDate)}`;
    }

    return `${monthDay.format(startDate)} - ${monthDay.format(endDate)}, ${yearOnly.format(endDate)}`;
};

type FlagComponent = (props: SVGProps<SVGSVGElement>) => React.JSX.Element;

const getFlagComponent = (countryCode?: string): FlagComponent | null => {
    if (!countryCode) {
        return null;
    }

    const normalizedCode = countryCode.trim().toUpperCase();
    return (Flags as Record<string, FlagComponent>)[normalizedCode] ?? null;
};

const buildEventCardInfo = (
    event: EventParsed | undefined,
    fallback: EventCardInfo,
): EventCardInfo => {
    if (!event) {
        return fallback;
    }

    const dateLabel = formatEventDateRange(event.event_start_at, event.event_end_at);

    return {
        ...fallback,
        name: event.title || fallback.name,
        location: event.circuitData?.location_str || fallback.location,
        countryCode: event.circuitData?.country_code || fallback.countryCode,
        round: event.round ? `Round ${event.round}` : fallback.round,
        dateLabel: dateLabel || fallback.dateLabel,
        circuit: event.circuitData?.name || fallback.circuit,
        laps: event.circuitData?.laps ? `${event.circuitData.laps} laps` : fallback.laps,
        trackImage: event.circuitData?.image || fallback.trackImage,
    };
};

const EventCard = ({
    event,
    className,
}: {
    event: EventCardInfo;
    className?: string;
}) => {
    const Flag = getFlagComponent(event.countryCode);

    return (
        <motion.div
            className={cn("h-full", className)}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
        >
            <div className="flex h-full flex-col">
                <div className="group relative overflow-hidden px-6 pb-4 pt-5">
                    <div
                        className="absolute inset-y-0 right-0 w-2/3 bg-cover bg-right"
                        style={{ backgroundImage: `url(${event.trackImage})` }}
                        aria-hidden="true"
                    />
                    <div
                        className="absolute inset-0 bg-linear-to-r from-card via-card/90 to-card/60"
                        aria-hidden="true"
                    />
                    <div className="relative flex flex-col gap-3">
                        <span className={cn("text-xs font-semibold uppercase tracking-[0.2em]", event.accentClass)}>
                            {event.round}
                        </span>
                        <div className="space-y-1">
                            <h4 className="text-lg font-semibold leading-tight">{event.name}</h4>
                            <div className="flex items-center gap-2 text-sm">
                                {Flag ? (
                                    <Flag
                                        className="aspect-video h-4 w-auto rounded-sm object-cover"
                                        aria-label={`${event.location} flag`}
                                    />
                                ) : null}
                                <span className="font-medium text-muted-foreground">{event.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex-1 border-t px-6 py-4">
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <p className="text-xs uppercase tracking-wide text-muted-foreground">Dates</p>
                            <p className="text-sm font-semibold">{event.dateLabel}</p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-wide text-muted-foreground">Circuit</p>
                            <p className="text-sm font-semibold line-clamp-1">{event.circuit}</p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-wide text-muted-foreground">Distance</p>
                            <p className="text-sm font-semibold">{event.laps}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const StandingsSection = ({
    payload,
    counterData,
    sport,
}: {
    payload: StandingsPayload;
    counterData: EventParsed[];
    sport: "formula" | "motogp";
}) => {
    const f1Data = counterData.find((event) => event.sportData?.type === "formula");
    const motoGpData = counterData.find((event) => event.sportData?.type === "motogp");
    const countdownData = sport === "formula" ? f1Data : motoGpData;
    const eventCard = buildEventCardInfo(countdownData, payload.event);
    return (
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
            <Card className="lg:col-span-1 flex h-full flex-col overflow-hidden border bg-card/80">
                <motion.div
                    className="border-b"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {countdownData && (
                        <RaceCountdownCounter
                            title={countdownData.sportData?.name || (sport === "formula" ? "Formula 1" : "MotoGP")}
                            subtitle={countdownData.title}
                            targetDate={new Date(countdownData.event_start_at)}
                            accentClass={sport === "formula" ? "text-cn-red" : "text-cn-blue"}
                            backgroundImage={
                                sport === "formula"
                                    ? "/assets/f1-car.png"
                                    : "/assets/motogp-bike.png"
                            }
                        />
                    )}
                </motion.div>
                <div className="flex-1">
                    <EventCard event={eventCard} />
                </div>
            </Card>
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
}

type LeaderboardsProps = {
    counterData: EventParsed[];
}

const Leaderboards = ({ counterData }: LeaderboardsProps) => {
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
                        <StandingsSection
                            counterData={counterData}
                            payload={f1Standings}
                            sport="formula"
                        />
                    </TabsContent>
                    <TabsContent value="motogp" className="mt-0">
                        <StandingsSection
                            counterData={counterData}
                            payload={motoGpStandings}
                            sport="motogp"
                        />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default Leaderboards;