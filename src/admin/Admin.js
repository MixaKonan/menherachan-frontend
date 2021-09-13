import {useContext} from "react";
import {AdminContext} from "../common/contexts/AdminContext";

function Admin() {
    // eslint-disable-next-line no-unused-vars
    const {admin} = useContext(AdminContext);

    console.log(admin)

    return (
        <div>
            <h1>Hello {admin.nickname}</h1>
            <h1>With email {admin.email}</h1>
        </div>
    );
}

export default Admin;