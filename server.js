const express = require("express");
const PORT = process.env.PORT || 3001;
const fs = require("fs");
const app = express();

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/rootbuyer";
const mongoose = require("mongoose");
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on("connected", function() {
    console.log("\nConnected to RootBuyer Database");
});

let Roots = require("./models/roots.js");

const path = require("path");

app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}



app.get("/api/roots/:id", function(req, res) {
    console.log("HITTING API ROUTE: " + req.params.id);

    let image = path.join(__dirname, "/client/public/Images/Roots/"+ req.params.id +"/image.jpg");
    let imageRelative = "/Images/Roots/"+ req.params.id +"/image.jpg";
    if (req.params.id !== "all") {
        Roots.findOne({
            rootId: req.params.id
        }).then(function(dbRoot) {
            console.log(dbRoot);
            let info = {
                name: dbRoot.name,
                family: dbRoot.family,
                altNames: dbRoot.altNames,
                desc: dbRoot.desc.replace(/\n/g, "\n\n"),
                harvesting: dbRoot.harvesting.replace(/\n/g, "\n\n"),
                planting: dbRoot.planting.replace(/\n/g, "\n\n"),
                references: dbRoot.references.replace(/\n/g, "\n\n"),
                demand: dbRoot.demand,
                imageLink: imageRelative,
            };
    
            res.json(info);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });    
    }

    else {
        console.log("Searching for all Roots");
        Roots.find({}).then(function(dbRoots) {
            let roots = [];
            dbRoots.forEach(root => {
                roots.push({
                    name: root.name,
                    id: root.rootId
                });
            });
            res.json(roots);
        }).catch(err => res.json(err));
    }
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(PORT, () => {
    console.log("Get your kicks on ROOT sixty-six");
});

module.exports = app;
