import React from 'react'
import { Image1 } from './assets/Images.js'
import './ComponentsStyle.css'

export function Logo({ title, subtitle, image }) {
    return (
        <div>
            <div className='logo-container'>
                <Image1 imgSrc={image} alt={'Logo'} />
                <div className='logo-title'>{title}</div>
            </div>
            <div className='subtitle'>{subtitle}</div>
        </div>
    )
}
