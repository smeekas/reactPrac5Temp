import { createStore } from "redux";

const initialValues = {
  data: [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
    },
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
    },
    {
      id: 5,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
    },
    {
      id: 6,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
    },
  ],
  userDetail: null,
  change: true,
};
const userReducer = (state = initialValues, action) => {
  if (action.type === "delete") {
    let newUserDetail;
    if (state.userDetail) {
      if (action.id === state.userDetail.id) {
        newUserDetail = null;
      } else {
        newUserDetail = state.userDetail;
      }
    } else {
      newUserDetail = null;
    }
    return {
      data: state.data.filter((user) => user.id !== action.id),
      userDetail: newUserDetail,
      change: state.change,
    };
  }
  if (action.type === "userdetail") {
    const detail = state.data.find((user) => user.id === action.id);
    return {
      data: state.data,
      userDetail: detail,
      change: !state.change,
    };
  }
  return state;
};
const store = createStore(userReducer);
export default store;
