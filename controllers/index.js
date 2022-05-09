const session = require('express-session')
const connection = require('../models/db')
const truncate = require('truncate');

// index page
exports.index = (req, res) => {
   
            res.render('index.ejs');
        
}
//contact
exports.contact = (req, res) => {
            res.render('contact.ejs');
}

//blog
exports.blog = (req, res) => {
    connection.query(
        'SELECT * FROM posts',
        (error, results) => {
            console.log(results)
            res.render('blog.ejs', {posts: results, verified: req.session.loggedin, Truncate: truncate});
        }
    );
}
// login and register
exports.login = (req, res) => {
    if (req.session.loggedin)
    {
        res.redirect('/');
    } else {
        res.render('login.ejs', {verified: req.session.loggedin});
    }
}


// admin edit blog post
exports.edit = (req, res) => {
    if (req.session.loggedin) {
        connection.query(
            'SELECT * FROM posts WHERE id = ?',
            [req.params.id],
            (error, results) => {
                res.render('edit.ejs', {post: results[0], verified: req.session.loggedin});
            }
        );
    }
}

// Update method for /edit page
exports.update = (req, res) => {
    if (req.session.loggedin) {
        connection.query(
            'UPDATE posts SET title = ?, content = ? WHERE id = ?',
            [req.body.title, req.body.content, req.params.id],
            (error, results) => {
                res.redirect('/');
            }
        );
    }
}

// delete
exports.delete = (req, res) => {
    if (req.session.loggedin) {
        connection.query(
            'DELETE FROM posts WHERE id = ?',
            [req.params.id],
            (error, results) => {
                res.redirect('/');
            }
        );
    } else {
        res.send('something went wrong !');
    }
}

// new blog (get)
exports.new_get = (req, res) => {
        res.render('new.ejs', {verified: req.session.loggedin});
    
}

// new blog (post)
exports.new_post = (req, res) => {
    connection.query(
        'INSERT INTO posts(title, content, post_date) VALUES(?, ?, NOW())',
        [req.body.title, req.body.content],
        (error, results) => {
            res.redirect('/');
        }
    );
}

// viewing the post
exports.post = (req, res) => {
    connection.query(
        'SELECT * FROM posts WHERE id = ?',
        [req.params.id],
        (error, results) => {
            res.render('read.ejs', {post: results[0], verified: req.session.loggedin});
        }
    );
}
// contact

exports.submitContact = (req,res) => {
    
    const {name, email, feedback, submit} = req.body;
    // var conn = connect();
    
    connection.connect(function(err){
      if(err){
        console.log(err);
        res.send("Error");
      }
      sql = `INSERT INTO \`contact\`(\`name\`,  \`email\`, \`feedback\`) VALUES  ('${name}','${email}','${feedback}')`;
      connection.query(sql, function (err, result) {
        if (err) {
          console.log(err);
          suc = false;
        }
  
        console.log("record inserted");
      });
    });

    res.render("contact.ejs");
};

// gallery page
exports.gallery = (req, res) => {
   
    res.render('gallery.ejs');

}

// reasons page
exports.reasons = (req, res) => {
   
    res.render('reasons.ejs');

}

// places page
exports.places = (req, res) => {
   
    res.render('places.ejs');

}

// city page
exports.city = (req, res) => {
   
    res.render('city.ejs');

}

// monuments page
exports.monuments = (req, res) => {
   
    res.render('monuments.ejs');

}

// hillstation page
exports.hillstation = (req, res) => {
   
    res.render('Hillstation.ejs');

}

// pilgrimage page
exports.pilgrimage = (req, res) => {
   
    res.render('pilgrimage.ejs');

}

// seaside page
exports.seaside = (req, res) => {
   
    res.render('seaside.ejs');

}