import { Schema, model } from "mongoose";

import { handleSaveError, handleUpdateValidate } from "./hooks.js";

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
});

const Contact = model("contact", contactSchema);

export default Contact;

// import { genreList, releaseDateRegexp } from "../constants/movie-constants.js";

// const movieSchema = new Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     director: {
//         type: String,
//         required: true,
//     },
//     favorite: {
//         type: Boolean,
//         default: false,
//     },
//     genre: {
//         type: String,
//         enum: genreList,
//         required: true,
//     },
//     releaseDate: {
//         type: String,
//         match: releaseDateRegexp,
//         required: true,
//     }
// }, {versionKey: false, timestamps: true});

// movieSchema.pre("findOneAndUpdate", handleUpdateValidate);

// movieSchema.post("save", handleSaveError);

// movieSchema.post("findOneAndUpdate", handleSaveError);

// const Movie = model("movie", movieSchema);
// // category => categories
// // mouse => mice

// export default Movie;