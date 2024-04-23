import React from "react";
import { Card, CardTitle } from "../ui/card";
import prisma from "@/lib/prisma";
import { ContactRound, Star, Users } from "lucide-react";

const Header = async () => {
  const users = await prisma.user.findMany();
  return (
    <div className="grid grid-cols-3  items-center mt-4 ml-auto mr-auto max-w-[calc(100%-40px)]">
      <Card className="flex flex-col justify-center items-center p-4 bg-white shadow-lg rounded-lg max-w-[300px] w-28">
        <Users size={24} className="text-blue-500 mb-2" />
        <CardTitle className="text-lg font-semibold text-gray-700 mb-2">
          משתמשים
        </CardTitle>
        <p className="text-xl font-bold text-gray-900">{users.length}</p>
      </Card>
      <Card className="flex flex-col justify-center items-center p-4 bg-white shadow-lg rounded-lg max-w-[300px] w-28">
        <Star size={24} className="text-yellow-500 fill-yellow mb-2" />
        <CardTitle className="text-lg font-semibold text-gray-700 mb-2">
          דירוג
        </CardTitle>
        <p className="text-xl font-bold text-gray-900">{users.length}</p>
      </Card>
      <Card className="flex flex-col justify-center items-center p-4 bg-white shadow-lg rounded-lg max-w-[300px] w-28">
        <ContactRound size={24} className="text-blue-500 mb-2" />
        <CardTitle className="text-lg font-semibold text-gray-700 mb-2">
          צור קשר{" "}
        </CardTitle>
        <p className="text-xl font-bold text-gray-900">{users.length}</p>
      </Card>
    </div>
  );
};

export default Header;
