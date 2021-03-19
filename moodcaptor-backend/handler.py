from .domain.model import Group


def handle(req):
    """handle a request to the function
    Args:
        req (str): request body
    """
    group = Group(req)
    return group.__dict__


def handle_bis(req):
    """handle a request to the function
    Args:
        req (str): request body
    """

    return "Coucou"
