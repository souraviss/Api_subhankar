
const concerts = require('../Model/concert.model');

exports.getconcerts = (req, res) => {
    // req.setHeader('content-type', 'application/json');
    concerts.find().then(cencert => {
        console.log(cencert);
        res.set({
            'content-type': 'application/json',
            'content-length': '100',
            'warning': "with content type charset encoding will be added by default"
        });
        res.status(200).json({
            success: 'true',
            message: 'profile list of data retrieved successfully',
            Concerts: cencert
        });
    })
        .catch(err => {
            console.log('data not retrive!!');
        })

}
exports.postConcerts = (req, res) => {
    let concertObj = new concerts({
        ImageDescription: req.body.ImageDescription,
        ImageUrl: req.body.ImageUrl,
        Active: req.body.Active
    });
    console.log(concertObj);
    concertObj.save().then(() => {
        console.log('create concert!');
        res.redirect('/Concert/GetAll');
    })
        .catch(err => {
            console.log(err);
        })

}

exports.FindById = (req, res) => {
    let id = req.body.Id;
    concerts.findById(id).then(concert => {
        res.status(200).send({
            success: 'true',
            message: 'profile data retrieved successfully',
            Concerts: concert
        });
    }).catch(err => {
        console.log(err);
    });

}

exports.findbyImageUrl = (req, res) => {
    let ImageUrl = req.body.ImageUrl;
    concerts.find({ ImageUrl: ImageUrl }).then(concert => {
        res.status(200).send({
            success: 'true',
            message: 'profile data retrieved successfully',
            Concerts: concert
        });
    }).catch(err => {
        console.log(err);
    });
}

exports.deleteByid = (req, res) => {
    let id = req.body.Id;
    concerts.deleteOne({ _id: id }).then(() => {
        console.log('profile data deleted successfully !!');

    }).catch(err => {
        console.log(err);
    });
    res.redirect('/profile/GetAll');
}

exports.updateById = (req, res) => {
    // var profile = new profileMaster({
    //     Name: req.body.Name,
    //     Description: req.body.Description,
    //     Buying_Price: req.body.Buying_Price,
    //     Qty: req.body.qty,
    //     Active: req.body.Actives
    // });
    // profileMaster.findByIdAndUpdate(req.body.Id, { profile });


    concerts.findById(req.body.Id).then(concert => {
        ImageDescription = req.body.ImageDescription,
            ImageUrl = req.body.ImageUrl,
            Active = req.body.Active
        return concert.save();
    }).then(result => {
        res.status(200).send({
            success: 'true',
            message: 'profile data upated successfully',
            Concerts: result
        });
    }).catch(err => {
        console.log(err);
    })

}
