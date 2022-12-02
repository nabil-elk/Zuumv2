import prisma from "../../../prisma/prisma";

export default async function handler(req, res) {

  if (req.method === "POST") {
    const { roomId, name, description, userId } = req.body;

    const room = await prisma.room.create({
      data: {
        roomId: roomId,
        name: name,
        description: description,
        userEmail: userId
      },
    });

    res.status(201).json({ room });
  }

  if (req.method === "GET") {
    const rooms = await prisma.room.findMany();

    res.status(200).json(rooms);

  }


}