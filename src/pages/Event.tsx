import { useState } from "react"
import { useParams } from "react-router-dom"

import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

export const Event = () => {
    const { slug } = useParams<{ slug: string }>()

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleMobileMenuOpen = () => {
        setMobileMenuOpen(prevState => !prevState)
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header
                isOnEventPage
                isMobileMenuOpen={isMobileMenuOpen}
                handleMobileMenuOpen={handleMobileMenuOpen}
            />

            <main className="flex mt-[75px] sm:mt-0 flex-1">
                {   slug ?
                    <Video lessonSlug={slug} /> :
                    <div className="flex-1" />
                }
                <Sidebar
                    isMobileMenuOpen={isMobileMenuOpen}
                />
            </main>
        </div>
    )
}