export const createTourPrompt = ({ city, country }) => `
  Find a city - "${city}" in this country - "${country}".
  If city "${city}" exists in this country - "${country}", create a list of things families can do in this city and country - "${city}","${country}"
  Once you have a list, create a one-day tour. Response should be in the following format:
  {
    "tour": {
      "city": "${city}",
      "country": "${country}",
      "title": "title of the tour",
      "description": "description of the city and tour",
      "stops": [
        {
          "name": "name of the stop 1",
          "description": "description of the stop 1",
          "location": "location of the stop 1"
        },
        {
          "name": "name of the stop 2",
          "description": "description of the stop 2",
          "location": "location of the stop 2"
        },
        {
          "name": "name of the stop 3",
          "description": "description of the stop 3",
          "location": "location of the stop 3"
        },
      ],
      "suggestedPlaces": [
        "suggested place 1 to visit in this city",
        "suggested place 2 to visit in this city",
        "suggested place 3 to visit in this city"
      ]
    }
  }
  If you can't find real city that is exactly like the value in the quotes - "${city}, or any info on exact city - "${city}", or country - "${country}" does not exist, or it's population is less than
  1, or those values in the following quotes are incorrect "${city}" - for city; "${country}" - for country, or it is not located in the following country - "${country}" return this - { "tour": null }, with no additional characters.
  `;
