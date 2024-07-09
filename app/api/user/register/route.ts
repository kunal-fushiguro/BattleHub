import { NextResponse } from "next/server";
import userConnect from "@/db/user";
import { HashingPassword } from "@/utils/hashPassword";
import { User } from "@/db/model/User";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "All fields are required.",
      }),
      { status: 400 }
    );
  }

  try {
    await userConnect();

    const isUserExist = await User.findOne({ email: { $eq: email } });

    if (isUserExist) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Email Already Registered",
        }),
        { status: 400 }
      );
    }

    const hashedPassword = await HashingPassword(password);
    const data = {
      name: name,
      email: email,
      password: hashedPassword,
      setParticipant: false,
      participantId: "",
    };

    const newUser = new User(data);
    const savedUser = await newUser.save();

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "User Created SuccessFully",
        id: savedUser._id,
        email: savedUser.email,
        name: savedUser.name,
      }),
      { status: 200 }
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
