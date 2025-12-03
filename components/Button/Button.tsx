import css from '@/components/Button/Button.module.css';
interface BtnProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  size?: 'm' | 'l';
  onClick?: () => void;
}
export default function Button({
  children,
  type = 'button',
  size = 'm',
  onClick,
}: BtnProps) {
  return (
    <button className={`${css.btn} ${css[size]}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
