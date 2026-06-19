# Synesthesia Synth — User Manual

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Interface at a Glance](#2-interface-at-a-glance)
3. [The Three Voices](#3-the-three-voices)
4. [Selecting and Muting Voices](#4-selecting-and-muting-voices)
5. [The Gesture System](#5-the-gesture-system)
6. [Parameter Categories](#6-parameter-categories)
   - [Position](#61-position)
   - [Pattern](#62-pattern)
   - [Rotation](#63-rotation)
   - [Texture](#64-texture)
7. [Spatial Sound — How Position Shapes Audio](#7-spatial-sound--how-position-shapes-audio)
8. [The Bottom Sheet](#8-the-bottom-sheet)
9. [Gyroscope Camera](#9-gyroscope-camera)
10. [Presets](#10-presets)
11. [Quick Reference](#11-quick-reference)

---

## 1. Introduction

**Synesthesia Synth** is a mobile audiovisual instrument for three voices. Each voice is a living, animated capsule shape floating in three-dimensional space. Everything you do — moving a capsule, dragging a finger, pinching — simultaneously transforms both the sound you hear and the visuals you see.

There is no separation between the visual and the sonic. The position of a capsule in the room determines where the sound comes from and how far away it feels. The gestures that change the shape, rotation, and color of the capsule also reshape the timbre, pitch, and rhythm of the audio.

Synesthesia Synth is played entirely by touch, directly on the 3D space, in real time. There are no sliders or knobs to operate — every parameter is controlled by dragging and pinching the screen.

---

## 2. Interface at a Glance

When you launch Synesthesia Synth you see three capsule-shaped blobs suspended in a three-dimensional space that you can tilt and orbit with your device.

```
┌─────────────────────────────────────────────┐
│                                             │
│              ◎  Voice 1 (selected)          │  ← flashing ring marks the selected voice
│                                             │
│    ●  Voice 2                ●  Voice 3     │
│                                             │
│                                             │
│                Position                     │  ← current parameter category (text)
├─────────────────────────────────────────────┤
│  [← Menu] [Quit] [Save] [Gyro] [↺] [↻] [Help]  │  ← bottom sheet (buttons only)
└─────────────────────────────────────────────┘
```

| Area | Purpose |
|------|---------|
| 3D space (main area) | Shows the three voice capsules; all gestures happen here |
| Selection ring | A flashing ring around the currently selected voice's capsule |
| Category label | Text just above the buttons showing the active parameter category |
| Bottom sheet (bottom strip) | A fixed row of buttons: **← Menu**, **Quit**, **Save**, **Gyro**, **↺ Undo**, **↻ Redo**, **Help** |
| Gesture HUD | A transient meter that appears during a parameter gesture, showing the three current values |

---

## 3. The Three Voices

Synesthesia Synth has exactly **three voices**, each fully independent. The color of each capsule is defined by the loaded preset — different presets assign different colors to the three voices.

Each voice has:
- Its own position in 3D space
- Its own oscillator speeds and waveform
- Its own filter, distortion, and delay settings
- Its own color, echo, and pulse controls
- An independent mute state

The capsule's **shape and animation** reflect the voice's internal rhythm engine. Two oscillators run inside each voice. When they cross each other's path, a rhythmic pulse fires — the capsule squishes and springs back at that moment. The length and stretch of the capsule at any given time reflects the current spread between the two oscillators.

All parameter gestures apply to whichever voice is **currently selected**.

---

## 4. Selecting and Muting Voices

### Selecting a Voice

**Tap directly on a capsule** (one finger) to make it the active voice. A **flashing ring** appears around the selected capsule to confirm the selection — it stays screen-aligned and follows the capsule wherever it moves.

### Muting and Unmuting

**Double-tap anywhere on the screen** (not on a capsule) to toggle the mute state of the currently selected voice.

- When a voice is **muted**: it produces no sound, and its capsule **stops animating and stops illuminating** — it freezes in place as a dim, dead silhouette.
- When a voice is **unmuted**: the capsule resumes its animation, brightness, and sound from a fresh phase.

A muted capsule stays visible and **remains selectable** — simply **tap the dead capsule** to make it the active voice again (for example, to unmute it with a double-tap). A muted voice retains all its parameter values.

> **Starting silent:** Every **factory preset starts with all three voices muted**. Nothing will sound until you activate at least one voice. To bring a voice in, **tap its capsule** to select it, then **double-tap** (not on a capsule) to unmute it. Repeat for each voice you want playing. (Your own saved presets are different — they reopen with exactly the mute/unmute layout you saved; see [Presets](#10-presets).)

> **Tip:** Muting voices mid-performance is a fast way to strip the texture down to a single voice, then bring others back in for build-ups and transitions.

---

## 5. The Gesture System

All control happens through touch gestures performed directly on the 3D space. There are four kinds of gesture:

| Gesture | Effect |
|---------|--------|
| **One-finger tap on a capsule** | Select that voice (flashing ring appears) |
| **Double-tap (not on a capsule)** | Mute / unmute the selected voice |
| **One-finger drag** | Adjust the first two parameters of the active category |
| **Two-finger pinch** | Adjust the third parameter of the active category |
| **Three-finger tap** | Cycle to the next parameter category |

### How parameter gestures map

Each parameter category has **exactly three parameters**, and the gestures map onto them consistently:

- **Drag left ↔ right** controls **Parameter 1**.
- **Drag up ↕ down** controls **Parameter 2**.
- **Pinch in ↔ out** controls **Parameter 3**.

Drag and pinch are smooth and continuous; in the Pattern category the two drag values snap to musical steps. In the Position category, dragging and pinching can also be **flicked** — a quick release launches gentle momentum that carries the capsule and eases to a stop at the boundary.

### Switching parameter category

**Tap with three fingers** to cycle the active category in order:

**Position → Pattern → Rotation → Texture → Position → …**

The name of the current category is shown as **text at the bottom of the screen, just above the buttons**, so you always know which three parameters your drag and pinch are driving.

---

## 6. Parameter Categories

There are four categories. Each one re-uses the same three gestures (horizontal drag, vertical drag, pinch) to drive its three parameters.

### 6.1 Position

Moves the selected voice's capsule through the bounded 3D space. Position is also a sound gesture — see [Spatial Sound](#7-spatial-sound--how-position-shapes-audio).

| Gesture | Parameter | Effect |
|---------|-----------|--------|
| Drag left/right | X position | Moves the capsule horizontally — **stereo pan** |
| Drag up/down | Y position | Moves the capsule vertically — **pitch / frequency register** |
| Pinch in/out | Z depth | Pushes the capsule toward or away from the camera — **distance / reverb** |

**Boundaries:** The capsule cannot move beyond the playing field. Near the edges a soft damping effect makes the capsule feel like it is pulling against a gentle resistance, so movements remain smooth and controllable. A quick flick on release sends the capsule gliding with momentum until it eases to a stop.

### 6.2 Pattern

Controls the rhythmic and timbral engine of the selected voice. Each voice contains two independent oscillators; every time their paths cross, a rhythmic pulse fires.

| Gesture | Parameter | What it does |
|---------|-----------|-------------|
| Drag left/right | Frequency 1 | Speed of oscillator 1 — slower to faster |
| Drag up/down | Frequency 2 | Speed of oscillator 2 — slower to faster |
| Pinch in/out | Waveform | Shape of oscillator 1 (4 steps, see below) |

**Waveform shapes (pinch):**

| Position | Shape | Character |
|----------|-------|-----------|
| 0 | Sine | Smooth, rounded; gradual crossings |
| 1/3 | Triangle | Linear ramp up and down; regular crossings |
| 2/3 | Sawtooth | Sharp drop each cycle; asymmetric crossings |
| 1 | Square | Instant transitions; abrupt, percussive crossings |

**Pattern behavior:**

- If both oscillators run at the **same speed**, crossings happen at a steady, even rate.
- If the two speeds are **slightly different**, the crossing rate drifts in and out — producing slow pulsing or beating effects.
- If the two speeds are **very different**, crossings become frequent and irregular, creating dense, polyrhythmic textures.
- Dragging either frequency to **zero** stops that oscillator, which halts the crossing rhythm.

The two frequency values **snap to musical steps** as you drag, so you can dial in steady, related rhythms rather than arbitrary ratios.

### 6.3 Rotation

Rotates the capsule around each axis while shaping the voice's filter and distortion.

| Gesture | Parameter | Visual effect | Sound mapping |
|---------|-----------|--------------|---------------|
| Drag left/right | Rot X | Tilts the capsule forward/back | Filter cutoff frequency |
| Drag up/down | Rot Y | Spins the capsule left/right | Filter resonance |
| Pinch in/out | Rot Z | Rolls the capsule clockwise/counter-clockwise | Distortion wet/dry amount |

**Audio detail:**

- **Filter cutoff (drag left/right):** Lower values = warmer, darker tone; higher values = brighter, more open.
- **Filter resonance (drag up/down):** Higher values create a more pronounced, whistling peak at the cutoff frequency.
- **Distortion wet/dry (pinch):** Pinched in = clean; pinched out = maximum distortion.

> **Note:** The rotation only commits to the capsule on release, so the capsule doesn't jitter while you drag — but the gesture HUD updates continuously so you can see the value as you move.

### 6.4 Texture

Controls the background visual feedback of the capsule and important audio time-domain effects. Starting values depend on the loaded preset.

| Gesture | Parameter | Visual effect | Sound mapping |
|---------|-----------|--------------|---------------|
| Drag left/right | Color | Hue rotation of the capsule | Pitch key / note (for pitched sounds) |
| Drag up/down | Echo | Feedback density of the background trail | Delay feedback amount |
| Pinch in/out | Pulse | Pulse rate of the background visual pattern | Delay time (ms) |

**Audio detail:**

- **Color / Pitch:** For pitched synthesis modes, this selects the note or key the voice plays. For unpitched (percussive/noise) sources, the mapping depends on the preset — it may affect a timbral quality or have no audible effect.
- **Echo / Delay Feedback:** Higher values produce longer, denser echoes that sustain and build up. Very high values approach self-oscillation — use with care in loud environments.
- **Pulse / Delay Time:** Lower values produce rapid, tight echoes or doubling effects. Higher values create wide, spacious repeats.

**Visual connection:** The Color value shifts the hue of the capsule, making the currently selected voice immediately identifiable even while exploring different hue settings.

> **Tip:** Echo and Pulse work together to define the rhythmic character of the delay. Match Pulse to the pulse rate of the Pattern category's oscillators for a synchronized echo, or deliberately offset them for polyrhythmic delay textures.

---

## 7. Spatial Sound — How Position Shapes Audio

A capsule's position in 3D space (set in the **Position** category) is **directly mapped to audio parameters**, making movement a performance gesture in its own right.

| Axis | Movement | Sound effect |
|------|----------|-------------|
| X (horizontal) | Left ↔ Right | **Stereo pan** — the sound moves left and right in the stereo field |
| Y (vertical) | Down ↔ Up | **Pitch / frequency register** — higher positions raise the pitch or open up the frequency range; lower positions lower the pitch or darken the tone |
| Z (depth) | Close ↔ Far | **Distance** — moving a voice further away makes it quieter and adds more reverb, simulating acoustic distance |

Together these three axes create a convincing **simulated acoustic space**. Spreading the three voices across different XYZ positions gives each voice a distinct spatial identity and creates a sense of three-dimensional sonic depth without any manual mixer adjustment.

> **Tip:** Try positioning one voice close and centered (little reverb, centered pan) and another voice far back and to one side (quieter, panned, with a longer reverb tail) for an immediate sense of acoustic depth.

---

## 8. The Bottom Sheet and HUD

| Button | Action |
|--------|--------|
| **← Menu** | Returns to the main menu screen |
| **Quit** | Exits the application completely |
| **Save** | Saves the current state of all three voices as your own preset (see [Presets](#10-presets)) |
| **Gyro** | Toggles gyroscope camera orbit on/off (see below) |
| **↺** (Undo) | Steps back through your parameter gestures one at a time; greyed out when there is nothing to undo |
| **↻** (Redo) | Re-applies a gesture you just undid; greyed out when there is nothing to redo |
| **Help** | Opens a help overlay; tap the backdrop or close button to dismiss it |

**Undo / Redo:** Each completed parameter gesture — a position move, a Pattern/Rotation/Texture drag, or a pinch — is one undo step. The app keeps the last several gestures (a bounded history), so you can step back through your recent moves and redo them. Loading a preset clears the history. Voice selection, mute toggles, and category switches are not part of the undo history.

**Save:** Tapping **Save** writes the current live configuration — every voice's position, parameters, colors, **and mute/unmute state** — into a new personal (user) preset. The button briefly changes to read **"Saved"** to confirm. Your saved presets appear alongside the factory presets in the menu and reopen exactly as you left them.

Just above the button row, a **text label shows the current parameter category** (Position, Pattern, Rotation, or Texture). A transient **gesture HUD** also appears here during a drag or pinch, showing the three current parameter values as fill meters, then fades away shortly after you release.

---

## 9. Gyroscope Camera

The **Gyro button** in the bottom sheet toggles gyroscope camera orbit. When enabled, the device's built-in gyroscope drives the camera orbit — physically tilting and rotating the device rotates your view of the 3D space.

- Toggle **on**: tilt the device to orbit the capsules from different angles.
- Toggle **off**: the camera returns to its fixed default orientation.
- If the device does not have a gyroscope, the toggle resets automatically to off.

> **Tip:** Gyroscope mode adds a physical, embodied quality to performance. Tilting toward a capsule changes the spatial perspective and, because position drives the audio, can subtly shift perceived panning and reverb as your angle changes.

---

## 10. Presets

Synesthesia Synth ships with a set of **premade presets** that can be selected from the main menu. Each preset is a complete configuration of all three voices — their capsule colors, spatial positions, oscillator settings, rotation, and texture parameters.

When a preset is loaded:
- All three voices update simultaneously.
- Capsules move to their preset positions.
- All stored values for each voice are restored.

Explore different presets to discover distinct sonic and visual characters. Within any preset you can still move voices freely in space and adjust all parameters in real time via gestures.

### Factory presets start muted

Every **factory (built-in) preset opens with all three voices muted**, so it loads silently. This lets you bring the voices in deliberately rather than starting with all three playing at once. To activate a voice: **tap its capsule** to select it, then **double-tap** (not on a capsule) to unmute it. Add the other voices the same way as you build up the sound. See [Selecting and Muting Voices](#4-selecting-and-muting-voices).

### Saving your own presets

Press the **Save** button in the bottom sheet at any time to capture the current state of all three voices as a **personal (user) preset**. A user preset stores everything the factory presets do — positions, oscillator settings, rotation, texture, and colors — **plus the exact mute/unmute state of each voice at the moment you saved**.

- The Save button briefly displays **"Saved"** to confirm the write.
- Each save creates a new, automatically named preset, so you never overwrite an existing one.
- Your saved presets appear in the menu next to the factory presets.

Because user presets remember mute state, a user preset does **not** force all voices to start muted — it reopens with whatever combination of muted and unmuted voices you had when you saved it.

---

## 11. Quick Reference

### Gestures

| Gesture | Effect |
|---------|--------|
| One-finger tap on capsule | Select that voice (flashing ring appears) |
| Double-tap (not on capsule) | Mute / unmute selected voice |
| Tap a muted (dead) capsule | Re-select it so it can be unmuted |
| One-finger drag left/right | Adjust Parameter 1 of the active category |
| One-finger drag up/down | Adjust Parameter 2 of the active category |
| Two-finger pinch in/out | Adjust Parameter 3 of the active category |
| Three-finger tap | Cycle category: Position → Pattern → Rotation → Texture |

### Parameter Categories (three parameters each)

| Category | Drag L/R (Param 1) | Drag U/D (Param 2) | Pinch (Param 3) |
|----------|--------------------|--------------------|-----------------|
| **Position** | X — pan | Y — pitch register | Z — distance / reverb |
| **Pattern** | Oscillator 1 speed | Oscillator 2 speed | Waveform (sine→square) |
| **Rotation** | Rot X — filter cutoff | Rot Y — filter resonance | Rot Z — distortion wet/dry |
| **Texture** | Color — pitch key | Echo — delay feedback | Pulse — delay time (ms) |

### Position → Sound Mapping

| Axis | Direction | Audio |
|------|-----------|-------|
| X | Left | Pan left |
| X | Right | Pan right |
| Y | Down | Lower pitch / darker tone |
| Y | Up | Higher pitch / brighter tone |
| Z | Far | Quieter, more reverb |
| Z | Close | Louder, less reverb |

### Bottom Sheet Buttons

| Button | Action |
|--------|--------|
| ← Menu | Return to main menu |
| Quit | Exit the application |
| Save | Save current state (incl. mute layout) as a user preset |
| Gyro | Toggle gyroscope camera |
| ↺ (Undo) | Step back one parameter gesture |
| ↻ (Redo) | Re-apply an undone gesture |
| Help | Open / close help overlay |

---

*Synesthesia Synth — where every gesture is both sound and image.*
