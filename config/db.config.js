module.exports = {
  url: process.env.MONGODB_URI  || "mongodb://localhost:27017/bezkoder_db",
  redis: process.env.REDIS_URL || "redis://h:pac188e7c573e42052e3d9149d9b0efd4fc66dac546758b2fc390943d535353b0@ec2-34-253-133-139.eu-west-1.compute.amazonaws.com:19239"
};
