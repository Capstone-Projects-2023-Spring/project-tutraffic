"""
Pushes mock parking lot data updates to Firebase.
"""
import argparse
import datetime
import firebase_admin
import sys
from dotenv import dotenv_values
from firebase_admin import credentials
from firebase_admin import db


DOCUMENT_PATH = 'parking/'
# Mock parking lot.
LOT_PROP = {
    'key': {
        'type': str,
        'default': 'mocklot'
    },
    'name': {
        'type': str,
        'default': 'Mock Lot'
    },
    'desc': {
        'type': str,
        'default': 'Mock parking lot. For testing only. Address: 1800 N. Broad St, Philadelphia, PA 19121'
    },
    'lat': {
        'type': float,
        'default': 39.9813333
    },
    'lng': {
        'type': float,
        'default': -75.1580556
    },
    'rate': {
        'type': str,
        'default': 'free'
    },
    'street': {
        'type': bool,
        'default': False
    },
    'maxsize': {
        'type': int,
        'default': 20
    },
    'spots': {
        'type': int,
        'default': 7
    },
    'Captured': {
        'type': datetime.datetime.fromisoformat,
        'default': datetime.datetime(2000, 1, 1)
    }
}
# Firebase Authentication.
cred = credentials.Certificate('tutraffic-firebase-key.json')
env = dotenv_values(".env")
firebase_admin.initialize_app(
    cred, {'databaseURL': env['REACT_APP_FIREBASE_REF_URL']})


def put_mocklot(key, data: dict):
    """ Put mock lot data to Firebase.

    Args:
        key: The target web node's path name.
        data: The JSON data to upload to Firebase.
    """
    try:
        ref = db.reference(DOCUMENT_PATH)
        lot = ref.child(key)
        # Convert datetime to string.
        if 'Captured' in data:
            data.update({'Captured': str(data['Captured'])})
        lot.update(data)
    except Exception as e:
        print(e)
        sys.exit(1)


def init_mocklot(key, data: dict):
    """Create a complete mock lot then put it in Firebase.

    Args:
        key: The target web node's path name.
        data: The JSON data to upload to Firebase.
    """
    # Fill missing data with default values.
    for prop in LOT_PROP:
        if prop not in data:
            data.update({prop: LOT_PROP[prop]['default']})
    put_mocklot(key, data)


def delete_mocklot(key):
    """Delete the target parking lot in firebase.

    Args:
        key: The target web node's key.
    """
    try:
        ref = db.reference(DOCUMENT_PATH)
        ref.child(key).delete()
    except Exception as e:
        print(e)
        sys.exit(1)


if __name__ == "__main__":
    """Parse commandline arguments, then call the desired function."""
    valid_commands = ['init', 'put', 'delete']
    # Parse commandline arguments.
    parser = argparse.ArgumentParser()
    parser.add_argument(
        'command', help='Valid commands:' + str(valid_commands))
    for prop in LOT_PROP:
        parser.add_argument('--' + prop, dest=prop,
                            type=LOT_PROP[prop]['type'])
    args = parser.parse_args()

    # Check for valid command.
    if args.command not in valid_commands:
        print("Error: invalid command.")
        sys.exit(1)

    # Prepare data for upload to Firebase.
    data = dict()
    for prop in LOT_PROP:
        value = getattr(args, prop, None)
        if value:
            data.update({prop: value})

    # Extract the key from data or set it to the default value.
    key = data.pop('key', LOT_PROP['key']['default'])

    # Execute matched command.
    match args.command:
        case "put":
            put_mocklot(key, data)
        case "init":
            init_mocklot(key, data)
        case "delete":
            delete_mocklot(key)
