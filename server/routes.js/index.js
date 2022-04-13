const express = require('express')
const body_parser = require('body-parser')
const router = express.Router()
const db = require('../db')

router.use(body_parser.json())
router.use(body_parser.urlencoded({ extended: false }))
// router.post('/api/user/signup', function (req, res) {
//     let userInfo = req.body.userInfo;
//     db.User.findOne({ name: userInfo.name }, function (err, docs) {
//         if (err) {
//             console.log(err)
//             return
//         }
//         if (docs) {
//             res.send({ code: 1, message: "用户名已存在" })
//         }
//         else {
//             new db.User(userInfo).save(function (err) {
//                 if (err) {
//                     res.status(500).send()
//                     console.log("what?????---")
//                 }
//                 res.send({ code: 0, message: "注册成功" });
//                 // res.send(req);
//                 // req在转换为json时，会产生递归问题
//                 //     TypeError: Converting circular structure to JSON
//                 // --> starting at object with constructor 'Socket'
//                 // --- property 'socket' closes the circle
//                 // at JSON.stringify (<anonymous>)
//             })
//         }
//     })

// })

router.post('/api/user/signin', function (req, res) {
    let userInfo = req.body.userInfo;
    db.User.findOne({ name: userInfo.name }, function (err, docs) {
        if (err) {
            console.log(err)
            return
        }
        if (docs.password == userInfo.password) {
            res.send({ code: 0, message: "登录成功" })
        }
        else {
            res.send({ code: 1, message: "密码错误" })
        }
    })
})

router.post('/api/user/newarticle', function (req, res) {
    new db.Article(req.body.articleInformation).save(function (err) {
        if (err) {
            res.status(500).send({ code: 1, message: '服务器内部错误' })
            return
        }
        res.send({ code: 0, message: '创建文章成功' })
    })
})

router.get('/api/user/articlelist', function (req, res) {
    db.Article.find({}, function (err, docs) {
        if (err) {
            res.status(500).send({ code: 1, message: '服务器内部错误' })
            return
        }
        res.json(docs)
    })
})

router.get('/api/articleDetail/:id', function (req, res) {
    db.Article.findOne({ _id: req.params.id }, function (err, docs) {
        if (err) {
            console.error(err)
            res.status(500).send({code:1,message:"服务器内部错误"})
            return
        }
        res.send({code:0,docs:docs})
    })
})
module.exports = router 