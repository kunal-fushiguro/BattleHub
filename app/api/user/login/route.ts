import { User } from "@/db/model/User";
import userConnect from "@/db/user";
import { NextResponse } from "next/server";
import { ComparePassword } from "@/utils/hashPassword";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "All fields are required",
      }),
      { status: 400 }
    );
  }

  try {
    await userConnect();
    const user = await User.findOne({ email: { $eq: email } });

    if (!user) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Invalid credentials",
        }),
        { status: 400 }
      );
    }

    const isCorrect = await ComparePassword(password, user.password);

    if (!isCorrect) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Invalid credential's",
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
