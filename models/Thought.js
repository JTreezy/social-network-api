const { Schema, model } = require('mongoose');
const moment = require('moment');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: ()=> new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtValue) => moment(createdAtValue).format('MMM DD, YYYY [at] hh:mm a')
        }
    },
        {
            toJSON: {
                getters: true
            }
        }
);

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtValue) => moment(createdAtValue).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: trues
    },
    reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;