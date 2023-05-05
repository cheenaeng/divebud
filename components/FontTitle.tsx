import React from 'react'
import { Text } from 'native-base'
import { TextProps } from 'react-native/types'
import { StyleSheet } from 'react-native'

function FontTitle({ children, ...sx }: TextProps) {
  return (
    <Text fontFamily="heading" {...sx} style={styles.title} color="primary.100">
      {children}
    </Text>
  )
}

export default FontTitle

const styles = StyleSheet.create({
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
})
