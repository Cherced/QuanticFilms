import React from 'react'
import { useRouter } from 'next/router'

export const HeaderFloat = (props) => {
    const router = useRouter()
  return (
    <header className={props.HeaderClass}>
        <nav  className={props.HeaderNavClass}>
            <button onClick={() => router.push(`/${props.path}`)}>
                <img src={props.src} alt="BrandLogo"/>
            </button>
        </nav>
        <h1>{props.titleHeader}</h1>
        <div className="BrandIcon">
        <img src="/images/brandLogoHeader.png" alt="BrandLogo"/>
        </div>
    </header>
  )
}
