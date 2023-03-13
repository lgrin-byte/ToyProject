import React from 'react'
import { db } from "../api/firebaseConfig"; 
import "firebase/firestore"; 

export default function FeedBack() {

    array

    db.collection('feedback').get().then((결과)=>{
        결과.forEach((doc)=>{
            array.push(doc.data())
            return(
            <>
                    <div>
                        <span>{doc.data().name}</span>
                        <span>{doc.data().datetime}</span>
                    </div>
                    <div>
                        <p>{doc.data().comment}</p>
                    </div>
                </>
            )
          })
    })
}
