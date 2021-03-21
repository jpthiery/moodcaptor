import json
from .domain.model import Group


def handle(req):
    """handle a request to the function
    Args:
        req (str): request body
    """
    group = Group(req)
    return group.__dict__


def handle_submit(req):
    """handle a request to the function
    Args:
        req (str): request body
    """

    return json.dumps({
        "message": req
    })


def handle_group_request(req):
    """handle a request to the function
    Args:
        req (str): request body
    """

    return json.dumps([
        {
            "id": "09876poiuy",
            "name": "YCP"
        },
        {
            "id": "acdc",
            "name": "Hell way fans"
        }
    ])
