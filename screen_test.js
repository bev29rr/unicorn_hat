const { PicoBricks, OLED } = require('picobricks');

const pico = new PicoBricks();

const oled = new OLED(pico);

oled.clearDisplay();

oled.setTextSize(1);
oled.setTextColor(1);

oled.setCursor(0, 0);
oled.println("Hello, PicoBricks!");
oled.setCursor(0, 16);
oled.println("OLED Display Test");

oled.display();