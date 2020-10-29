const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Thing = require('./models/Thing');


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://test_oc:test_oc@cluster0.e4c0v.mongodb.net/<dbname>?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  // app.get('/api/products', (req, res, next) => {
  //   Thing.find()
  //     .then(things => res.status(200).json(things))
  //     .catch(error => res.status(400).json({ error }));
  // });

  app.get('/api/products', (req, res, next) => {
    const products = [
      {
        name: 'carotte',
        description: 'Les infos de mon premier objet',
        price: 4900,
        inStock: true,
      },
      {
        name: 'concombre',
        description: '2eme descritpion',
        price: 300,
        inStock: true,
      },
    ];
    res.status(200).json(products);
  });

  // app.post('/api/products', (req, res, next) => {
  //   {
  //     "name": string,
  //     "description": string,
  //     "price": number,
  //     "inStock": boolean
  // }
    // thing.save()
    //   .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    //   .catch(error => res.status(400).json({ error }));
  // });


  // app.get('/api/products', (req, res, next) => {
  //   Thing.findOne()
  //     .then(thing => res.status(200).json(things))
  //     .catch(error => res.status(404).json({ error }));
  // });


  // app.post



  // app.put('/api/stuff/:id', (req, res, next) => {
  //   Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
  //     .then(() => res.status(200).json({ message: 'Objet modifié !'}))
  //     .catch(error => res.status(400).json({ error }));
  // });

  // app.delete('/api/stuff/:id', (req, res, next) => {
  //   Thing.deleteOne({ _id: req.params.id })
  //     .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
  //     .catch(error => res.status(400).json({ error }));
  // });


module.exports = app;