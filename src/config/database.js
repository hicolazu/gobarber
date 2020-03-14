module.exports = {
  dialect: 'postgres',
  // 192.168.99.100 -> ip do pc de casa
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
