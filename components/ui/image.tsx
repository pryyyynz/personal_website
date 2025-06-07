"use client"

import { useState } from "react"
import NextImage, { ImageProps as NextImageProps } from "next/image"
import { cn } from "@/lib/utils"
import { Skeleton } from "./skeleton"

interface ImageProps extends NextImageProps {
    wrapperClassName?: string
}

function Image({
    alt,
    src,
    className,
    wrapperClassName,
    fill,
    ...props
}: ImageProps) {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className={cn("relative overflow-hidden", wrapperClassName)}>
            {isLoading && (
                <Skeleton
                    className={cn(
                        "absolute inset-0 z-10",
                        className
                    )}
                />
            )}
            <NextImage
                className={cn(
                    "transition-opacity duration-300",
                    isLoading ? "opacity-0" : "opacity-100",
                    className
                )}
                src={src}
                alt={alt}
                fill={fill}
                onLoad={() => setIsLoading(false)}
                {...props}
            />
        </div>
    )
}

export { Image }