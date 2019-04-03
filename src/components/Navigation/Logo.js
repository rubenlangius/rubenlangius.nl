import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { css } from 'styled-components'
import { Link } from 'rebass'

const Logo = () => {
  const wordmarkStyles = css`
    display: none;

    @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
      display: inline;
    }
  `
  return (
    <>
      <Link
        as={GatsbyLink}
        to="/"
        tabIndex="-1"
        aria-hidden="true"
        color="orange"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 281 241"
          width="25"
          height="21"
          preserveAspectRatio="xMinYMid"
        >
          <title>Go to homepage</title>
          <path d="M280 120v120c-46.795 0-93.59.148-140.385-.001-24.624-.235-48.379-16.914-56.455-40.76-2.093-6.18-3.139-12.726-3.16-19.207V40H40v200H0V0h120c0 60.088-.568 120.178.002 180.263.164 10.317 9.135 19.703 20.03 19.737H240v-40h-80V0h40v120h80z" />
        </svg>
      </Link>

      <Link
        as={GatsbyLink}
        to="/"
        tabIndex="-1"
        aria-hidden="true"
        color="black"
        css={wordmarkStyles}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1260 241"
          width="110"
          height="21"
          preserveAspectRatio="xMinYMid"
        >
          <title>Go to homepage</title>
          <path d="M266.152 206.209c-27.543 0-49.859-26.183-49.859-58.464 0-32.297 22.316-58.463 49.859-58.463 27.543 0 49.873 26.166 49.873 58.463 0 32.28-22.33 58.464-49.873 58.464m0-144.44c-44.631 0-80.81 38.487-80.81 85.976 0 47.473 36.179 85.976 80.81 85.976s80.825-38.503 80.825-85.976c0-47.49-36.194-85.976-80.825-85.976M560.198 65.208L515.49 230.28h-27.512l-29.712-116.377-32.191 116.377h-27.511L353.856 65.208h30.95l29.837 119.357L446.71 68.647h24.074l29.102 113.992 29.361-117.431h30.952zM120 10.032l.215 191.994c0 12.336 15.812 27.953 31.83 27.953l22.98.016v-27.444l-12.61-.012c-5.35 0-11.463-4.486-11.463-9.474V10.032H120zM584.27 65.063v165.074h30.952V114.92c0-15.163 12.594-25.784 25.785-25.784 13.19 0 25.8 10.687 25.8 25.784v115.216h30.952V114.92c0-15.228 12.594-25.784 25.785-25.784 13.19 0 25.8 10.426 25.8 25.784v115.216h30.952V114.92c0-28.077-22.912-53.297-53.298-53.297-27.433 0-41.085 19.87-41.085 19.87s-13.912-19.87-41.452-19.87c-17.098 0-29.239 8.713-29.239 8.713v-5.274H584.27zM1103.567 180.423c0 25.404-24.593 53.298-63.614 53.298-45.012 0-59.38-34.451-59.38-34.451l24.281-15.535s12.928 22.473 35.099 22.473c19.67 0 32.662-12.533 32.662-25.8 0-34.524-89.414-18.388-89.414-72.22 0-24.272 24.868-46.42 56.752-46.42 24.684 0 39.832 11.42 47.994 21.874l-24.35 15.508s-7.581-9.868-23.644-9.868c-13.604 0-25.802 8.33-25.802 18.906 0 24.212 89.416 13.787 89.416 72.235M1244.566 180.423c0 25.404-24.593 53.298-63.614 53.298-45.012 0-59.38-34.451-59.38-34.451l24.281-15.535s12.928 22.473 35.1 22.473c19.67 0 32.661-12.533 32.661-25.8 0-34.524-89.414-18.388-89.414-72.22 0-24.272 24.868-46.42 56.752-46.42 24.685 0 39.832 11.42 47.994 21.874l-24.35 15.508s-7.58-9.868-23.644-9.868c-13.604 0-25.801 8.33-25.801 18.906 0 24.212 89.415 13.787 89.415 72.235M883.712 89.28c34.834 0 46.48 37.877 46.48 37.877h-92.96s11.646-37.876 46.48-37.876m0 116.927c-34.834 0-49.31-38.287-49.31-51.585h128.163c0-79.114-57.989-92.855-78.853-92.855-45.425 0-79.098 41.162-79.098 85.976 0 44.846 32.617 85.976 79.098 85.976 42.547 0 63.373-36.75 63.373-36.75l-23.235-14.79s-13.94 24.028-40.138 24.028" />
        </svg>
      </Link>
    </>
  )
}

export default Logo
