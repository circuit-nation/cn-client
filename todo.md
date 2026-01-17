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