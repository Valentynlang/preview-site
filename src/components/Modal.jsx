import './Modal.css';

const Modal = ({ isOpen, onClose, title, content, format, price }) => {
  if (!isOpen) return null;

  const renderFormat = () => {
    if (Array.isArray(format) && format.length > 0) {
      return format.map((f, index) => (
        <div key={index}>
          <h4>{f.title}</h4>
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
          <p className='price-section'>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;