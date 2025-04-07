# Mock RFID Simulation for testing
class MockPN532:
    def begin(self):
        pass
    
    def read_passive_target(self):
        # Simulate an RFID scan (UID format can be dynamic or random)
        return (True, [0x01, 0x02, 0x03, 0x04])  # example UID
    
# Replace PN532 with MockPN532 for testing
pn532 = MockPN532()
