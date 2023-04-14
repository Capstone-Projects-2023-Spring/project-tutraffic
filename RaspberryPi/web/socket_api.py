"""
SocketAPI manages socket messages between the Raspberry Pi backend and
frontend.
"""
import socket
from enum import Enum


PORT = 8502
BUF_SIZE = 1024
IMAGE_PATH = "./web/image.jpg"

host = socket.gethostbyname(socket.gethostname())


class Message(Enum):
    """An enum of string messages sent via socket."""
    DONE = "done"
    TRUE = "true"
    FALSE = "false"
    REFRESH_IMAGE = "refresh_image"
    IS_CAMERA_CONNECTED = "is_camera_connected"
    GET_ROI = "get_roi"
    SET_ROI = "set_roi"
    SET_MAXPARKINGSPACES = "set_maxparkingspaces"
    GET_MAXPARKINGSPACES = "get_maxparkingspaces"


def start_connection() -> socket:
    """Start a client connection."""
    connection = socket.socket()
    connection.connect((host, PORT))
    return connection


def refresh_image():
    """Send a request to refresh the image. Return a response message."""
    connection = start_connection()
    connection.send(Message.REFRESH_IMAGE.value.encode())
    connection.recv(BUF_SIZE)
    connection.close()


def is_camera_connected():
    """Return true if the camera is connected."""
    connection = start_connection()
    connection.send(Message.IS_CAMERA_CONNECTED.value.encode())
    data = connection.recv(BUF_SIZE)
    connection.close()
    return data.decode() == Message.TRUE.value


def set_roi(rect):
    """Send a request to set the region of interest to rect."""
    connection = start_connection()
    connection.send(Message.SET_ROI.value.encode())
    connection.send(str(rect).encode())
    connection.close()


def get_roi():
    """Get the region of interest."""
    connection = start_connection()
    connection.send(Message.GET_ROI.value.encode())
    data = connection.recv(BUF_SIZE)
    connection.close()
    return data.decode()


def set_maxparkingspaces(number):
    """Set the maximum number of parking spaces."""
    connection = start_connection()
    connection.send(Message.SET_MAXPARKINGSPACES.value.encode())
    connection.send(str(number).encode())
    connection.close()


def get_maxparkingspaces() -> int:
    """Get the maximum number of parking spaces."""
    connection = start_connection()
    connection.send(Message.GET_MAXPARKINGSPACES.value.encode())
    data = connection.recv(BUF_SIZE)
    number = int(data.decode())
    connection.close()
    return number
