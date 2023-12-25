import { useState } from "react";
import Chatbox from "./Chatbox";
import SearchBar from "./SearchBar";

const Home = () => {

    const [chats, setChats] = useState([]);

    return (
        <div className="w-full overflow-auto bg-gradient-to-r from-sky-200  to-amber-200 h-screen flex p-10">
            <div className=" mx-auto w-9/12 bg-transparent h-full flex flex-col chat-container">
                <Chatbox chats={chats} />
                <SearchBar setChats={setChats} />
            </div>
        </div>
    )
}

export default Home;