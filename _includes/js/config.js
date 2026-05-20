/*
This is the fil in which you configure the data widgets. Feel free to experiment with the configuration options. 
But it is also completely okay to write and issue and ask for help to configure the widgets.
You probably want to check out the documentation at https://hp-theme.gbif-staging.org/documentation-intro
*/
var siteConfig = {
  "version": 3,
  "pages": [ // which pages do we want to enable
    {
      "id": "occurrenceSearch"
    },
    {
      "id": "occurrenceKey"
    },
    {
      "id": "collectionSearch"
    },
    {
      "id": "collectionKey"
    },
    {
      "id": "datasetSearch"
    },
    {
      "id": "datasetKey"
    },
    {
      "id": "institutionSearch"
    },
    {
      "id": "institutionKey"
    },
    {
      "id": "literatureSearch"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    // TODO: you should remove types you do not want to use
    "OCCURRENCE",
    "DATASET",
    "LITERATURE"
  ],
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": "#001972",
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "NATURAL",
      "options": {
        "MERCATOR": [
          "BRIGHT",
          "NATURAL"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "de",
      "localeCode": "de",
      "label": "German",
      "default": true,
      "textDirection": "ltr",
      "iso3LetterCode": "deu",
      "cmsLocale": "de",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "de"
    },
    {
      "code": "da",
      "localeCode": "da",
      "label": "Dansk",
      "default": false,
      "textDirection": "ltr",
      "iso3LetterCode": "dan",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "in",
      "key": "publishingOrg",
      "values": [
        "7a070ba0-bafb-11d9-8e53-b8a03c50a862"
      ]
    },
    availableTableColumns: ['features', 'commonName', 'verbatimScientificName', 'basisOfRecord', 'catalogNumber', 'fieldNumber', 'country', 'higherGeography', 'locality', 'coordinates', 'eventDate', 'year', 'recordedBy', 'iucnRedListCategory', 'media', 'dataset', 'collectionCode', 'invidiualCount', 'preparations'], // verfuegbare Spalten
    defaultTableColumns: ['features', 'commonName', 'basisOfRecord', 'catalogNumber', 'country', 'higherGeography', 'locality', 'year', 'recordedBy', 'iucnRedListCategory'], // eingeblendete Spalten
    "highlightedFilters": [ // sichtbare Filter
      "q",
      "commonName",
      "taxonKey",
      "basisOfRecord", 
      "catalogNumber",
      "year",
      "higherGeography",
      "recordedBy",
      "typeStatus",
      "iucnRedListCategory"
    ],
    "excludedFilters": [
      "occurrenceStatus",
      "networkKey",
      "hostingOrganizationKey",
      "protocol",
      "publishingCountry",
      "institutionCode",
      "collectionCode"
    ],
    "defaultEnabledTableColumns": [
      "features",
      "commonName",
      "basisOfRecord", 
      "catalogNumber",
      "country",
      "higherGeography",
      "locality",
      "year",
      "recordedBy",
      "iucnRedListCategory"
    ],
    "tabs": [
      "table",
      "gallery",
      "map",
      "clusters",
      "dashboard",
      "download"
    ],
    "mapSettings": {
      "lat": 47.8,
      "lng": 13,
      "zoom": 10
    }
  },
  "collectionSearch": {
    excludedFilters: ['country', 'active'],
    // highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
    defaultTableColumns: ['features','basisOfRecord','catalogNumber','country','higherGeography','year','recordedBy','iucnRedListCategory'],
    scope: {
      // TODO: you should add a scope here if you need search to be limited to a subset
      // search filters have the format {field: [values]}
      active: true
    },
  },
  "institutionSearch": {
    // excludedFilters: ['country', 'active'],
    // highlightedFilters: ['q', 'type'],
    // defaultTableColumns: ['title', 'type'],
    scope: {
      // TODO: you should add a scope here if you need search to be limited to a subset
      // search filters have the format {field: [values]}
      active: true
    }
  },
  "datasetSearch": {
    excludedFilters: ['publishingCountry', 'networkKey', 'projectId', 'hostingOrg'],
    highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
    scope: {
      // TODO: you should add a scope here if you need search to be limited to a subset
      // search filters have the format {field: [values]}
      type: ['OCCURRENCE', 'CHECKLIST']
    },
  },
  "publisherSearch": {},
  "literatureSearch": {
    "scope": {
      // TODO: you should add a scope here if you need search to be limited to a subset
      // literature search use the predicate format similar to occurrence search
      "type": "in",
      "key": "publishingOrganizationKey",
      "values": [
        "760d5f24-4c04-40da-9646-1b2c935da502",
        "2e7df380-8356-4533-bcb3-5459e23c794e",
        "8e1a97a0-3ca8-11d9-8439-b8a03c50a862"
      ]
    }
  }
}
