import type { ButtonHTMLAttributes } from 'react'
import type { COLOR, SIZE } from '../constants'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * set visual type of the component
   */
  appearance?: 'solid' | 'outline' | 'text'
  /**
   * set width of the component is 100%
   */
  fullWidth?: boolean
  /**
   * set color of the component
   */
  intent?: COLOR
  /**
   * set icon only button
   */
  iconOnly?: boolean
  /**
   * set disabled of the component
   */
  loading?: boolean
  /**
   * set loading text of the component
   */
  loadingText?: string
  /**
   * set size of the component
   */
  scale?: SIZE
}
