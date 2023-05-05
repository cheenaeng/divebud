import React from 'react'
import { Text } from 'native-base'
import { TextProps } from 'react-native/types'
import { StyleSheet } from 'react-native'

function FontBody({ children, ...sx }: TextProps) {
  return (
    <Text fontFamily="body" {...sx} style={styles.title} color="primary.200">
      {children}
    </Text>
  )
}

export default FontBody

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'normal',
  },
})
