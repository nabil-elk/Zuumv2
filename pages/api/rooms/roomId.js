import prisma from "../../../prisma/prisma";

import {getSession} from 'next-auth/react';


export default async function handler(req, res) {

  if (req.method === "GET") {
    const session = await getSession({req})
    const existingUser = await prisma.room.findUnique({
        where: {
          userEmail: session.user.email
        }
    })

   
        res.status(200).json(existingUser);
      
  

  }


}