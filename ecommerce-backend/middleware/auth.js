const jwt = require('jsonwebtoken');

const authMiddleware = (roles = []) => {
    return (req, res, next) => {
        const token = req.header('Authorization')?.split(' ')[1];
        if (!token) return res.status(401).json({ message: 'Access denied: no token provided' });

        try {
            const verified = jwt.verify(token, process.env.JWT_SECRET);
            req.user = verified;

            // Role check if roles are specified
            if (roles.length && !roles.some(role => verified.roles.includes(role))) {
                return res.status(403).json({ message: 'Access forbidden: insufficient rights' });
            }

            next();
        } catch (error) {
            res.status(400).json({ message: 'Invalid token' });
        }
    };
};

module.exports = authMiddleware;

