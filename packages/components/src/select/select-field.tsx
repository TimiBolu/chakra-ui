import { cx } from "@chakra-ui/utils"
import { HTMLChakraProps, chakra, forwardRef } from "../system"

type Omitted = "disabled" | "required" | "readOnly" | "size"

export interface SelectFieldProps
  extends Omit<HTMLChakraProps<"select">, Omitted> {
  /**
   * @default false
   */
  isDisabled?: boolean
  /**
   * The placeholder text for the select field
   */
  placeholder?: string
  usePlaceHolderAsOption?: boolean;
}

export const SelectField = forwardRef<SelectFieldProps, "select">(
  function SelectField(props, ref) {
    const { children, placeholder, usePlaceHolderAsOption = true, className, ...rest } = props

    return (
      <chakra.select
        {...rest}
        ref={ref}
        className={cx("chakra-select", className)}
      >
        {usePlaceHolderAsOption && <option value="">{placeholder}</option>}
        {children}
      </chakra.select>
    )
  },
)

SelectField.displayName = "SelectField"
