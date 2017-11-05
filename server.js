const express = require('express'),
    app = express(),
    port = process.env.PORT || 3335;

process.env.PWD = process.cwd();

app.use('/', express.static(process.env.PWD + '/dist'));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
