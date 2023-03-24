
import { async } from '@firebase/util';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { getDocs, collection, doc, setDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../redux/firebase';
import { db } from '../redux/firebase';

const authContext = React.createContext();
export const useAuth = () =>{
    return useContext(authContext)
}

export const FireStoreContextProvider = ({children}) => {
    const [err,setErr] = useState('');
    const [currentUser,setCurrentUser] = useState([]);
    const [userData,setUserData] = useState([]);
    const colRef = collection(db,'userData')

    console.log(userData)
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setCurrentUser(user)
                getDocs(colRef)
                .then((snapshot)=>{
                    let data = []
                    snapshot.docs.map((doc)=>{
                    return data.push({...doc.data(),id:doc.id})
                    }) 
                    setUserData(data)
                })   
            .catch(error => error.message)
           
            }else{
             console.log('no user have found')
            }
        })
    },[])
    const  signUp = (email,password,username) =>{
        setErr('')
        createUserWithEmailAndPassword(auth,email,password)
        .then(async (result)=>{
            const ref = doc(db,'userData',result.user.uid) // to read 'doc' document 
            const docRef = await setDoc(ref,{name:username})  // to read 'setDoc' document
            //await addDoc(ref,{username})


        })
        .then((al)=>{
            alert('your data is ready')
        })
        .catch((error)=>{
            console.log(error.message)
            setErr(error)
        })
    }
    const userInfo = async(firstname,lastname,address,postcode,country,phno) =>{
        const ref = doc(db,'userData',currentUser.uid) 
            setDoc(ref,{
                name:`${firstname}${lastname}`,
                country:country,
                postalcode:postcode,
                address:address,
                phnumber:phno
            }).then((al)=>{
                alert('your data is ready')
            })
            .catch((error)=>{
                console.log(error.message)

            })
       
    }
    const signIn = (email,password) =>{
        setErr('')
        signInWithEmailAndPassword(auth,email,password)
        .then((logUser)=>{
            console.log(logUser)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

        
    const value ={
        userData,
        currentUser,
        signUp,
        signIn,
        err,
        userInfo
    }
  return (
    <authContext.Provider value={value}>
        {children}
    </authContext.Provider>
  )
}
