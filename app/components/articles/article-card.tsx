import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "~/components/ui/popover"
import { cn, formatRelativeTime, formatViews } from "~/lib/utils"
import { Link } from "react-router"

type ArticleCardProps = {
    title: string
    link: string
    description: string
    imageUrl: string
    publishedAt: Date | string | number
    tags?: string[]
    views?: number
    className?: string
}

export default function ArticleCard({
    title,
    link,
    description,
    imageUrl,
    publishedAt,
    tags = [],
    views = 0,
    className,
}: ArticleCardProps) {
    const relativeTime = formatRelativeTime(publishedAt)
    const visibleTags = tags.slice(0, 2)
    const hasMoreTags = tags.length > 2

    return (
        <Card className={cn("overflow-hidden pb-4 pt-1 group", className)}>
            <div className="relative">
                <div className="p-4">
                    <img
                        src={imageUrl}
                        alt=""
                        className="h-48 w-full rounded-sm object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                    />
                </div>
                <div className="absolute right-6 bottom-6 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground shadow">
                    <time dateTime={new Date(publishedAt).toISOString()}>
                        {relativeTime}
                    </time>
                </div>
            </div>
            <CardHeader className="gap-2">
                <CardTitle className="line-clamp-2 text-lg md:text-xl">
                    <Link to={link} className="hover:underline">
                        {title}
                    </Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-wrap items-center gap-2 pt-4">
                <Popover>
                    <PopoverTrigger asChild>
                        <button
                            type="button"
                            className="flex flex-wrap gap-2"
                            aria-label="View all tags"
                        >
                            {visibleTags.map((tag) => (
                                <Badge key={tag} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                            {hasMoreTags ? (
                                <Badge variant="outline">+{tags.length - 2}</Badge>
                            ) : null}
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56">
                        <div className="text-xs font-semibold text-muted-foreground">
                            Tags
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {tags.length ? (
                                tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))
                            ) : (
                                <span className="text-xs text-muted-foreground">
                                    No tags
                                </span>
                            )}
                        </div>
                    </PopoverContent>
                </Popover>
                <div className="ml-auto text-xs text-muted-foreground">
                    {formatViews(views)} views
                </div>
            </CardFooter>
        </Card>
    )
}
