import { useTheme } from 'next-themes';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import styles from './Wavies.module.scss';

interface IWavies {
  direction?: 'top' | 'bottom';
}

export const Wavies: FC<IWavies> = ({ direction = 'top' }) => {
  const { theme } = useTheme();
  const isTop = direction === 'top';
  const isDarkTheme = theme === 'dark';
  const topColor = isDarkTheme ? '#d633ff' : '#0500FF';
  const bottomColor = isDarkTheme ? '#A600FF' : '#D766FF';

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className={`${styles.wrapper} ${isTop ? styles.top : styles.bottom}`}>
      <svg width="100%" height="100%" viewBox="0 0 1920 426" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity={isTop ? '0.5' : '1'}>
          <g opacity="0.3">
            <path
              d="M0 170.4L32 142.044C64 113.156 128 57.2437 192 28.3556C256 -1.52588e-05 320 1.52588e-05 384 56.8444C448 113.156 512 227.644 576 262.656C640 298.2 704 255.6 768 248.544C832 240.956 896 270.244 960 269.844C1024 270.244 1088 240.956 1152 234.3C1216 227.644 1280 240.956 1344 269.844C1408 298.2 1472 340.8 1536 347.856C1600 355.444 1664 326.156 1728 319.5C1792 312.844 1856 326.156 1888 333.744L1920 340.8V1.52588e-05H1888C1856 1.52588e-05 1792 1.52588e-05 1728 1.52588e-05C1664 1.52588e-05 1600 1.52588e-05 1536 1.52588e-05C1472 1.52588e-05 1408 1.52588e-05 1344 1.52588e-05C1280 1.52588e-05 1216 1.52588e-05 1152 1.52588e-05C1088 1.52588e-05 1024 1.52588e-05 960 1.52588e-05C896 1.52588e-05 832 1.52588e-05 768 1.52588e-05C704 1.52588e-05 640 1.52588e-05 576 1.52588e-05C512 1.52588e-05 448 1.52588e-05 384 1.52588e-05C320 1.52588e-05 256 1.52588e-05 192 1.52588e-05C128 1.52588e-05 64 1.52588e-05 32 1.52588e-05H0V170.4Z"
              fill={isTop ? topColor : bottomColor}
            />
          </g>
          <g opacity="0.2">
            <path
              d="M0 383.4L32 362.1C64 340.8 128 298.2 192 291.144C256 283.556 320 312.844 384 276.9C448 240.956 512 142.444 576 99.4444C640 57.2437 704 70.5563 768 92.2556C832 113.156 896 142.444 960 184.644C1024 227.644 1088 283.556 1152 276.9C1216 270.244 1280 198.356 1344 205.944C1408 213 1472 298.2 1536 326.556C1600 355.444 1664 326.156 1728 305.256C1792 283.556 1856 270.244 1888 262.656L1920 255.6V0H1888C1856 0 1792 0 1728 0C1664 0 1600 0 1536 0C1472 0 1408 0 1344 0C1280 0 1216 0 1152 0C1088 0 1024 0 960 0C896 0 832 0 768 0C704 0 640 0 576 0C512 0 448 0 384 0C320 0 256 0 192 0C128 0 64 0 32 0H0V383.4Z"
              fill={isTop ? topColor : bottomColor}
            />
          </g>
          <g opacity="0.1">
            <path
              d="M0 255.6L32 248.544C64 240.956 128 227.644 192 255.6C256 283.556 320 355.444 384 347.856C448 340.8 512 255.6 576 220.056C640 185.044 704 198.356 768 184.644C832 170.4 896 127.8 960 113.556C1024 99.8438 1088 113.156 1152 127.8C1216 142.444 1280 155.756 1344 156.156C1408 155.756 1472 142.444 1536 120.744C1600 99.8438 1664 70.5563 1728 78.1444C1792 85.2 1856 127.8 1888 149.1L1920 170.4V3.05176e-05H1888C1856 3.05176e-05 1792 3.05176e-05 1728 3.05176e-05C1664 3.05176e-05 1600 3.05176e-05 1536 3.05176e-05C1472 3.05176e-05 1408 3.05176e-05 1344 3.05176e-05C1280 3.05176e-05 1216 3.05176e-05 1152 3.05176e-05C1088 3.05176e-05 1024 3.05176e-05 960 3.05176e-05C896 3.05176e-05 832 3.05176e-05 768 3.05176e-05C704 3.05176e-05 640 3.05176e-05 576 3.05176e-05C512 3.05176e-05 448 3.05176e-05 384 3.05176e-05C320 3.05176e-05 256 3.05176e-05 192 3.05176e-05C128 3.05176e-05 64 3.05176e-05 32 3.05176e-05H0V255.6Z"
              fill={isTop ? topColor : bottomColor}
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
