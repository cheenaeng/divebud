import React from 'react'
import { Button } from 'native-base'
import { IButtonProps } from 'native-base'

function PrimaryButton({ children, ...props }: IButtonProps) {
  return (
    <Button {...props} _text={{ fontSize: 'xl' }} shadow="1">
      {children}
    </Button>
  )
}

export default PrimaryButton
