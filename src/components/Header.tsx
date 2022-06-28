import { List, X } from "phosphor-react"
import { MouseEventHandler } from "react"

import Logo from "./Logo"

interface HeaderProps {
    isOnEventPage?: boolean
    isMobileMenuOpen: boolean
    handleMobileMenuOpen: MouseEventHandler<HTMLDivElement>
}

export const Header = (props: HeaderProps) => {
    return (
        <header className="w-full px-5 sm:px-9 py-5 z-[51] fixed flex sm:relative items-center justify-between xl:justify-center bg-gray-700 border-b border-gray-600">
            <div className="w-44 sm:w-auto">
                <Logo />
            </div>
            {props.isOnEventPage &&
                <div className="flex gap-2 items-center text-lg xl:hidden">
                    Aulas
                    <div className="cursor-pointer text-[#81D8F7]" onClick={props.handleMobileMenuOpen}>
                        {props.isMobileMenuOpen ? (
                            <X size={32} weight="fill" />
                            ) :
                            (
                                <List size={32} />
                            )
                        }
                    </div>
                </div>}
        </header>
    )
}