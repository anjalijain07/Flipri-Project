const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const { ConfigureDb } = require('./src/config/dbConfig');
const adminRoutes = require('./src/router/adminRoutes');
const projectRoutes = require('./src/router/project.router')
const clientRoutes = require('./src/router/clientRouter');
const userRoutes = require('./src/router/userRouter');
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: '10mb' })); // for JSON payloads
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true })); // for form data

// Or if you're using Express's built-in JSON parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());
ConfigureDb();
app.use('/api/admin', adminRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/users', userRoutes);
app.use('/api/projects-users', userRoutes);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});