import NumberFlow from "@number-flow/react";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Card, CardAction, CardContent, CardHeader } from "~/components/ui/card";
import { Button } from "../ui/button";

type TimeLeft = {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
};

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
	const difference = +targetDate - +new Date();

	if (difference <= 0) {
		return { days: 0, hours: 0, minutes: 0, seconds: 0 };
	}

	return {
		days: Math.floor(difference / (1000 * 60 * 60 * 24)),
		hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((difference / 1000 / 60) % 60),
		seconds: Math.floor((difference / 1000) % 60),
	};
};

const CountdownUnit = ({ value, label, accentClass }: { value: number; label: string; accentClass: string }) => (
	<motion.div
		className="flex flex-col items-center rounded-lg bg-muted/20 px-3 py-2"
		initial={{ opacity: 0, y: 6 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
	>
		<NumberFlow value={value} className={`text-2xl font-semibold ${accentClass}`} />
		<span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
	</motion.div>
);

interface RaceCountdownCounterProps {
	title: string;
	targetDate: Date;
	accentClass: string;
	subtitle?: string;
}

const RaceCountdownCounter = ({ title, subtitle, targetDate, accentClass }: RaceCountdownCounterProps) => {
	const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate));

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft(targetDate));
		}, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	const units = useMemo(
		() => [
			{ label: "Days", value: timeLeft.days },
			{ label: "Hours", value: timeLeft.hours },
			{ label: "Min", value: timeLeft.minutes },
			{ label: "Sec", value: timeLeft.seconds },
		],
		[timeLeft]
	);

	return (
		<Card className="border-muted/40 bg-background/80 shadow-sm overflow-hidden">
			<CardHeader className="gap-1">
				<span className={`text-sm font-semibold uppercase tracking-wide ${accentClass}`}>{title}</span>
				{subtitle ? <span className="text-xs text-muted-foreground">{subtitle}</span> : null}
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-4 gap-2">
					{units.map((unit) => (
						<CountdownUnit
							key={unit.label}
							value={unit.value}
							label={unit.label}
							accentClass={accentClass}
						/>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export { RaceCountdownCounter };
