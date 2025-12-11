# 🪟 Smart Blinds Controller with Micro:bit
Automated blinds system controlled by light levels and user‑selected modes.

![Microbit](https://img.shields.io/badge/Micro%3Abit-v1%2Fv2-blue)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

---

## 📌 Overview
**Smart Blinds Controller** is a Micro:bit‑based automation project that adjusts window blinds depending on ambient light and the selected operating mode.

The user can switch between two modes using the Micro:bit buttons:

- **OUT Mode (Button A)** — reacts to *outdoor* light  
- **IN Mode (Button B)** — reacts to *indoor* light  

The system uses a light sensor and a servo motor to open or close the blinds automatically.

---

## ✨ Features
- Two operating modes: **OUT** and **IN**
- Automatic light measurement (0–255)
- Servo‑based blind movement (open/close)
- LED display mode indication
- Expandable with additional sensors or displays

---

## 🛠 Hardware Requirements

| Component | Quantity | Notes |
|----------|----------|-------|
| BBC Micro:bit | 1 | v1 or v2 |
| SG90 Servo Motor | 1 | Requires 5V external power |
| LDR Light Sensor | 1 | Optional — built‑in sensor can be used |
| 10kΩ Resistor | 1 | For LDR voltage divider |
| Jumper wires | – | |
| External 5V power supply | 1 | For servo motor |
| Blind mechanism | 1 | Fabric or slat blinds |

---

## 🔌 Wiring Overview

| Micro:bit Pin | Component |
|---------------|-----------|
| P0 | Servo signal |
| 3V | LDR + resistor |
| P1 or P2 | LDR output |
| GND | Shared ground with servo and LDR |

> **Important:** The servo motor must share a **common ground** with the Micro:bit.

---

## 🧠 Operating Logic

### OUT Mode (Button A)
- Bright light → **Close blinds**  
- Low light → **Open blinds**

### IN Mode (Button B)
- Low indoor light → **Open blinds**  
- Bright indoor light → **Close blinds**

Light thresholds can be adjusted depending on the environment.

---

## 🚀 How to Use
1. Open **Microsoft MakeCode** and create a new project  
2. Switch to **JavaScript mode**  
3. Paste your program code  
4. Flash the `.hex` file to the Micro:bit  
5. Connect the servo to the blind mechanism  
6. Select a mode:  
   - **A → OUT**  
   - **B → IN**  
7. Test using natural light or a flashlight  

---

## 📈 Future Improvements
- Separate indoor/outdoor LDR sensors  
- OLED display for real‑time values  
- Wi‑Fi module (ESP8266/ESP32) for remote control  
- Morning/evening timers  
- Manual override mode  
- Home Assistant integration  

---

## 🐞 Troubleshooting

| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| Servo not moving | Missing common ground | Connect servo GND to Micro:bit GND |
| Servo jittering | Weak power supply | Use stable external 5V |
| Light readings inaccurate | Thresholds too high/low | Adjust values in code |
| Mode not switching | Button issue | Check Micro:bit buttons |

---

## 📄 License
This project is released under a **custom attribution license**:

You are free to **use, modify, and redistribute** this project for any purpose,  
**as long as you credit the original creator: _Boris_**.

No additional restrictions apply.

---
