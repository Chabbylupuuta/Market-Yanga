import { Home01Icon } from '@hugeicons/core-free-icons';
import BaseIcon from './BaseIcon';

export default function Home({
  size = 24,
  color = '#173F35',
  strokeWidth = 1.8,
  style,
  accessibilityLabel = 'Home',
}) {
  return (
    <BaseIcon
      icon={Home01Icon}
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      style={style}
      accessibilityLabel={accessibilityLabel}
    />
  );
}
