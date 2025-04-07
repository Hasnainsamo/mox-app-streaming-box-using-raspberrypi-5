import time
import RPi.GPIO as GPIO
from pn532 import PN532
import os
import json
import requests
import firebase_admin
from firebase_admin import credentials, firestore

# Firebase Initialization
cred = credentials.Certificate('firebase-key.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

# Set up GPIO pins for buttons
GPIO.setmode(GPIO.BCM)

# Button Pins
BUTTON_PLAY_PAUSE = 17
BUTTON_VOL_UP = 18
BUTTON_VOL_DOWN = 23
BUTTON_NEXT_CHAP = 24
BUTTON_PREV_CHAP = 25
BUTTON_TIMER = 22

# RFID setup
pn532 = PN532()
pn532.begin()

# WiFi configuration service
def set_wifi():
    os.system('sudo systemctl start mox-hotspot.service')

# Function to scan RFID
def scan_rfid():
    id, uid = pn532.read_passive_target()
    if uid:
        print(f"RFID UID: {uid}")
        user_ref = db.collection('users').document(str(uid))
        user_data = user_ref.get()
        if user_data.exists:
            print("User found, continuing...")
            return user_data.to_dict()
        else:
            print("RFID not registered!")
            return None
    return None

# Button Event Handling
def button_handler(channel):
    if channel == BUTTON_PLAY_PAUSE:
        print("Play/Pause button pressed")
    elif channel == BUTTON_VOL_UP:
        print("Volume up")
    elif channel == BUTTON_VOL_DOWN:
        print("Volume down")
    elif channel == BUTTON_NEXT_CHAP:
        print("Next chapter")
    elif channel == BUTTON_PREV_CHAP:
        print("Previous chapter")
    elif channel == BUTTON_TIMER:
        print("Timer increment")

# Setup GPIO pins
GPIO.setup(BUTTON_PLAY_PAUSE, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(BUTTON_VOL_UP, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(BUTTON_VOL_DOWN, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(BUTTON_NEXT_CHAP, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(BUTTON_PREV_CHAP, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(BUTTON_TIMER, GPIO.IN, pull_up_down=GPIO.PUD_UP)

# Add event detection for buttons
GPIO.add_event_detect(BUTTON_PLAY_PAUSE, GPIO.FALLING, callback=button_handler, bouncetime=300)
GPIO.add_event_detect(BUTTON_VOL_UP, GPIO.FALLING, callback=button_handler, bouncetime=300)
GPIO.add_event_detect(BUTTON_VOL_DOWN, GPIO.FALLING, callback=button_handler, bouncetime=300)
GPIO.add_event_detect(BUTTON_NEXT_CHAP, GPIO.FALLING, callback=button_handler, bouncetime=300)
GPIO.add_event_detect(BUTTON_PREV_CHAP, GPIO.FALLING, callback=button_handler, bouncetime=300)
GPIO.add_event_detect(BUTTON_TIMER, GPIO.FALLING, callback=button_handler, bouncetime=300)

# Run the main loop
if __name__ == "__main__":
    try:
        while True:
            rfid_data = scan_rfid()
            if rfid_data:
                # Playback Logic (based on RFID scan and URL data)
                pass
            time.sleep(1)
    except KeyboardInterrupt:
        print("Exiting...")
    finally:
        GPIO.cleanup()
