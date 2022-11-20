import { Overlay } from './styles';

interface OrderModalProps{
  visible: boolean;
}
export function OrderModal({visible}: OrderModalProps)
{
  if(!visible){
    return null;
  }
  return(
    <Overlay>
      <h1>Order modal</h1>;
    </Overlay>
  );
}