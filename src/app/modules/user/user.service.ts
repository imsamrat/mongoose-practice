import User from "./user.mode";

export const createUserToDB = async () => {
  const user = await new User({
    id: "801",
    role: "student",
    password: "Samrat",
    name: {
      firstName: "S.M.",
      lastName: "Samrat",
    },
    gender: "male",
    email: "imsamrat24@gmail.com",
    contactNo: "01610726728",
    emergencyContactNo: "01726168251",
    presentAddress: "Dakshinkhan, Dhaka",
    permanentAddress: "Jamalpur",
  });
  await user.save();
  return user;
};