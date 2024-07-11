import { Participant } from "@/db/model/Participant";
import { User } from "@/db/model/User";
import userConnect from "@/db/user";
import { ComparePassword } from "@/utils/hashPassword";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    id,
    gameuid,
    gamegrene,
    description,
    contactlink,
    contacthandle,
    password,
  } = body;

  if (
    !id ||
    !gameuid ||
    !gamegrene ||
    !description ||
    !contactlink ||
    !contacthandle ||
    !password
  ) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "All field's are required",
      }),
      { status: 400 }
    );
  }

  //   const data = {
  //     userid: "",
  //     inGameUid: "",
  //     gamegerne: "",
  //     description: "",
  //     contactLinks: [],
  //     tournamentList: [],
  //     tournamentHostedList: [],
  //   };

  try {
    await userConnect();
    const isUser = await User.findById(id);

    if (!isUser) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "User credentials are wrong",
        }),
        { status: 400 }
      );
    }

    if (isUser.setParticipant) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "User credentials are Updated Already",
        }),
        { status: 400 }
      );
    }

    const isCorrect = await ComparePassword(password, isUser.password);

    if (!isCorrect) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "User credential's are wrong",
        }),
        { status: 400 }
      );
    }

    const data = {
      userid: id,
      inGameUid: [{ gerne: gamegrene, gameuid: gameuid }],
      gamegerne: gamegrene,
      description: description,
      contactLinks: [{ handleName: contacthandle, link: contactlink }],
      tournamentList: [],
      tournamentHostedList: [],
    };

    const newParticipant = new Participant(data);
    const savedParticipant = await newParticipant.save();

    const updateUser = await User.findByIdAndUpdate(id, {
      setParticipant: true,
      participantId: savedParticipant._id,
    });

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Participant details updated successfully",
        savedParticipant,
      }),
      { status: 500 }
    );
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Error while creating a user : " + error.message,
      }),
      { status: 500 }
    );
  }
}
