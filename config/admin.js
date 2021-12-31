module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '82d9cce721f7d02eac873218a707aeb7'),
  },
});
