# Webist enhancement TODOs
- [ ] Remove hover effect from individual dates, only keep the event hover effects
- [ ] 

### Data Schemas

1. Events (Table)
- uuid: string
- id: string
- title: string
- round: int
- location: {
    lat: string
    lon: string
}
- type: string (enum)
- location_str: string
- sport: table reference
- country_code: string
- country: string
- event_start_at: ISO Date String
- event_end_at: ISO Date String
- links: {
    instagram: string
    youtube: string
    discord: string
    x: string
    sources: string[monkeys]
}
- images: string[]
- created_at: ISO Date String (default)
- updated_at: ISO Date String (default)

2. Sports
- id: string
- name: string
- logo: string
- color: string (hex)
- type: string (enum)
- tags: string[]

3. Teams
- id
- name
- logo
- sport
- tags
- color

4. Drivers
- id
- name
- image
- sport
- tags

5. Sports Type Enum
- formula
- feeder
- indycar
- motogp
- superbike
- endurance
- off road
- nascar

6. Event Type Enum
- race
- qualifying
- practice
- sprint
- test
- shootout
- warmup
- demo

- news
- announcement
- update
- watch party

### Enums


### Bucket Folder

1. {sport}-{round}-{country-code}.webp








OLDER TODO IDEAS

1. confetti on race day

- landing page!!!

https://www.behance.net/gallery/229123957/F1-Website-Redesign-Designathon-Runnerup/modules/1312510391

- colors for motogp and f1 in calendar event badges
- remove 3 day view from calendar

- monkeys blogs fetch and display
- social media wall

//HERO SECTION
- social media numbers
- upcoming race info

- Leaderboards

- blogs on wet races, legendary overtakes, etc.
- Best Movies to watch if you’re a motorsports fan

- blog/video series on legendary races that you might have misseda