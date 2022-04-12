const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/allblueee_blog')

const userSchema = new mongoose.Schema({
    name: String,
    password: String
})

const articleSchema = new mongoose.Schema({
    title: String,
    date: String,
    content: String,
    gist: String,//简介
    labels: Array
})

const Models = {
    User: mongoose.model('User', userSchema),
    Article: mongoose.model('Article', articleSchema)
}

module.exports = Models