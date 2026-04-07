# Custom Sidebar Card for Home Assistant

A highly customizable and stabilized sidebar card for the Home Assistant Lovelace Dashboard. Based on the original work by DBuit, but completely overhauled and equipped with a comprehensive visual editor.

## ✨ Features

* **Visual Editor:** Configure clocks, date formats, and menu items directly in the Home Assistant UI—no constant YAML editing required!
* **Reliable Loading:** A built-in `MutationObserver` waits until Home Assistant is fully loaded. Ghost sidebars or crashes upon reloading are a thing of the past.
* **Dynamic Menu:** Highlight effects for the currently active menu (`/path`).
* **Clock & Date:** Integrated analog or digital clock with a customizable date format.
* **Bottom Card Support:** Add complex, nested cards (like trash calendars, person tracking, or weather) at the bottom of the sidebar.

---

## 📦 Installation via HACS (Recommended)

1. Open Home Assistant and navigate to **HACS** > **Frontend**.
2. Click the three dots in the top right corner and select **Custom repositories**.
3. Paste the URL to this GitHub repository and select **Lovelace** as the category.
4. Click **Add** and download the repository.
5. (Optional, if HACS doesn't do it automatically) Add the resource to your dashboard:
   * Go to **Settings** > **Dashboards** > three dots > **Resources**.
   * URL: `/hacsfiles/YOUR-REPO-NAME/sidebar-card.js`
   * Resource type: `JavaScript Module`

---
## ⚙️ Standard Configuration (YAML View)

If you prefer to define the card directly via YAML mode in your dashboard (inserted at the very top of the dashboard configuration), here is the full default configuration including the menu, the bottom card, and the CSS styling:

```yaml
sidebar:
  showTopMenuOnMobile: false
  digitalClock: true
  width:
    mobile: 0
    tablet: 18
    desktop: 18
  breakpoints:
    mobile: 768
    tablet: 1024
  date: true
  dateFormat: dddd, D. MMMM YYYY
  template: ''
  updateMenu: true
  sidebarMenu:
    - action: navigate
      navigation_path: /dashboard-home/home
      name: Übersicht
      active: true
      icon: mdi:home
    - action: navigate
      navigation_path: /dashboard-home/eg
      name: EG
      icon: mdi:image-area
      active: true
    - action: navigate
      navigation_path: /dashboard-home/og
      name: OG
      icon: mdi:image-area
      active: true
    - action: navigate
      navigation_path: /dashboard-home/ausen
      name: Außen
      icon: mdi:image-area
      active: true
    - action: none
      name: null
      icon: null
      active: true
    - action: navigate
      navigation_path: /dashboard-home/staubsauger
      name: Staubsauger
      icon: mdi:robot-vacuum
      active: true
    - action: navigate
      navigation_path: /dashboard-home/multimedia
      name: Multimedia
      icon: mdi:play-circle-outline
      active: true
    - action: navigate
      navigation_path: /dashboard-home/sprechanlage
      name: Sprechanlage
      icon: mdi:doorbell-video
      active: true
    - action: navigate
      navigation_path: /dashboard-home/kameras
      name: Kameras
      icon: mdi:cctv
      active: true
    - action: navigate
      navigation_path: /dashboard-home/technik
      name: Technik
      icon: mdi:cogs
      active: true
  bottomCard:
    type: custom:vertical-stack-in-card
    cardOptions:
      cards:
        - type: custom:trash-card
          entities:
            - calendar.abfalltermine
          event_grouping: true
          drop_todayevents_from: '10:00:00'
          next_days: 7
          pattern:
            - icon: ''
              color: rgba(250, 250, 250, 1)
              type: organic
              pattern: Bio
              picture: /local/abfall/bio.svg
            - icon: ''
              color: rgba(250, 250, 250, 1)
              type: paper
              pattern: Papier
              picture: /local/abfall/papier.svg
            - icon: ''
              color: rgba(250, 250, 250, 1)
              type: recycle
              label: Gelber Sack
              pattern: Gelb
              picture: /local/abfall/gelb.svg
            - icon: ''
              color: rgba(250, 250, 250, 1)
              type: waste
              pattern: Rest
              picture: /local/abfall
