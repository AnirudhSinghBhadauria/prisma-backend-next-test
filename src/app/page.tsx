"use client";

import { Fragment, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState<[]>([]);

  const getSomePost = async () => {
    const posts = await fetch("/api/posts", {
      method: "GET",
    });

    const result = await posts.json();

    setPosts(result.posts);
  };

  // const addUsers = async () => {
  //   const posts = await fetch("/api/posts", {
  //     method: "POST",
  //     body: JSON.stringify([
  //       {
  //         name: "Eminem",
  //         email: "eminem@example.com",
  //         age: 48
  //       },
  //       {
  //         name: "Kendrick Lamar",
  //         email: "kendrick@example.com",
  //         age: 34
  //       },
  //       {
  //         name: "Jay-Z",
  //         email: "jayz@example.com",
  //         age: 51
  //       },
  //       {
  //         name: "Cardi B",
  //         email: "cardib@example.com",
  //         age: 28
  //       },
  //       {
  //         name: "Drake",
  //         email: "drake@example.com",
  //         age: 34
  //       },
  //       {
  //         name: "Nicki Minaj",
  //         email: "nicki@example.com",
  //         age: 38
  //       },
  //       {
  //         name: "Kanye West",
  //         email: "kanye@example.com",
  //         age: 44
  //       },
  //       {
  //         name: "Lil Wayne",
  //         email: "lilwayne@example.com",
  //         age: 38
  //       },
  //       {
  //         name: "Travis Scott",
  //         email: "travisscott@example.com",
  //         age: 30
  //       },
  //       {
  //         name: "Megan Thee Stallion",
  //         email: "megan@example.com",
  //         age: 26
  //       }
  //     ]),
  //   });

  //   console.log(posts)
  // };

  return (
    <Fragment>
      <ul>{posts && posts.map(({ name }) => <li key={name}>{name}</li>)}</ul>
      <button onClick={getSomePost}>Make Api call</button>
      <br />
      {/* <button onClick={addUsers}>Add Users</button> */}
    </Fragment>
  );
};

export default Home;

// [
//     {
//       name: "Kanye West",
//       email: "ye@gmail.com",
//     },
//     {
//       name: "Drake",
//       email: "drake@gmail.com",
//     },
//     {
//       name: "Kendrick Lamar",
//       email: "kdot@gmail.com",
//     },
//     {
//       name: "Jay-Z",
//       email: "j@gmail.com",
//     },
//     {
//       name: "LL Cool J",
//       email: "cool@gmail.com",
//     },
//     {
//       name: "Howard",
//       email: "howard@gmail.com",
//     },
//   ]
