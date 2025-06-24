import { AnimatePresence, motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import Footer from "./Footer"
import PlatformHeader from "./Platform/Header"
import Header from "./Header"
import BottomBar from "./Platform/BottomBar"

function LandingContainer({ children }: { children: React.ReactNode }) {
    const { pathname } = useLocation()
    if (pathname.startsWith("/platform")) {
        return (
            <>
                <PlatformHeader />
                {children}
                <BottomBar />
            </>
        )
    } else {

        return (
            <div className="bg-black">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Header />
                        {children}
                    </motion.div>
                </AnimatePresence>
                <Footer />
            </div>
        )
    }
}

export default LandingContainer