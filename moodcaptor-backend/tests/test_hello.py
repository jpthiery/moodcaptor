from domain.model import Group


def test_hello():
    group = Group('test')
    assert group.name == 'test'