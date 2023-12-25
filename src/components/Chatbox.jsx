import { useState } from "react";

const Chatbox = ({chats}) => {

    return (

        <div className="flex-1 p-5 overflow-auto mb-2">
            {/* chatbot message */}
            {chats.length == 0 && 
            <div className="mb-2 flex">
                <div className="flex-shrink-0 border rounded-full border-black w-8 h-8 p-1 me-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
                </div>
                <div className="mr-3 rounded flex-col p-2 font-mono text-center py-10 ">
                    <div className=" text-7xl font-bold mt-10">Greeting! </div>
                    <div className="text-4xl font-medium my-5">How may I assist you today?</div>
                    <p className=" font-semibold text-xl text-slate-600"> Whether you have questions, need information, or simply want to engage in a friendly conversation, I am here to help. Feel free to ask me anything, and I'll do my best to provide helpful and informative responses. Additionally, I can provide information on a wide range of topics, entertain you with jokes or stories, or even engage in a game of trivia.
How can I be of assistance?</p>
                
                </div>
            </div> }

            {chats.map((chat,i)=>(
                chat.sender == "user" ?
                <div className="mb-2 ms-28 flex flex-row-reverse" key={i}>
                    <div className="flex-shrink-0 border rounded-full border-black w-8 h-8 p-1 ms-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="ml-3 rounded bg-blue-500 p-2 text-white">
                        <p>{chat.msg}</p>
                    </div>
                </div>
                :
                <div className="mb-2 me-28 flex" key={i}>
                    <div className="flex-shrink-0 border rounded-full border-black w-8 h-8 p-1 me-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                        </svg>
                    </div>
                    <div className="mr-3 rounded bg-gray-50 p-2">
                        <p>{chat.msg}</p>
                    </div>
                </div>
            ))}

        

        </div>
    )
}

export default Chatbox;