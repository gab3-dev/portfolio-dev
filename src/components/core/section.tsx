import { berkleyFont } from '@/fonts'

import { Typography } from '@mui/material'
import { ReactNode } from 'react'

interface SectionProps {
    title: string
    description: string
    backgroundColor?: string
    color?: string
    children: ReactNode
}

export default function Section({ title, description, backgroundColor = 'none', color = '#000', children }: SectionProps) {
    return (
        <section style={{ backgroundColor, width: '90vw', borderRadius: '16px', margin: '30px auto', paddingBottom: '30px' }}>
            <Typography
                style={berkleyFont.style}
                variant="h4"
                sx={{
                    display: 'flex',
                    padding: '20px',
                    margin: '0 auto',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: color,
                    width: 'fit-content',
                }}
            >
                {title}
            </Typography>
            <Typography
                style={berkleyFont.style}
                variant="h5"
                sx={{
                    display: 'flex',
                    padding: '20px',
                    margin: '0 auto',
                    textAlign: 'center',
                    width: { md: '65vw', xs: '90vw' },
                    color: color,
                    fontSize: { xs: '1.2rem' },
                }}
            >
                {description}
            </Typography>
            {children}
        </section>
    )
}
