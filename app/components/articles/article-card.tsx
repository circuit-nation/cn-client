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
import { cn, formatRelativeTime } from "~/lib/utils"
import { Link } from "react-router"
import { motion } from "motion/react"
import { Heart, Bookmark } from "lucide-react"
import type { Articles } from "~/types/articles"

type ArticleCardProps = {
    article: Articles;
    className?: string;
}

export default function ArticleCard({
    article: {
        blog_id: id,
        title,
        first_paragraph: description,
        first_image: imageUrl,
        published_time: publishedAt,
        tags = [],
        bookmark_count,
        like_count,
    },
    className
}: ArticleCardProps) {
    const relativeTime = formatRelativeTime(publishedAt)
    const visibleTags = tags.slice(0, 1)
    const hasMoreTags = tags.length > 2

    const formatTriggerTag = (tag: string) =>
        tag.length > 16 ? `${tag.slice(0, 16)}...` : tag

    const link: string = "https://monkeys.com.co/blog/" + id;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
        >
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
                        <Link to={link} className="hover:underline" target="_blank" rel="noopener noreferrer">
                            {title}
                        </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                        {description}
                    </CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center gap-2 pt-4">
                    <Popover>
                        <PopoverTrigger asChild>
                            <div
                                className="flex gap-2"
                                aria-label="View all tags"
                            >
                                {visibleTags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="">
                                        {formatTriggerTag(tag)}
                                    </Badge>
                                ))}
                                {hasMoreTags ? (
                                    <Badge variant="outline">+{tags.length - 1}</Badge>
                                ) : null}
                            </div>
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
                    <div className="ml-auto text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Heart className="size-4" />
                            {like_count}
                            <Bookmark className="size-4" />
                            {bookmark_count}
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
