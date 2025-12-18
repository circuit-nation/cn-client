export function Logo({ w = "24" }: { w?: string }) {
    return (
        <img
            src={"/public/images/logo.svg"}
            alt="Circuit Nation Logo"
            className={`block w-${w} h-auto p-0`}
        />
    );
}