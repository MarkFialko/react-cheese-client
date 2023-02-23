import {RefObject, useEffect} from "react";
import {useLatest} from "./useLatest";

export const useOutsideClick = <T extends HTMLElement = HTMLElement>(elementRef: RefObject<T>, handler: () => void, attached = true) => {

    const latestHandler = useLatest(handler)

    useEffect(() => {

        if (!attached) return

        const handleClick = (e: any) => {
            if (!elementRef.current) return
            if (!elementRef.current.contains(e.target)) {
                latestHandler.current()
            }
        }

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }

    }, [elementRef, latestHandler, attached])

}