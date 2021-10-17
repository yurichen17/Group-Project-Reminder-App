"""REST API for api."""
from flask import make_response
import flask
import myapp
from myapp.authentication import get_logname
# importing an exception class for error handling
from myapp.exception import InvalidUsage


@myapp.app.route("/api/v1/", methods=["GET"])
def get_services():
    """Return a list of services."""
    context = {
        "comments": "/api/v1/comments/",
        "likes": "/api/v1/likes/",
        "posts": "/api/v1/posts/",
        "url": "/api/v1/",
    }
    return flask.jsonify(**context)


