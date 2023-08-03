import React from "react";

interface pageProps {
  params: {
    id: string;
  };
}

const blog = ({ params: { id } }: pageProps) => {
  return <div>page {id}</div>;
};

export default blog;
