const express = require('express'),
    app = express(),
    port = process.env.PORT || 3099;

// app.use(express.static(__dirname + '/dist'));

//<------ production --------->

process.env.PWD = process.cwd();

app.use('/', express.static(process.env.PWD + '/dist'));

//<--------------------------->
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
