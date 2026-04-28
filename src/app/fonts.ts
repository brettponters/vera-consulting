import localFont from 'next/font/local';

export const cabinetGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/cabinet-grotesk-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/cabinet-grotesk-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-cabinet',
  display: 'swap',
});

export const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/satoshi-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi-medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});
