### Azkar API

- `/api/azkar`: Retrieves random Azkar.
  - `?category`: Retrieves random Azkar from a specific category.
  - `?search`: Searches for a specific Zekr.
  - `/categories`: Lists available Azkar categories.

### Hadith API

- `/api/hadith`: Retrieves a list of Hadithes.
  - `/random`: Retrieves a random Hadith.
  - `/:book/:chapter`: Retrieves a specific book chapter.

### Quran API

- `/api/quran`: Retrieves a list of endpoints.
  - `/audio`: Retrieves a list of audio endpoints.
    - `/ayah`: Retrieves a list of Mashaikh.
      - `/:shikh/:ayah`: Retrieves audio of a specific ayah.
    - `/surah`: Retrieves a list of Mashaikh.
      - `/:shikh/:sura`: Retrieves audio of a specific sura.
  - `/ayah`: Retrieves some info.
    - `/:ayah`: Retrieves an image of a specific ayah.
  - `/page`: Retrieves page Mushaf types.
    - `/:mushafType/:page`: Retrieves an image of a specific mushaf page.
  - `/surah`: Retrieves a list of Mushaf surahs.
    - `/:surah`: Retrieves a surah as text.

### Radio API

- `/api/radio`: Retrieves a radio list.
  - `/:radio`: Streams for a specific radio.
