const express = require('express');


class learningController
{
    lesson(req, res){
        const type = req._parsedOriginalUrl.pathname.split('/')[3];
        if (type == "multiple_choice"){
        res.render('multiple_choice');
        }

        if (type == "matching"){
            res.render('matching');
            }
    }

    end(req, res){
        res.render('end');
    }

    learning(req, res){
        res.render('learning');
    }
}

module.exports = new learningController();