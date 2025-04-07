# Mock GPIO simulation for testing in QEMU (use a mock GPIO library or a mock environment)
class MockGPIO:
    BCM = None
    PUD_UP = None
    
    @staticmethod
    def setmode(mode):
        pass
    
    @staticmethod
    def setup(channel, mode, pull_up_down):
        pass
    
    @staticmethod
    def add_event_detect(channel, edge, callback, bouncetime):
        pass

# Replace RPi.GPIO with MockGPIO for testing
GPIO = MockGPIO()
