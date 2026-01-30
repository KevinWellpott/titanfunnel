import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react"
import {
  AbsoluteCenter,
  Button as ChakraButton,
  Span,
  Spinner,
} from "@chakra-ui/react"
import * as React from "react"

interface ButtonLoadingProps {
  loading?: boolean
  loadingText?: React.ReactNode
}

export interface ButtonProps extends ChakraButtonProps, ButtonLoadingProps {}

const premiumHoverFocus = {
  transition: "transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
  _focusVisible: {
    outline: "none",
    boxShadow: "0 0 0 3px rgba(1, 173, 213, 0.4)",
  },
} as const

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const { loading, disabled, loadingText, children, variant, _hover, ...rest } = props
    const isLink = (variant as string | undefined) === "link"
    const defaultHover =
      !isLink && !_hover
        ? { transform: "translateY(-2px)" as const, boxShadow: "0 12px 28px rgba(0, 0, 0, 0.12)" }
        : _hover
    return (
      <ChakraButton
        variant={variant}
        disabled={loading || disabled}
        ref={ref}
        {...premiumHoverFocus}
        {...rest}
        _hover={defaultHover}
      >
        {loading && !loadingText ? (
          <>
            <AbsoluteCenter display="inline-flex">
              <Spinner size="inherit" color="inherit" />
            </AbsoluteCenter>
            <Span opacity={0}>{children}</Span>
          </>
        ) : loading && loadingText ? (
          <>
            <Spinner size="inherit" color="inherit" />
            {loadingText}
          </>
        ) : (
          children
        )}
      </ChakraButton>
    )
  },
)
