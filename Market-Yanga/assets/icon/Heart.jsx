import { HeartIcon } from '@hugeicons/core-free-icons';
import BaseIcon from './BaseIcon';

export default function Heart(props) {
  return <BaseIcon icon={HeartIcon} accessibilityLabel="Favorite" {...props} />;
}
