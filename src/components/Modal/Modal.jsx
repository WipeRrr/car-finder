import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import exit from '../../images/sprite.svg';
import css from './Modal.module.css';
const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children, isOpen, onClose }) {
  useEffect(() => {
    const closeESC = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', closeESC);

    return () => {
      window.removeEventListener('keydown', closeESC);
    };
  }, [onClose]);

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.backdrop} onClick={handleBackDropClick}>
      <div className={css.modal}>
        <button className={css.btn_close} type="button" onClick={onClose}>
          <svg className={css.cross} width="24" height="24">
            <use href={exit + '#x'}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}
