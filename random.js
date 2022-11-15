const users = (async () => {
  const data = await fetch(
    "https://devpipeline-mock-api.herokuapp.com/api/auth/login",
    {
      method: "POST",
      headers: {
        "content-type": "applications/json",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log("Do Something here"));

  return data.users;
})();

// const randomIndex = Math.floor(Math.random() * Array.length);
// const randomValue = arr[randomIndex];

// const data = [
//   ["Aiden", 0][("Amanda", 0)][("Brett", 0)][("Courtney", 0)][("Crystal", 0)][
//     ("Enoka", 0)
//   ][("Jackson", 0)][("Karely", 0)][("Kassidy", 0)][("Lisa", 0)][
//     ("Madelyyn", 0)
//   ][("Matt", 0)][("Michael", 0)][("Olivia", 0)][("Royeal", 0)][("Tallon", 0)],
// ];
