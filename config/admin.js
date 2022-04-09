module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd8e63a1714ffe58ad020826bd0dd3a22'),
  },
});
