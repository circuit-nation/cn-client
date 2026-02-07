import type { Route } from "./+types/calendar";
import { MotorsportCalendar } from '~/components/calendar';
import { Logo } from "~/components/common/logo";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Calendar | Circuit Nation" },
        { name: "description", content: "Stay updated with the latest F1 and MotoGP events on Circuit Nation's calendar." },
    ];
}

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border bg-card">
                <div className="flex items-center justify-between max-w-6xl mx-auto px-4 py-4">
                    <div className="flex items-center gap-3">
                        <div className="size-16 ">
                            <Logo />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-foreground">Circuit Nation</h1>
                            <p className="text-sm text-muted-foreground">Ultimate Hub for Everything Motorsports</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container max-w-6xl mx-auto px-4 py-6">
                <MotorsportCalendar />
            </main>

        </div>
    );
};

export default Index;
