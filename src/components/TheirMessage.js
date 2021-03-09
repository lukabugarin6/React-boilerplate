import React from "react";

const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className={`message-image ${isFirstMessageByUser ? "ml-1" : "ml-12"}`}
        />
      ) : (
        <div
          className={`message float-left bg-red-600 ${
            isFirstMessageByUser ? "ml-1" : "ml-12"
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
