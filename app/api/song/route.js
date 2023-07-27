import { connectToDatabase } from "@/utils/database";
import Song from "@/models/song";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { title, artist, album, year, genre, month, image, file } =
    await req.json();
  try {
    await connectToDatabase();
    const song = new Song({
      title,
      artist,
      album,
      year,
      genre,
      month,
      image,
      file,
    });
    const result = await song.save();
    return new NextResponse("song added", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("song not added", { status: 500 });
  }
};
