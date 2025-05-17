import { getSetting } from "./queries/getSetting"

const Footer = async () => {
    const settings = await getSetting()

    return (
        <>
            <footer className="mt-2 py-2 border-t border-white">
                copyright 2025 by {settings.siteName}
            </footer>
        </>
    )
}

export default Footer