import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#F6F1E9",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#FF8400",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#fff",
  botFontColor: "#4F200D",
  userBubbleColor: "#fff",
  userFontColor: "#4F200D",
};

const modalChatbot = () => {
  return (
    <div className=" ">
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Customer Service "
          speechSynthesis={{ enable: false, lang: "en" }}
          steps={[
            {
              id: "1",
              message: "Hello! What is your name?",
              trigger: "2",
            },
            {
              id: "2",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message: "Hi {previousValue}, nice to meet you! How can I help you?",
              trigger: "4",
            },
            {
                id: "4",
                user: true,
                trigger: "5",
              },
            {
                id: "5",
                message: "Thank you for the {previousValue} wonderfull question.",
                end: false,
              },
                {
                id: "4",
                user: true,
                trigger: "5",
              },
          ]}
          floating={true}
        />
      </ThemeProvider>
    </div>
  );
};

export default modalChatbot;
