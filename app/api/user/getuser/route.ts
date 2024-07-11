import { User } from "@/db/model/User";
import userConnect from "@/db/user";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { id } = body;

  if (!id) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Id is  required",
      }),
      { status: 400 }
    );
  }

  console.log(id);

  try {
    await userConnect();
    const user = await User.findById(id);

    if (!user) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Invalid credentials",
        }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Login Successfully!!",
        id: user._id,
        email: user.email,
        name: user.name,
        isSet: user.setParticipant,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Error while fetching a user : " + error.message,
      }),
      { status: 500 }
    );
  }
}
