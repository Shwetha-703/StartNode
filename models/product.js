const path = require('path');
const fs = require('fs');
//const products = [];


const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, filedata)=>{
        if(err){
            return cb([]);
        }
        cb(JSON.parse(filedata));
    });
}

module.exports = class Product{
    constructor(t){
        this.title = t;
    }

    save(){
        getProductsFromFile(products=>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{
                console.log(err);
            });
        });
        // fs.readFile(p, (err, filedata)=>{
        //     let products= [];
        //     if(!err && filedata!=''){
        //         products = JSON.parse(filedata);
        //     }
        //     products.push(this);
        //     fs.writeFile(p, JSON.stringify(products), (err)=>{
        //         console.log(err);
        //     });
        // });
    }

    static fetchAll(cb){
        getProductsFromFile(cb);
    }
}