import React, { useContext } from 'react'
import LanguageData from './Lanaguage/LanaguageContext'

export default function LanMyForm() {

   const {lan} = useContext(LanguageData);


   const userInfo = {

    "en": {

        "firstName": "firstName",
        "lastName" : "lastName"
    },
    "hi":{

        "firstName": "pratham name",
        "lastName": 'antim name'

    }


   }
  return (
    <div>
        
            <label>
                {userInfo[lan].firstName}

            </label>

            <input type='text' name="firstName"/>

            <label>
                {userInfo[lan].lastName}

            </label>

            <input type='text' name="lastName"/>


    </div>
  )
}
