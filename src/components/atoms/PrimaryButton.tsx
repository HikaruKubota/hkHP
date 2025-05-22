import BaseButton from './BaseButton';

export default function PrimaryButton(props: React.ComponentProps<typeof BaseButton>) {
  return <BaseButton className={`bg-blue-600 text-white hover:bg-blue-700 ${props.className || ''}`} {...props} />;
}
