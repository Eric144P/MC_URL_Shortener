import React, { FormEvent, useState } from "react";
import { customAlphabet } from "nanoid";
import logo from "./logo.svg";
import {
  useAddMessageMutation,
  useGetMessagesQuery,
} from "./graphql/message.generated";
import LinkResult from "./LinkResult";

function App() {
  const [newMessage, setNewMessage] = useState({ value: "" });
  const { data, refetch } = useGetMessagesQuery();
  const [addMessage] = useAddMessageMutation();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage({ value: e.target.value });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    function isValidUrl(_string: string): boolean {
      const matchpattern =
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
      return matchpattern.test(_string);
    }
    if (newMessage.value && isValidUrl(newMessage.value)) {
      const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 6);
      const shorturl = nanoid();
      await addMessage({
        variables: { longurl: newMessage.value, shorturl: shorturl },
      });
      setNewMessage({ value: "" });
      await refetch();
    } else {
      alert("URL not valid");
    }
  };

  return (
    <div className="bg-main-blue min-h-screen">
      <header className="container mx-auto py-14 flex justify-between">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-white font-bold text-2xl">URL shortener</h1>
      </header>
      <section className="container mx-auto py-8">
        <div
          data-cy="messageContainer"
          className="p-8 flex flex-col gap-6 items-center bg-white rounded-2xl"
        >
          <div className="font-semibold text-xl">
            Add your URL to shorten it !
          </div>

          <div className="font-semibold">
            <form className="flex gap-4" onSubmit={onSubmit}>
              <input
                data-cy="messageInput"
                placeholder="Your URL"
                className="p-3 w-96 border-2 rounded-full border-main-blue"
                value={newMessage.value}
                onChange={onChange}
              />
              <button
                data-cy="submit"
                type="submit"
                className="p-3 bg-main-blue text-white rounded-full"
              >
                Add your URL
              </button>
            </form>
          </div>
          {data?.messages.map((message) => (
            <div key={message.id} className="p-6 flex gap-6 items-center">
              <b>
                <u>
                  {" "}
                  <a href={message.longurl}>
                    localhost:4000/{message.shorturl}
                  </a>{" "}
                </u>
              </b>

              <LinkResult urlshortened={message.shorturl} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
