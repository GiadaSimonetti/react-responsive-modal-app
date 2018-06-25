import React from 'react';
import Modal from 'react-responsive-modal';

import NewCalendar from './NewCalendar';

import './CenteredModal.css'

class CenteredModal extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="modal">
        <h4>Centered modal</h4>
        <button className="btn btn-action" onClick={this.onOpenModal}>
          Open
        </button>{' '}
        <div className="modal-wrapper">
          <Modal open={open} onClose={this.onCloseModal} center>
          <div className="modal-header">
          <h2>Calendar</h2>
          </div>
          <div className="modal-content">

          <NewCalendar />
          </div>
          <div className="modal-footer">
          <p>I am the footer</p>
          </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default CenteredModal;
