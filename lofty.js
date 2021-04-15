const express = require("express");
const mongoose = require("mongoose");
const port = process.env.port || 5454;
const cors = require("cors");
const app = express();
const ONLINE_DB =
	"mongodb+srv://Oluwaseun1998:Oluwaseun1998@cluster0.rcifs.mongodb.net/lofty?retryWrites=true&w=majority";

mongoose
	.connect(ONLINE_DB, {
		useCreateIndex: true,
		useFindAndModify: false,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log(`Database is active`);
	});

app.use(cors());
app.use(express.json());
app.use("/", require("./controller"));

app.listen(port, () => {
	console.log(`port is listening`);
});
