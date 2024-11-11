const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("user", UserSchema);

async function main() {
  const MongoDBURI = "mongodb://localhost:27017/recipes";
  //   mongoose
  //     .connect(MongoDBURI)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  try {
    await mongoose.connect(MongoDBURI);
    //  console.log(res.connections.length);
    //   start writting query
    //  1.  create a user
    // const newUser = await UserModel.create({
    //   name: "karthi",
    //   email: "XXXXXXXXXXXXX",
    //   password: 988,
    //   role: "developer",
    // });
    // console.log(newUser);

    // 2.  Retreiving data
    // const users = await UserModel.find({ _id: "672cb19afd07652c71db7776" });
    // console.log(users);

    //  3. update the data
    // const res = await UserModel.findByIdAndUpdate(
    //   "672cb1b0aa1703f41f0c3e62",
    //   {
    //     name: "pirsanth",
    //     email: "XXXXXXXXXXXXX",
    //     password: 988,
    //     role: "developer",
    //   },
    //   { new: true }
    // );
    // console.log(res);

    //   4.delete the data
    const res = await UserModel.findByIdAndDelete("672cb19afd07652c71db7776");
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
}
main();
