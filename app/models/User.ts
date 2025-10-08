import bcrypt from "bcryptjs";
import { Schema, model, models, Document, Model } from "mongoose";
// import bcrypt from "bcryptjs"


interface IUser extends Document {
	firstName: string,
	lastName: string,
	email: string,
	phoneNumber?: string,
	profileImage: string,
	// accountNumber: string,
	password: string,
	isAdmin: boolean,
	accountNumber: string,
  	accountBalance: number
}

const UserSchema = new Schema<IUser>({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	phoneNumber:{
		type: String,
	},
	// accountNumber:{
	// 	type: String,
	// 	// default: 5000
	// },
	profileImage: {
		type: String,
		
	},
	password: {
		type: String,
		required: true
	},
	isAdmin: {
		type: Boolean,
		default: false
	},
	accountNumber: {
    type: String,
    unique: true,
    validate: {
      validator: function (v: string) {
        return /^\d{10}$/.test(v) // must be 10 digits
      },
      message: "Account number must be exactly 10 digits"
    }
  },
  accountBalance: { type: Number, default: 5000 }, // default ₦5000
}, { timestamps: true })



UserSchema.pre("save", function (next) {
  if (!this.accountNumber) {
    // Generate random 10-digit number
    this.accountNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString()
  }
  next()
})


UserSchema.pre("save", async function (next) {
	 if (!this.isModified("password")) return next();

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(this.password, salt);
	this.password = hashedPassword;
	next();
})

const UserModel: Model<IUser> = models.User || model<IUser>("User", UserSchema);

export default UserModel