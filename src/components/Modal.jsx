import './Modal.css';

const Modal = ({ isOpen, onClose, title, content, format, price }) => {
  if (!isOpen) return null;

  const renderPrice = () => {
    if (Array.isArray(price) && price.length > 0) {
      return price.map((p, index) => (
        <div key={index}>
          <p className='price-section'>{p.price}</p>
        </div>
      ));
    }
    return <p>{price}</p>;
  };
  const renderFormat = () => {
    if (Array.isArray(format) && format.length > 0) {
      return format.map((f, index) => (
        <div key={index}>
          <p>{f.title}</p>
          <ul>
            {f.list.map((item, idx) => (
              <li key={idx}>{item.item}</li>
            ))}
          </ul>
        </div>
      ));
    }
    return <p>{format}</p>;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <img onClick={onClose} className="close-button" src="/close-x-10324.svg" alt="Close" />
        <div className='text-area'>
          <p className='text-line-title'>{title}</p>
          <p className='text-line'>{content}</p>
          {renderFormat()}
          <div className='price-section-container'>
            {renderPrice()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;