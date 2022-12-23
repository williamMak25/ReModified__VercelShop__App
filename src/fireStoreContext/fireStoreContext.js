
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
    const [userData,setUserData] = useState([])
    const colRef = collection(db,'userData')
    console.log(userData)
    console.log(currentUser)
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{ 
            if(user){
                 setCurrentUser(user)
            }else{
             console.log('no user have found')
            }
        })
    },[])
    const Loading = () => {
        if(currentUser.length === 0){
            return(
              alert('your are still there')
            )
        }
    }
    const  signUp = (email,password,username) =>{
        setErr('')
        createUserWithEmailAndPassword(auth,email,password)
        .then(async (result)=>{
            console.log(result.user)
            const ref = doc(db,'userData',result.user.uid) // to read 'doc' document 
            const docRef = await setDoc(ref,{username})  // to read 'setDoc' document
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

    useEffect(()=>{
            getDocs(colRef)
            .then((snapshot)=>{
                let data = []
                snapshot.docs.map((doc)=>{
                return data.push({...doc.data(),id:doc.id})
                }) 
                setUserData(data)
            })
            .catch(err => err.message)
    
        },[])

        
    const value ={
        userData,
        currentUser,
        signUp,
        signIn,
        err,
        Loading
    }
  return (
    <authContext.Provider value={value}>
        {children}
    </authContext.Provider>
  )
}
