import localFont from 'next/font/local'

const berkleyFont = localFont({
  src: [
    {
      path: '../../public/fonts/BerkeleyMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/BerkeleyMono-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
});

export { berkleyFont }
