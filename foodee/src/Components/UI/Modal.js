import '../UI/Modal.css';
import ReactDOM from 'react-dom';

function Modal(props){
    const portalElememt = document.getElementById("modal");

    return(
        <>
        {ReactDOM.createPortal(
            <div className="backdrop" onClick={props.onClick}>
                <div className='overlay'>
                    {props.children}
                </div>
            </div>,
            portalElememt
        )}
        </>
    );
}

export default Modal;