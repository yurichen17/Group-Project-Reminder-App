"""Myapp REST API."""

from myapp.authentication import get_logname
from myapp.api.api import (
    get_services,
    add_like,
    delete_like,
    add_comment,
    delete_comment,
)
