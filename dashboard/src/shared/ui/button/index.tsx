import { forwardRef } from 'react'
import cn from 'classnames'
import type { ButtonProps } from './interface'
import './style.scss'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      intent = 'primary',
      appearance = 'solid',
      scale = 'md',
      loading = false,
      fullWidth = false,
      iconOnly = false,
      className,
      children,
      disabled,
      ...rest
    } = props;

    const classWrapper = cn(
      'button',
      `button--${scale}`,
      `button--${intent}-${appearance}`,
      {
        'button--loading': loading,
        'button--fullWidth': fullWidth,
        'button--icon': iconOnly,
      },
      className
    );

    return (
      <button
        ref={ref}
        className={classWrapper}
        disabled={disabled || loading}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
