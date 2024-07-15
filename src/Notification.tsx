import { useState } from "react";
import avatartmark from '@/assets/avatar-mark-webber.webp'
import avatarAngel from '@/assets/avatar-angela-gray.webp'
import avatarThomspon from '@/assets/avatar-jacob-thompson.webp'
import avatarRizky from '@/assets/avatar-rizky-hasanuddin.webp'
import avatarKimberly from '@/assets/avatar-kimberly-smith.webp'
import avatarNathan from '@/assets/avatar-nathan-peterson.webp'
import avatarAnna from '@/assets/avatar-anna-kim.webp'
import noavat from '@/assets/image-chess.webp'


const Notification = () => {
  const [read, setread] = useState(false)
  return (
    <div className="bg-white lg:w-[60%] my-10 mx-auto text-[16px] ">
      <section className="">
        <div className="flex justify-between text-white p-4">
          <h1 className="text-[#2A292F] font-extrabold">
            Notification <span className="bg-blue-700  px-2 py-1 text-white rounded-lg"> {
              read ? 0 : 3
            } </span>
          </h1>
          <button className="text-[#2A292F] font-medium " onClick={() => setread(!read)}>
            {
              read ? 'Mark as Unreaded' : 'Mark as Readed'
            }
          </button>
        </div>

        {/* notification desings */}


      </section>
      <div className="bg-gray-100 my-2 rounded-lg">
        <div className=" flex  items-center gap-x-4  text-[#F6FAFD] p-2">
          <img src={avatartmark} alt="sadf" className="rounded-lg w-10   " />
          <div>
            <h1 className="text-gray-600">
              <span className="font-extrabold text-[#202329]  "> Mark Webber </span>
              react to your recent post
              <span className={`${read ? 'text-gray-500 font-bold ml-1' : 'text-[#02276F] font-bold ml-1'}`}>
                My first tournament
              </span>

            </h1>
            <h6 className="mt-[-4px] text-[#9B9EA4]">
              1 min ago
            </h6>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 my-2 rounded-lg">
        <div className=" flex  items-center gap-x-4  text-[#F6FAFD] p-2">
          <img src={avatarAngel} alt="sadf" className="rounded-lg w-10   " />
          <div>
            <h1 className="text-gray-600">
              <span className={`${read ? 'text-gray-500 font-bold' : 'text-[#02276F] font-bold'}`}> Angel Grey  </span>
              followed You
            </h1>
            <h6 className="mt-[-4px] text-[#9B9EA4]">
              1 min ago
            </h6>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 my-2 rounded-lg">
        <div className=" flex  items-center gap-x-4  text-[#F6FAFD] p-2">
          <img src={avatarThomspon} alt="sadf" className="rounded-lg w-10   " />
          <div>
            <h1 className="text-gray-600">
              <span className="font-extrabold text-[#202329]  "> Jacob Thomspon  </span>
              has join your group  <span className={`${read ? 'text-gray-500 font-bold' : 'text-[#02276F] font-bold'}`}>
                Chess Club
              </span>
            </h1>
            <h6 className="mt-[-4px] text-[#9B9EA4]">
              1 min ago
            </h6>
          </div>
        </div>
      </div>
      <>
        <div className="bg-gray-100 my-2 rounded-lg">
          <div className=" flex  items-center gap-x-4  text-[#F6FAFD] p-2">
            <img src={avatarRizky} alt="sadf" className="rounded-lg w-10   " />
            <div>
              <h1 className="text-gray-600">
                <span className="font-extrabold text-[#202329]  "> Rizky Hasanuddin </span>
                send you a private message
              </h1>
              <h6 className="mt-[-4px] text-[#9B9EA4]">
                5 day ago
              </h6>
            </div>
          </div>
        </div>
        <div className="bg-[#E7F0FB]  mt-2 ml-10 p-5   rounded-lg mx-auto">
          <p className="">
            Thanks for the setting up the chess club ,  I am really excited to join the club and learn from the best players. Are there any rules that I should know about? Please let me know. Also I am looking forward to meet you in person.
          </p>
        </div>
      </>
      <div className="bg-gray-100 my-2 rounded-lg">
        <div className=" flex  items-center gap-x-4  text-[#F6FAFD] p-2">
          <img src={avatarKimberly} alt="sadf" className="rounded-lg w-10   " />
          <div>
            <h1 className="text-gray-600">
              <span className="font-extrabold text-[#202329] w-[400px] "> Kimberly Smith </span>
              commnet on your photo

            </h1>
            <h6 className="mt-[-4px] text-[#9B9EA4]">
              1 week ago
            </h6>
          </div>
          <img src={noavat} alt="sadf" className="rounded-lg md:w-10  md:ml-[46%]   " />
        </div>
      </div>
      <div className="bg-gray-100 my-2 rounded-lg">
        <div className=" flex  items-center gap-x-4  text-[#F6FAFD] p-2">
          <img src={avatarNathan} alt="sadf" className="rounded-lg w-10   " />
          <div>
            <h1 className="text-gray-600">
              <span className="font-extrabold text-[#202329]  "> Nathan Peterson </span>
              react to your recent post  <span className="text-gray-500 font-bold">
                5 end-game stragies to increase your win rate 
              </span>

            </h1>
            <h6 className="mt-[-4px] text-[#9B9EA4]">
              2 week ago
            </h6>
          </div>
        </div>

      </div>
      <div className="bg-gray-100 my-2 rounded-lg">
        <div className=" flex  items-center gap-x-4  text-[#F6FAFD] p-2">
          <img src={avatarAnna} alt="sadf" className="rounded-lg w-10   " />
          <div>
            <h1 className="text-gray-600">
              <span className="font-extrabold text-[#202329]  "> Anna kim  </span>
              left the group   <span className="text-gray-500 font-bold"> <span className="text-gray-500 font-bold">
                Chess Club  
              </span>

              </span>

            </h1>
            <h6 className="mt-[-4px] text-[#9B9EA4]">
              2 week ago
            </h6>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Notification;