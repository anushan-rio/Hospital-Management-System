  import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ToastMessage = () => {
  toast.success(" successfully!", {position: "bottom-right",autoClose: 2000,});

};

export default ToastMessage