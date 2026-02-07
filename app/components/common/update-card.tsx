import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "../ui/badge";
import { MonitorPlay, Megaphone, Newspaper } from "lucide-react";

export default function UpdateCard() {
    const updates = [
        {
            type: "video",
            title: "Behind the pit wall",
            description: "A quick breakdown of strategy calls and race pace insights.",
            accent: "cn-red",
        },
        {
            type: "article",
            title: "MotoGP tech deep dive",
            description: "Exploring the latest aero upgrades across the grid.",
            accent: "cn-blue",
        },
        {
            type: "update",
            title: "Community spotlight",
            description: "Celebrate fan builds, art, and meetups across the world.",
            accent: "cn-orange",
        },
    ];

    const icon: { [key: string]: any } = {
        video: MonitorPlay,
        article: Newspaper,
        update: Megaphone,
    }

    const selectedUpdate = updates[0];
    const SelectedIcon = icon[selectedUpdate.type];
    return (
        <Card className="h-full border-muted/30 bg-background/70 shadow-sm overflow-hidden pb-4 pt-1">
            <CardHeader className="gap-3">
                <div className="relative aspect-video overflow-hidden rounded-lg border border-muted/20">
                    <img
                        src="https://picsum.photos/800/480"
                        alt="Update cover"
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                </div>
                <Badge className={`border border-${selectedUpdate.accent}`} variant={"secondary"}>
                    <SelectedIcon data-icon="inline-start" />
                    {selectedUpdate.type.slice(0, 1).toUpperCase() + selectedUpdate.type.slice(1)}
                </Badge>
                <CardTitle className="text-lg text-foreground">{selectedUpdate.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">{selectedUpdate.description}</p>
            </CardContent>
        </Card>
    );
}