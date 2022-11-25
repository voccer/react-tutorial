import React, { useEffect, useState } from 'react'

type LocationColorProps = {
  location: string
  width?: number
  height?: number
}
const LocationType = [
  {
    name: '北海道',
    color: '#405D9B',
  },
  {
    name: '北東北',
    color: '#405D9B',
  },
  {
    name: '南東北',
    color: '#405D9B',
  },
  {
    name: '関東',
    color: '#338DE5',
  },
  {
    name: '東京都',
    color: '#338DE5',
  },
  {
    name: '信越',
    color: '#3DBAE8',
  },
  {
    name: '東海',
    color: '#3DBAE8',
  },
  {
    name: '北陸',
    color: '#3DBAE8',
  },
  {
    name: '関西',
    color: '#34BB8F',
  },
  {
    name: '中国',
    color: '#61C204',
  },
  {
    name: '四国',
    color: '#DCB909',
  },
  {
    name: '北九州',
    color: '#F88946',
  },
  {
    name: '南九州',
    color: '#F88946',
  },
  {
    name: '沖縄',
    color: '#E66128',
  },
]

export const LocationColor = ({
  location,
  width,
  height,
  children,
}: React.PropsWithChildren<LocationColorProps>): JSX.Element => {
  const [color, setColor] = useState('')
  useEffect(() => {
    const colorItem = LocationType.find((item) => item.name === location)
    if (colorItem) {
      setColor(colorItem.color)
    } else {
      setColor('#DBB908')
    }
  }, [location])

  return (
    <>
      <span className="detail__address-icon">
        <svg
          width={width || 15}
          height={height || 20}
          viewBox="0 0 15 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.49996 12.0001C9.56806 12.0001 11.2499 10.206 11.2499 8.00003C11.2499 5.79401 9.56806 4 7.49996 4C5.43186 4 3.75 5.79401 3.75 8.00003C3.75 10.206 5.43186 12.0001 7.49996 12.0001ZM7.49996 6.00002C8.53401 6.00002 9.37494 6.89702 9.37494 8.00003C9.37494 9.10304 8.53401 10 7.49996 10C6.46591 10 5.62498 9.10304 5.62498 8.00003C5.62498 6.89702 6.46591 6.00002 7.49996 6.00002Z"
            fill={color}
          />
          <path
            d="M6.95626 19.8142C7.11492 19.935 7.30503 20 7.5 20C7.69497 20 7.88508 19.935 8.04374 19.8142C8.32874 19.5992 15.0271 14.4401 14.9999 8.00006C14.9999 3.58903 11.6353 0 7.5 0C3.36473 0 8.25345e-05 3.58903 8.25345e-05 7.99506C-0.0271047 14.4401 6.67126 19.5992 6.95626 19.8142ZM7.5 2.00002C10.6022 2.00002 13.1249 4.69104 13.1249 8.00506C13.1446 12.4431 9.01123 16.4281 7.5 17.7351C5.9897 16.4271 1.85537 12.4411 1.87506 8.00006C1.87506 4.69104 4.39785 2.00002 7.5 2.00002Z"
            fill={color}
          />
        </svg>
      </span>
      <span style={{ color: `${color}` }}>{children}</span>
    </>
  )
}
