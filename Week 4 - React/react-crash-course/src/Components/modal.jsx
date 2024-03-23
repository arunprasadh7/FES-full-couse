import "./Modal.css";

function Modal({ title }) {
  function cancelModal() {
    console.log("Cancel Clicked");
  }

  function submitModal() {
    console.log("Submit Clicked");
  }
  return (
    <div>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={cancelModal}>
            Cancel
          </button>
          <button className="btn" onClick={submitModal}>
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}

export default Modal;
