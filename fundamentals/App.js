const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement(
      "h1",
      { id: "sub-child-11" },
      "Hi Harish, Good Morning"
    ),
    React.createElement("h1", { id: "sub-child-2" }, "Hi Guru,Good Evening"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", { id: "sub-child-3" }, "Hi Harish, Good Morning"),
    React.createElement("h1", { id: "sub-child-4" }, "Hi Guru,Good Evening"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(heading);
