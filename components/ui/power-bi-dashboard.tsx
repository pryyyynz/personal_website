"use client"

import React, { useState, useEffect } from 'react'
import { Button } from './button'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface PowerBIDashboardProps {
    embedUrl: string
    title?: string
    className?: string
    aspectRatio?: "square" | "video" | "banner" | "tall" | "custom"
}

export function PowerBIDashboard({
    embedUrl,
    title = "Interactive Dashboard",
    className,
    aspectRatio = "video"
}: PowerBIDashboardProps) {
    const [isLoading, setIsLoading] = useState(true)

    // Handle aspect ratio
    const aspectRatioClasses = {
        square: "pb-[100%]", // 1:1
        video: "pb-[56.25%]", // 16:9
        banner: "pb-[40%]", // Modified to be taller for better visualization (was 33.33%)
        tall: "pb-[150%]", // 2:3
        custom: "pb-[75%]", // New custom aspect ratio for larger dashboard
    }

    const aspectRatioClass = aspectRatioClasses[aspectRatio]

    // Open fullscreen
    const openFullscreen = () => {
        const iframe = document.getElementById('power-bi-iframe') as HTMLIFrameElement
        if (iframe) {
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen()
            } else if ((iframe as any).webkitRequestFullscreen) {
                ; (iframe as any).webkitRequestFullscreen()
            } else if ((iframe as any).msRequestFullscreen) {
                ; (iframe as any).msRequestFullscreen()
            }
        }
    }

    // Hide loading indicator after timeout or when iframe loads
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 3000) // Fallback in case onLoad doesn't fire

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={cn("overflow-hidden rounded-lg border bg-card shadow", className)}>
            <div className="flex flex-col p-4">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">📊 {title}</h3>
                    <Button variant="outline" size="sm" asChild className="ml-auto">
                        <Link href={embedUrl} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Open Full View
                        </Link>
                    </Button>
                </div>

                {/* <Button 
          className="mb-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600" 
          onClick={openFullscreen}
        >
          🔍 View in Fullscreen
        </Button> */}

                <div className="relative">
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-muted/30 z-10">
                            <div className="flex flex-col items-center">
                                <div className="h-10 w-10 rounded-full border-4 border-muted border-t-primary animate-spin mb-4"></div>
                                <p className="text-muted-foreground">Loading dashboard...</p>
                            </div>
                        </div>
                    )}

                    <div className={cn("relative h-0", aspectRatioClass)}>
                        <iframe
                            id="power-bi-iframe"
                            title={title}
                            src={embedUrl}
                            className="absolute top-0 left-0 w-full h-full rounded-md"
                            frameBorder="0"
                            allowFullScreen={true}
                            onLoad={() => setIsLoading(false)}
                            style={{ border: "none" }}
                            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                        />
                    </div>
                </div>
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-muted/20 border-t">
        <div className="flex flex-col items-center p-3 rounded-lg bg-card text-center">
          <div className="text-2xl mb-2">📈</div>
          <h4 className="font-medium mb-1">Real-time Analytics</h4>
          <p className="text-sm text-muted-foreground">Interactive filtering and live data</p>
        </div>
        
        <div className="flex flex-col items-center p-3 rounded-lg bg-card text-center">
          <div className="text-2xl mb-2">🎯</div>
          <h4 className="font-medium mb-1">Key Insights</h4>
          <p className="text-sm text-muted-foreground">Discover patterns and trends</p>
        </div>
        
        <div className="flex flex-col items-center p-3 rounded-lg bg-card text-center">
          <div className="text-2xl mb-2">📱</div>
          <h4 className="font-medium mb-1">Mobile Friendly</h4>
          <p className="text-sm text-muted-foreground">Responsive on all devices</p>
        </div>
      </div> */}
        </div>
    )
}