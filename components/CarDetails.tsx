import { CarProps } from '@/types';

interface CarDetailProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailProps) => {
  return <div>CarDetails</div>;
};

export default CarDetails;
