import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setliveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      // Api Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(10),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className=" w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chat, index) => (
            <ChatMessage name={chat.name} message={chat.message} key={index} />
          ))}
        </div>
      </div>
      <form
        className="border border-black p-2 ml-2 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Hammad",
              message: liveMessage,
            })
          );
          setliveMessage("");
        }}
      >
        <input
          type="text"
          className="w-full border border-black px-2"
          value={liveMessage}
          onChange={(e) => setliveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-200 font-bold">Send</button>
      </form>
    </>
  );
};
export default LiveChat;
