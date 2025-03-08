import mongoose, { Schema, Document } from 'mongoose';

const subjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    alumni: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
});

export interface ISubject {
    name: string;
    teacher: string;
    alumni: mongoose.Types.ObjectId[];
}

const Subject = mongoose.model<ISubject>('Subject', subjectSchema);
export default Subject;
