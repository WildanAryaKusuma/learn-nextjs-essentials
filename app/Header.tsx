import { getSetting } from "./queries/getSetting"
import Nav from "./Nav"

const Header = async () => {
    const setting = await getSetting()

    console.log(setting)

    return (
        <>
            <header className="py-2 mb-2 border-b border-white">
                <div className="text-2xl">{setting.siteName}</div>
                <Nav />
            </header>
        </>
    )
}

export default Header