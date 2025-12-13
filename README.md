# 🪟 Smart Blinds Controller with Micro:bit
Automated blinds system controlled by the Micro:bit’s built‑in light sensor and user‑selected operating modes.

![Microbit](https://img.shields.io/badge/Micro%3Abit-v1%2Fv2-blue)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

---

##  Overview
**Smart Blinds Controller** is a Micro:bit‑powered automation system that opens or closes window blinds based on ambient light levels and the mode selected by the user.

The device supports two operating modes:

- **OUT Mode (Button A)** — reacts to outdoor light  
- **IN Mode (Button B)** — reacts to indoor light  

Once a mode is selected, the system enters **automatic mode**, continuously reading the built‑in light sensor and adjusting the blinds using a servo motor.

---

##  Features
- Two operating modes: **OUT** and **IN**
- Uses the **built‑in Micro:bit light sensor** (no external LDR required)
- Automatic open/close logic based on thresholds
- Servo‑based blind movement
- LED display mode indication
- Lightweight, simple wiring
- Easy to expand with additional sensors or modules

---

## 🛠 Hardware Requirements

| Component | Quantity | Notes |
|----------|----------|-------|
| BBC Micro:bit | 1 | v1 or v2 |
| SG90 Servo Motor | 1 | Requires external 5V power |
| Jumper wires | – | |
| External 5V power supply | 1 | For servo motor |
| Blind mechanism | 1 | Fabric or slat blinds |

>  No LDR or resistors are required — the project uses the Micro:bit’s built‑in light sensor.

---

##  Wiring Overview

| Micro:bit Pin | Component |
|---------------|-----------|
| **P0** | Servo signal |
| **GND** | Shared ground with servo |
| **5V external** | Servo power (+) |
| **External GND** | Must connect to Micro:bit GND |

###  Important  
The servo motor **must share a common ground** with the Micro:bit.  
Without this, the servo may jitter or fail to move.

---

##  Operating Logic (Based on Your Code)

###  Automatic Mode
Automatic mode activates when the user presses **Button A** or **Button B**.

###  Light Thresholds  
Your code uses:

- **openThreshold = 5**  
- **closeThreshold = 15**

These values are tuned for the built‑in light sensor.

---

###  OUT Mode (Button A)
Interprets light as *outdoor brightness*:

- **Light > 15** → Close blinds  
- **Light < 5** → Open blinds  

This simulates:  
 Bright outside → close blinds  
 Dark outside → open blinds  

---

###  IN Mode (Button B)
Interprets light as *indoor brightness*:

- **Light > 15** → Open blinds  
- **Light < 5** → Close blinds  

This simulates:  
 Bright inside → open blinds  
 Dark inside → close blinds  

---

##  How to Use
1. Open **Microsoft MakeCode**  
2. Create a new project  
3. Switch to **JavaScript mode**  
4. Paste your program code  
5. Flash the `.hex` file to the Micro:bit  
6. Connect the servo to the blind mechanism  
7. Select a mode:  
   - **A → OUT**  
   - **B → IN**  
8. The system now runs automatically based on light levels  

---

##  Future Improvements
- Adjustable thresholds via buttons or menu
- OLED display for real‑time light readings
- Wi‑Fi module (ESP8266/ESP32) for remote control
- Morning/evening timers
- Manual override mode
- Home Assistant integration

---

##  Troubleshooting

| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| Servo not moving | Missing common ground | Connect servo GND to Micro:bit GND |
| Servo jittering | Weak power supply | Use stable external 5V |
| Light readings inaccurate | Thresholds too low/high | Adjust open/close thresholds |
| Mode not switching | Button issue | Check Micro:bit buttons |

---

##  License
This project is released under a **custom attribution license**:

You are free to **use, modify, and redistribute** this project for any purpose,  
**as long as you credit the original creator: _Boris_**.

No additional restrictions apply.

---
