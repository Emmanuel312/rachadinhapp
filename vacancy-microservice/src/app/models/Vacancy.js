import { Schema, model } from 'mongoose';


const VacancySchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    furnished:
    {
      type: Boolean,
      required: true,
    },
    hire:
    {
      type: Number,
      required: true,
    },
    bills:
    {
      type: Number,
      required: true,
    },

    condominium_fee:
    {
      type: Number,
      required: true,
    },
    cep: {
      type: Number,
      required: true,
    },

    photo_id: {
      type: Schema.Types.ObjectId,
      ref: 'File',
      default: null,
    },

    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },

  },
  { timestamps: true },
);


export default model('Vacancy', VacancySchema);
