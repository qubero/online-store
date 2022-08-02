import { useRef, useState } from 'react';

type AccordionProps = React.PropsWithChildren<{ label: string }>;

const Accordion: React.FC<AccordionProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const outerRef = useRef<HTMLDivElement | null>(null);

  const height = isOpen ? innerRef.current?.offsetHeight : 0;

  if (outerRef.current) {
    outerRef.current.ontransitionend = () => {
      !isOpen && innerRef.current?.setAttribute('style', 'display: none');
    };
  }

  const handleToggle = () => {
    !isOpen && innerRef.current?.setAttribute('style', 'display: block');

    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        type="button"
        className={
          'filter-toggle icon-arrow-down ' +
          (isOpen ? 'filter-toggle--open' : '')
        }
        onClick={handleToggle}
      >
        {label}
      </button>
      <div className="outer" style={{ height }} ref={outerRef}>
        <div style={{ display: 'none' }} ref={innerRef}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Accordion;
