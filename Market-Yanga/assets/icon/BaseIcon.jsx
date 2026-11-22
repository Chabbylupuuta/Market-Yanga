import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react-native';

export default function BaseIcon({
  icon,
  size = 24,
  color = '#173F35',
  strokeWidth = 1.8,
  style,
  accessibilityLabel,
}) {
  return (
    <HugeiconsIcon
      icon={icon}
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      style={style}
      accessibilityLabel={accessibilityLabel}
    />
  );
}
