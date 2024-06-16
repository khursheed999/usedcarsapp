import { useContext, useState, useEffect } from "react";
import ContextStore from "../DataStore/ContextStore";
import { getDatabase, ref, onValue, set, serverTimestamp } from "firebase/database";
import { v4 } from "uuid";
import app from "../Firebase/Firebase-Config";
import { useNavigate } from "react-router-dom";
const Users = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [isUserExist, setIsUserExist] = useState(false);
    const { currentUser } = useContext(ContextStore);
    const db = getDatabase(app);
    const dataRef = ref(db, 'appData/users/');
    function fetchUsers() {
        //  let records=[];
        onValue(dataRef, (snapshot) => {
            snapshot.forEach(childSnapshot => {
                // let keyName=childSnapshot.key;
                let data = childSnapshot.val().createdBy;
                setUsers(prev => [...prev, {
                    data,
                }]
                )
            })
        });
    }
    useEffect(() => {
        fetchUsers();
        if (currentUser) {
            //console.log(currentUser);
            users.forEach(user => {
                if (user === currentUser.email) {
                    setIsUserExist(true);
                    return;
                }
            })
        }
        if (!isUserExist || users.length === 0) {
            addUsers();
        }
        navigate('/')


    }, [])

    console.log(users);

    function addUsers() {
        if (currentUser) {

            const displayName = currentUser.displayName;
            const email = currentUser.email;
            const profilePicture = currentUser.photoURL;
            set(ref(db, "appData/users/" + v4()), {
                name: displayName,
                createdAt: serverTimestamp(),
                createdBy: email,
                photo: profilePicture,
            });
        }

    }

}
export default Users;