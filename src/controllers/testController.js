const express = require('express');


class testController
{
    matching(req, res){
        res.render('matching');
    }

}

module.exports = new testController();