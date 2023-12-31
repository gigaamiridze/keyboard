import { IconProps } from '../models';

function Icon(props: IconProps) {
  const { type, size, color } = props;

  return (
    <>
      {type === 'up-arrow' && (
        <svg 
          xmlns='http://www.w3.org/2000/svg' 
          viewBox='0 0 320 512' 
          width={size} 
          height={size} 
          fill={color}
        >
          <path d='M318 177.5c3.8-8.8 2-19-4.6-26l-136-144C172.9 2.7 166.6 0 160 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26S14.4 192 24 192H96l0 288c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32l0-288h72c9.6 0 18.2-5.7 22-14.5z' />
        </svg>
      )}
      {type === 'globe' && (
        <svg 
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width={size} 
          height={size} 
          color={color}
          fill={color}
        >
          <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c2.761 0 3.941-5.163 3.941-9c0-3.837-1.18-9-3.941-9m0 18c-2.761 0-3.941-5.163-3.941-9c0-3.837 1.18-9 3.941-9M3.5 9h17m-17 6h17' />
        </svg>
      )}
      {type === 'backspace' && (
        <svg 
          xmlns='http://www.w3.org/2000/svg' 
          viewBox='0 0 24 24'
          width={size}
          height={size}
          fill={color}
        >
          <path
            fillRule='evenodd'
            d='M8.406 5.2a3.5 3.5 0 0 0-2.753 1.338l-3.561 4.535a1.5 1.5 0 0 0 0 1.853l3.561 4.536A3.5 3.5 0 0 0 8.406 18.8h10.647a2.5 2.5 0 0 0 2.5-2.5V7.7a2.5 2.5 0 0 0-2.5-2.5H8.406Zm2.064 3.27a.75.75 0 0 1 1.06 0L14 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L15.06 12l2.47 2.47a.75.75 0 0 1-1.06 1.06L14 13.06l-2.47 2.47a.75.75 0 1 1-1.06-1.06L12.94 12l-2.47-2.47a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
          />
        </svg>
      )}
      {type === 'left-arrow' && (
        <svg 
          xmlns='http://www.w3.org/2000/svg' 
          viewBox='0 0 24 24'
          width={size}
          height={size}
          fill={color}
        >
          <path d='M10.05 16.94V12.94H18.97L19 10.93H10.05V6.94L5.05 11.94Z' />
        </svg>
      )}
      {type === 'dollar-sign' && (
        <svg 
          xmlns='http://www.w3.org/2000/svg' 
          viewBox='0 0 320 512'
          width={size}
          height={size}
          fill={color}
        >
          <path d='M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z' />
        </svg>
      )}
      {type === 'euro-sign' && (
        <svg 
          xmlns='http://www.w3.org/2000/svg' 
          viewBox='0 0 320 512'
          width={size}
          height={size}
          fill={color}
        >
          <path d='M48.1 240c-.1 2.7-.1 5.3-.1 8v16c0 2.7 0 5.3 .1 8H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H60.3C89.9 419.9 170 480 264 480h24c17.7 0 32-14.3 32-32s-14.3-32-32-32H264c-57.9 0-108.2-32.4-133.9-80H256c17.7 0 32-14.3 32-32s-14.3-32-32-32H112.2c-.1-2.6-.2-5.3-.2-8V248c0-2.7 .1-5.4 .2-8H256c17.7 0 32-14.3 32-32s-14.3-32-32-32H130.1c25.7-47.6 76-80 133.9-80h24c17.7 0 32-14.3 32-32s-14.3-32-32-32H264C170 32 89.9 92.1 60.3 176H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H48.1z' />
        </svg>
      )}
      {type === 'lari-sign' && (
        <svg 
          xmlns='http://www.w3.org/2000/svg' 
          viewBox='0 0 384 512'
          width={size}
          height={size}
          fill={color}
        >
          <path d='M144 32c17.7 0 32 14.3 32 32V96.7c5.3-.4 10.6-.7 16-.7s10.7 .2 16 .7V64c0-17.7 14.3-32 32-32s32 14.3 32 32v49.4c54.9 25.2 95.8 75.5 108.2 136.2c3.5 17.3-7.7 34.2-25 37.7s-34.2-7.7-37.7-25c-6.1-29.9-22.5-55.9-45.4-74.3V256c0 17.7-14.3 32-32 32s-32-14.3-32-32V161c-5.2-.7-10.6-1-16-1s-10.8 .3-16 1v95c0 17.7-14.3 32-32 32s-32-14.3-32-32V188.1C82.7 211.5 64 247.6 64 288c0 70.7 57.3 128 128 128H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H192 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48.9C18.5 382 0 337.2 0 288c0-77.5 45.9-144.3 112-174.6V64c0-17.7 14.3-32 32-32z' />
        </svg>
      )}
      {type === 'ellipse' && (
        <svg 
          xmlns='http://www.w3.org/2000/svg' 
          viewBox='0 0 512 512'
          width={size}
          height={size}
          fill={color}
        >
          <path d='M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z' />
        </svg>
      )}
    </>
  )
}

export default Icon;
