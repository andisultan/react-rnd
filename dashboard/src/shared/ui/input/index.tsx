import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'
import type { SIZE } from '../constants'
import cn from 'classnames'
import './style.scss'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * set visual type of the component
   */
  appearance?: 'solid' | 'outline' | 'text'
  /**
   * set width of the component is 100%
   */
  fullWidth?: boolean
  /**
   * Visual or interactive element displayed before the input value.
   * This element does not affect the input's value.
   */
  startAdornment?: ReactNode
  /**
   * Visual or interactive element displayed after the input value.
   * Typically used for actions related to the input.
   */
  endAdornment?: ReactNode
  /**
   * set size of the component
   */
  scale?: SIZE
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    scale = 'md',
    appearance = 'solid',
    fullWidth = false,
    className,
    startAdornment,
    endAdornment,
    ...rest
  } = props

  const classWrapper = cn(
    'input',
    `input--${scale}`,
    `input--${appearance}`,
    { 'input--full': fullWidth },
    className
  )

  return (
    <div className={classWrapper}>
      {startAdornment && (
        <div className="input__adornment input__adornment--start">
          {startAdornment}
        </div>
      )}

      <input
        ref={ref} 
        className="input__field" 
        {...rest} 
      />

      {endAdornment && (
        <div className="input__adornment input__adornment--end">
          {endAdornment}
        </div>
      )}
    </div>
  )
})
