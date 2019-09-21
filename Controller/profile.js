
const ProfileMaster = require('../Model/profile.model');

exports.getProfiles = (req, res) => {
    // req.setHeader('content-type', 'application/json');
    ProfileMaster.find().then(profile => {
        console.log(profile);
        res.set({
            'content-type': 'application/json',
            'content-length': '100',
            'warning': "with content type charset encoding will be added by default"
        });
        res.status(200).json({
            success: 'true',
            message: 'profile list of data retrieved successfully',
            profiles: profile
        });
    })
        .catch(err => {
            console.log('data not retrive!!');
        })

}
exports.postProfiles = (req, res) => {
    let profileObj = new ProfileMaster({
        HeaderDescription: req.body.HeaderDescription,
        ParagraphDescription: req.body.ParagraphDescription,
        IsListProfile: req.body.IsListProfile,
        Active: req.body.Active,
        profiles: req.body.profiles
    });
    console.log(profileObj);
    profileObj.save().then(() => {
        console.log('create profile!');
        res.redirect('/profile/GetAll');
    })
        .catch(err => {
            console.log(err);
        })

}

exports.FindById = (req, res) => {
    let id = req.body.Id;
    profileMaster.findById(id).then(profile => {
        res.status(200).send({
            success: 'true',
            message: 'profile data retrieved successfully',
            Profiles: profile
        });
    }).catch(err => {
        console.log(err);
    });

}

exports.findbyHeaderDescription = (req, res) => {
    let HeaderDescription = req.body.HeaderDescription;
    profileMaster.find({ HeaderDescription: HeaderDescription }).then(profile => {
        res.status(200).send({
            success: 'true',
            message: 'profile data retrieved successfully',
            Profiles: profile
        });
    }).catch(err => {
        console.log(err);
    });
}

exports.deleteByid = (req, res) => {
    let id = req.body.Id;
    profileMaster.deleteOne({ _id: id }).then(() => {
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


    profileMaster.findById(req.body.Id).then(profile => {
        HeaderDescription = req.body.HeaderDescription,
            ParagraphDescription = req.body.ParagraphDescription,
            IsListProfile = req.body.IsListProfile,
            Active = req.body.Active,
            profiles = req.body.profiles
        return profile.save();
    }).then(result => {
        res.status(200).send({
            success: 'true',
            message: 'profile data upated successfully',
            Profiles: result
        });
    }).catch(err => {
        console.log(err);
    })

}
