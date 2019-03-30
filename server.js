const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('build'));

app.use('/api/sections', require('./src/server/routes/sectionRoutes'));
app.use('/api/programs', require('./src/server/routes/programRoutes'));

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
