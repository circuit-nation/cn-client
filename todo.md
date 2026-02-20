# Webist enhancement TODOs
- [ ] Remove hover effect from individual dates, only keep the event hover effects
- [ ] 

## Database Schema

## Events
Stores all racing-related events.

| Field | Type | Required | Description |
|------|------|----------|-------------|
| _id | string | yes | Convex document ID |
| _creationTime | number | auto | Created timestamp (ms) |
| id | string | yes | Domain-specific event ID |
| title | string | yes | Event title |
| round | int | yes | Championship round |
| type | enum | yes | Event type |
| circuit_id | string | yes | Reference to `circuits._id` |
| links_id | string | no | Reference to `event_links._id` |
| sport_id | string | yes | Reference to `sports._id` |
| event_start_at | datetime | yes | Event start |
| event_end_at | datetime | yes | Event end |
| images | string[] | no | Image URLs |

---

## Event Links
Stores social & media links.

| Field | Type | Required |
|-----|------|----------|
| instagram | string | no |
| youtube | string | no |
| discord | string | no |
| x | string | no |
| sources | string[] | no |

---

## Sports
Defines a racing discipline.

| Field | Type | Required |
|------|------|----------|
| id | string | yes |
| _id | string | yes |
| _creationTime | number | auto |
| name | string | yes |
| logo | string | yes |
| color | string | yes |
| type | enum | yes |
| tags | string[] | no |

### Sports Type Enum
- formula
- feeder
- indycar
- motogp
- superbike
- endurance
- off-road
- nascar

---

## Teams

| Field | Type | Required |
|------|------|----------|
| id | string | yes |
| name | string | yes |
| logo | string | yes |
| sport | string | yes |
| tags | string[] | no |
| color | string | no |

---

## Drivers

| Field | Type | Required |
|------|------|----------|
| id | string | yes |
| name | string | yes |
| image | string | yes |
| sport | string | yes |
| tags | string[] | no |

---

## Event Type Enum
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
- watch-party



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