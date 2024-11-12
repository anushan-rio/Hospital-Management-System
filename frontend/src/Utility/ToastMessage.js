import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ToastMessage = (message,messagetype) => {
  if(messagetype==="Warning"){
    toast.warning(message, {position: "bottom-right",autoClose: 2000,});
  }
  if(messagetype==="Success"){
    toast.success(message, {position: "bottom-right",autoClose: 2000,});
  }
  if(messagetype==="Error"){
    toast.error(message, {position: "bottom-right",autoClose: 2000,});
  }

};

export default ToastMessage





