module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8080,
          keepalive: true,
          middleware: function (connect, options, middlewares) {
            middlewares.push(function (req, res, next) {
              if (req.url === '/phones' && req.url !== '/plans') {
                var phones = [
                  {
                    "img":    "images/phone.png",
                    "title":  "Fancy Phone",
                    "desc":   "A Phone",
                    "price":  100
                  },
                  {
                    "img":    "images/phone2.png",
                    "title":  "Super Fancy Phone",
                    "desc":   "Another Phone",
                    "price":  200
                  },
                  {
                    "img":    "images/phone3.png",
                    "title":  "Super Deluxe Fancy Phone",
                    "desc":   "Some Phone",
                    "price":  300
                  },
                  {
                    "img":    "images/phone4.png",
                    "title":  "Super Deluxe Ultra Fancy Phone",
                    "desc":   "That Phone",
                    "price":  1000
                  }
                ];

                res.writeHead(200, {'Content-Type': 'text/json'});
                res.write(JSON.stringify(phones));
                res.end();
              } else if (req.url === '/plans') {
                var plans = [
                  {
                    "name":     "Basic",
                    "price":    "40",
                    "mins":     "500",
                    "texts":    "500",
                    "data":     "100 MB"
                  },
                  {
                    "name":     "Large",
                    "price":    "70",
                    "mins":     "1000",
                    "texts":    "1000",
                    "data":     "300 MB"
                  },
                  {
                    "name":     "Extra Large",
                    "price":    "90",
                    "mins":     "2000",
                    "texts":    "2000",
                    "data":     "700 MB"
                  }
                ];

                res.writeHead(200, {'Content-Type': 'text/json'});
                res.write(JSON.stringify(plans));
                res.end();
              } else {
                return next();
              }
            });

            return middlewares;
          }
        }
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.registerTask("server", ["connect"]);
};