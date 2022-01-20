const bcrypt = require('bcryptjs');

const hashedPassword = bcrypt.hashSync("test", 10);

module.exports = [
    {
      id: 1,
      businessName: "Kabila Group LLC",
      country: "United States",
      email: "test@kabilagroup.com",
      password: hashedPassword,
    }
]