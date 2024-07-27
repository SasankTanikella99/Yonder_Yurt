import mongoose from'mongoose';
import bcrypt from 'bcryptjs';

export type UserType = {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    lastLogin: {
        type: Date,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetToken: String,
    resetTokenExpiration: Date,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

// "pre-save" hook. It's designed to run before a user document is saved to the database.

userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
    }
    next();
})


const User = mongoose.model<UserType>('User', userSchema);

export default User;