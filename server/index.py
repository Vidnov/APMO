import tornado.web
import tornado.ioloop
import json

with open('../server/index.json') as f:
  data = json.load(f)

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, world!")


class TestHandler(tornado.web.RequestHandler):
    def get(self):
        self.write(data)


if __name__ == "__main__":
    app = tornado.web.Application([
        (r"/", MainHandler),
        (r"/test", TestHandler),
    ])

port = 8888
app.listen(port)

print("Server Start localhost:", port)
tornado.ioloop.IOLoop.current().start()
