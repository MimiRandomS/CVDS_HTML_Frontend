import MainLayout from "../../layouts/MainLayout/MainLayout";
import LateralBar from "../../components/LateralBar/LateralBar";
import ReservationsComponent from "../../components/Reservations/Reservations";

const Reservations = () => {
    return (
        <MainLayout 
            leftContent={<LateralBar />} 
            rightContent={<ReservationsComponent />}
        />
    );
};

export default Reservations;
