"use client"
import axios from "@/utils/axios";
import { User } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DashboradPage = () => {
  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
      if (!isLoggedIn) {
          router.push("/auth/login");
          return;
      }
  }, [isLoggedIn])

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/dashboard", {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      });
        setUser(response.data);
        // console.log(response)
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-2 mt-28 w-full font-raleway items-center mt-15">
      <div className="p-4 text-center w-full">
        <span className="text-3xl">Welcome to Dashboard</span>
        <div className="items-center justify-center flex flex-row w-full">
          <div className="rounded-full shadow-lg p-2 m-1">
            <User size={90} />
          </div>
        </div>

        {/* <div className="w-full font-raleway flex flex-col justify-center items-center p-2 mt-10 mb-10">
          <h2 className="mb-3 block text-start bg-neutral-100 text-xl font-bold w-2/3 p-2">Bio</h2>
          <div className="rounded-xl w-2/3 bg-neutral-100 p-4 shadow-lg">
            "Passionate software developer with a knack for turning innovative ideas into robust and scalable software solutions. Equipped with a strong background in programming, I thrive on solving complex problems and designing efficient code. Always eager to stay up-to-date with the latest technologies and best coding practices. As a team player, I collaborate seamlessly with cross-functional teams to deliver high-quality software products. When I'm not coding, you can find me exploring new technologies, attending hackathons, and contributing to open-source projects. Let's build the future together, one line of code at a time!"
          </div>
        </div> */}

        <div className="flex flex-row justify-center gap-20 mt-4 rounded-lg m-5 w-full flex-wrap">
          <div className="w-1/3 shadow-lg">
            <h2 className="block w-full bg-blue-500 text-xl font-bold p-3 text-white">Basic Profile</h2>
            <div className="m-2 p-5 bg-white">
              <div className="border-b-2 text-start flex flex-row justify-between">
                <div className="font-bold w-1/2">Firstname</div>
                <div className="w-1/2">{user?.firstName}</div>
              </div>
              <div className="border-b-2 text-start flex flex-row">
                <div className="font-bold w-1/2">Lastname</div>
                <div className="w-1/2">{user?.lastName}</div>
              </div>
              <div className="border-b-2 text-start flex flex-row">
                <div className="font-bold w-1/2">Email</div>
                <div className="w-1/2">{user?.email}</div>
              </div>
              <div className="border-b-2 text-start flex flex-row">
                <div className="font-bold w-1/2"></div>
                <div className="w-1/2"></div>
              </div>
            </div>
          </div>
          <div className="w-1/3 shadow-lg">
            <h2 className="w-full bg-blue-500 text-xl font-bold p-3 text-white">Additional Info</h2>
            <div className="m-2 p-5 bg-white">
              <div className="border-b-2 text-start flex flex-row justify-between">
                <div className="font-bold w-1/2">Age</div>
                <div className="w-1/2">{user?.age}</div>
              </div>
              <div className="border-b-2 text-start flex flex-row">
                <div className="font-bold w-1/2">Gender</div>
                <div className="w-1/2">{user?.gender}</div>
              </div>
              <div className="border-b-2 text-start flex flex-row">
                <div className="font-bold w-1/2">Phone</div>
                <div className="w-1/2">{user?.phone}</div>
              </div>
              <div className="border-b-2 text-start flex flex-row">
                <div className="font-bold w-1/2">Profession</div>
                <div className="w-1/2">{user?.profession}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboradPage;
