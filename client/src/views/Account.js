import UpdateAccount from "../components/UpdateAccount";
import PastOrders from "../components/PastOrders";
import NavBar from '../components/NavBar';
const Account = () => {

    return (
        <div>
            <NavBar/>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <UpdateAccount />
                        </div>
                        <div className="col">
                            <PastOrders />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Account;