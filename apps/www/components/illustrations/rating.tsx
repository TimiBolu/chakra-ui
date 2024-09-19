import { createComponent } from "./create-component"

export const RatingAnatomy = createComponent((props) => {
  const { palette, ...rest } = props
  return (
    <svg
      width={400}
      height={300}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M136.035 119.344C137.005 117.24 139.995 117.24 140.965 119.344L145.905 130.053C146.3 130.91 147.112 131.5 148.05 131.612L159.761 133C162.062 133.273 162.985 136.116 161.285 137.688L152.626 145.696C151.933 146.337 151.623 147.292 151.807 148.218L154.105 159.785C154.556 162.057 152.138 163.814 150.117 162.683L139.826 156.922C139.002 156.461 137.998 156.461 137.174 156.922L126.883 162.683C124.862 163.814 122.444 162.057 122.895 159.785L125.193 148.218C125.377 147.292 125.067 146.337 124.374 145.696L115.715 137.688C114.015 136.116 114.938 133.273 117.239 133L128.95 131.612C129.888 131.5 130.7 130.91 131.095 130.053L136.035 119.344Z"
        fill={palette[3]}
      />
      <path
        d="M197.107 119.344C198.077 117.24 201.066 117.24 202.036 119.344L206.976 130.053C207.371 130.91 208.184 131.5 209.121 131.612L220.833 133C223.133 133.273 224.057 136.116 222.356 137.688L213.697 145.696C213.004 146.337 212.694 147.292 212.878 148.218L215.177 159.785C215.628 162.057 213.21 163.814 211.189 162.683L200.897 156.922C200.074 156.461 199.069 156.461 198.246 156.922L187.954 162.683C185.933 163.814 183.515 162.057 183.966 159.785L186.265 148.218C186.449 147.292 186.139 146.337 185.446 145.696L176.787 137.688C175.086 136.116 176.01 133.273 178.31 133L190.022 131.612C190.959 131.5 191.772 130.91 192.167 130.053L197.107 119.344Z"
        fill={palette[3]}
      />
      <path
        d="M258.178 119.344C259.148 117.24 262.137 117.24 263.108 119.344L268.047 130.053C268.443 130.91 269.255 131.5 270.192 131.612L281.904 133C284.204 133.273 285.128 136.116 283.428 137.688L274.769 145.696C274.076 146.337 273.765 147.292 273.949 148.218L276.248 159.785C276.699 162.057 274.281 163.814 272.26 162.683L261.969 156.922C261.145 156.461 260.141 156.461 259.317 156.922L249.026 162.683C247.005 163.814 244.586 162.057 245.038 159.785L247.336 148.218C247.52 147.292 247.21 146.337 246.517 145.696L237.858 137.688C236.158 136.116 237.081 133.273 239.381 133L251.093 131.612C252.031 131.5 252.843 130.91 253.238 130.053L258.178 119.344Z"
        fill={palette[2]}
      />
    </svg>
  )
})