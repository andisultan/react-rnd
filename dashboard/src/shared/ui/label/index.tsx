import { forwardRef, type LabelHTMLAttributes} from 'react'
import cn from 'classnames'
import './style.scss'

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (props, ref) => {
    const {
      className,
      children,
      ...rest
    } = props;

    const classWrapper = cn('ams-label', className);

    return (
      <label
        ref={ref}
        className={classWrapper}
        {...rest}
      >{children}</label>
    );
  }
);

Label.displayName = 'Label';