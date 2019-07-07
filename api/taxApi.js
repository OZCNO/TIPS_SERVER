// 业务操作
const express = require('express');
const router = express.Router();

const DBHelper = require('../utils/DBHelper');
const sql = require('../sqlMap');

// 查询征收机关
router.post('/selectTax', (req, res) => {
    let sqlStr = sql.tax.select;
    // 获取参数
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.name], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            // 以json格式发送
            res.json(result)
        }
    });
    conn.end();
});

module.exports = router;