import { berkleyFont } from '@/fonts'

import MainImageComparison from '@/components/core/main-image-comparison'
import MainMacbookMockup from '@/components/core/main-macbook-mockup'
import Carousel from '@/components/core/carousel'
import { Typography } from '@mui/material'

export default function Projects() {
  return (
    <>
      <Typography
        style={berkleyFont.style}
        variant="h5"
        sx={{
          display: 'flex',
          padding: '20px',
          margin: '0 auto',
          textAlign: 'center',
          width: { md: '65vw', xs: '90vw' },
          fontSize: { xs: '1.2rem' },
        }}
      >
        Estes sites foram redesenhados buscando um design mais moderno,
        com cantos arredondados, novos estilos de fonte, maior contraste
        entre cores e melhor responsividade.
      </Typography>
      <Carousel>
        <MainMacbookMockup>
          <MainImageComparison
            urlBefore="/comparison/project_T_old.png"
            urlAfter="/comparison/project_T_new.png"
          />
        </MainMacbookMockup>
        <MainMacbookMockup>
          <MainImageComparison
            urlBefore="/comparison/project_G_old.png"
            urlAfter="/comparison/project_G_new.png"
          />
        </MainMacbookMockup>
      </Carousel>
    </>
  )
}
