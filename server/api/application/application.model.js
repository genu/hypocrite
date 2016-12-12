'use strict';

import mongoose from 'mongoose';

var ApplicationSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Application', ApplicationSchema);
