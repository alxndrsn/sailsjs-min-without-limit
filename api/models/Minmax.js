module.exports = {
  attributes: {
    id: {
      type: 'string',
      unique: true,
      required: true,
    },
    min: {
      type: 'number',
      required: true,
    },
  },
};
