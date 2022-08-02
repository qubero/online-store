import { CSSTransition } from 'react-transition-group';

const Toast = ({ show }: { show: boolean }) => {
  return (
    <CSSTransition in={show} timeout={300} classNames="in-out" unmountOnExit>
      <div className="in-out toast">No Available Space. Max 20.</div>
    </CSSTransition>
  );
};

export default Toast;
