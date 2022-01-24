const knex = require("../knexConfig");
const authenticate = require("../middleware/authenticate");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;

exports.registerUser = (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const newUser = {
        ...req.body,
        password: hashedPassword,
    }
    knex("users")
        .insert(newUser)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).send("Error registering user" + err));
};

exports.createJWT = (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).send("Please enter the required fields");
    }

    knex("users")
        .where({ email})
        .first()
        .then((user) => {
            const isPasswordCorrect = bcrypt.compareSync(password, user.password)
            if(!isPasswordCorrect) {
                return res.status(400).send("Invalid password");
            }

            const token = jwt.sign({ id: user.id, email: user.email, businessName:user.businessName  }, JWT_KEY, { expiresIn: "24h" });

            res.json({ token });
        })
        .catch((err) => res.status(400).send("Invalid credentials" + err));
};

exports.userInfo = (req, res) => {
    // console.log(req);
        // knex("users")
        // .where({ email: req.user.email })
        // .first()
        // .then((user) => {
        //     delete user.password;
        //     res.json(user);
        // });
};
