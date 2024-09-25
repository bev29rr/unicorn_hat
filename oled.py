from machine import Pin, I2C
import ssd1306

# Initialize I2C
i2c = I2C(0, scl=Pin(1), sda=Pin(0))

# Initialize OLED Display
oled = ssd1306.SSD1306_I2C(128, 64, i2c)

# Clear the display
oled.fill(0)

# Add some text
oled.text('Hello, Pico!', 0, 0)
oled.show()