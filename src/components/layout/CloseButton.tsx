import { MouseEventHandler, ReactNode } from "react";

interface CloseButtonProps {
  visible?: boolean;
  children?: ReactNode;
  onClick: MouseEventHandler;
}
export default function CloseButton({
  onClick,
  children,
  visible = true,
}: CloseButtonProps) {
  if (visible) {
    return <button onClick={onClick}>{children}</button>;
  }
  return null;
}
