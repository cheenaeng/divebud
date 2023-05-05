const styledComponents = {
  Button: {
    baseStyle: {
      rounded: 'md',
    },
    variants: {
      darkRounded: ({ colorScheme }: { colorScheme: string }) => {
        return {
          bg: `${colorScheme}.800`,
          rounded: 'full',
        }
      },
      default: ({ colorScheme }: { colorScheme: string }) => {
        return {
          bg: `${colorScheme}.800`,
        }
      },
    },
    defaultProps: {
      colorScheme: 'dark',
    },
  },
}
export { styledComponents }
