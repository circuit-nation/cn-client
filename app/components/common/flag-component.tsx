import type { SVGProps } from "react";
import React from "react";
import * as Flags from "country-flag-icons/react/3x2";

interface FlagComponentProps {
    countryCode: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}

type FlagComponent = (props: SVGProps<SVGSVGElement>) => React.JSX.Element;


const getFlagComponent = (countryCode?: string): FlagComponent | null => {
    if (!countryCode) {
        return null;
    }

    const normalizedCode = countryCode.trim().toUpperCase();
    return (Flags as Record<string, FlagComponent>)[normalizedCode] ?? null;
};

const Flag = ({ countryCode, size = "md", className }: FlagComponentProps) => {
    const Flag = getFlagComponent(countryCode);

    if (!Flag) {
        return null;
    }

    const sizeClasses = {
        sm: "h-4 w-auto",
        md: "h-6 w-auto",
        lg: "h-8 w-auto",
    };

    return (
        <Flag
            className={`${sizeClasses[size]} object-cover ${className ?? ""}`}
            aria-label={`${countryCode} flag`}
        />
    );
}

export default Flag;