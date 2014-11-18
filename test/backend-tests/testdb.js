var mongoose = require("mongoose");
var wiki = mongoose.model("wiki");

function insertWikis(done) {
    wiki.remove({}, function () {
        var array = [{
            "title": "Abu Dhabi",
            "url": "http://en.wikipedia.org/wiki/Abu_Dhabi",
            "abstract": "Abu Dhabi ( ¿Ab¿ ¿aby, literally &quot;Father of Gazelle&quot;) is the largest of the seven emirates that comprise the United Arab Emirates and was also the largest of the former Trucial States. Abu Dhabi is also a city of the same name within the Emirate that is the capital of the country, in north central UAE.",
            "categories": [],
            "headings": [
                {
                    "heading": "Buildings and structures",
                    "position": "4"
                },
                {
                    "heading": "City Planning",
                    "position": "9"
                },
                {
                    "heading": "Climate",
                    "position": "7"
                },
                {
                    "heading": "Culture and the Arts",
                    "position": "12"
                },
                {
                    "heading": "Current ruler",
                    "position": "5"
                },
                {
                    "heading": "External links",
                    "position": "15"
                },
                {
                    "heading": "Future Development",
                    "position": "11"
                },
                {
                    "heading": "History",
                    "position": "1"
                },
                {
                    "heading": "Language and literature",
                    "position": "3"
                },
                {
                    "heading": "Location",
                    "position": "2"
                },
                {
                    "heading": "Non-Government Organisations",
                    "position": "16"
                },
                {
                    "heading": "Planning Problems",
                    "position": "10"
                },
                {
                    "heading": "Postage stamps",
                    "position": "6"
                },
                {
                    "heading": "See also",
                    "position": "14"
                },
                {
                    "heading": "Transport",
                    "position": "8"
                },
                {
                    "heading": "Trivia",
                    "position": "13"
                }
            ],
            "links": [
                "http://en.wikipedia.org/wiki/3rd_millennium_BC",
                "http://en.wikipedia.org/wiki/Frank_Gehry",
                "http://en.wikipedia.org/wiki/Garfield",
                "http://en.wikipedia.org/wiki/Oman",
                "http://en.wikipedia.org/wiki/Persian_Gulf",
                "http://en.wikipedia.org/wiki/Philippines",
                "http://en.wikipedia.org/wiki/United_Arab_Emirates"
            ]
        },
            {
                "title": "An American in Paris",
                "url": "http://en.wikipedia.org/wiki/An_American_in_Paris",
                "abstract": "An American in Paris is a symphonic composition by American composer George Gershwin which debuted in 1928. Inspired by Gershwin's time in Paris, it is in the form of an extended tone poem evoking the sights and energy of the French capital in the 1920s.",
                "categories": [
                    "Symphonic poems"
                ],
                "headings": [
                    {
                        "heading": "Compositions by George Gershwin",
                        "position": "1"
                    },
                    {
                        "heading": "Symphonic poems",
                        "position": "2"
                    }
                ],
                "links": [
                    "http://en.wikipedia.org/wiki/1920s",
                    "http://en.wikipedia.org/wiki/Gene_Kelly"
                ]
            },
            {
                "title": "International Atomic Time",
                "url": "http://en.wikipedia.org/wiki/International_Atomic_Time",
                "abstract": "International Atomic Time (TAI, from the French name Temps Atomique International) is a high-precision atomic time standard that tracks proper time on Earth's geoid.  It is the principal realisation of Terrestrial Time, and the basis for Coordinated Universal Time which is used for civil timekeeping all over the Earth's surface.",
                "categories": [],
                "headings": [
                    {
                        "heading": "External links",
                        "position": "4"
                    },
                    {
                        "heading": "History",
                        "position": "2"
                    },
                    {
                        "heading": "Operation",
                        "position": "1"
                    },
                    {
                        "heading": "See also",
                        "position": "3"
                    }
                ],
                "links": [
                    "http://en.wikipedia.org/wiki/Earth",
                    "http://en.wikipedia.org/wiki/Gregorian_calendar"
                ]
            },
            {
                "title": "Alain Connes",
                "url": "http://en.wikipedia.org/wiki/Alain_Connes",
                "abstract": "Alain Connes (born April 1, 1947) is a French mathematician, currently Professor at the College de France (Paris, France), IHES (Bures-sur-Yvette, France) and Vanderbilt University (Nashville, Tennessee). He is a specialist in Von Neumann algebras and succeeded in classifying injective factors.",
                "categories": [
                    "1947 births",
                    "20th century mathematicians",
                    "21st century mathematicians",
                    "Alumni of the École Normale Supérieure",
                    "Differential geometers",
                    "French mathematicians",
                    "Living people",
                    "Mathematical analysts",
                    "Members and associates of the US National Academy of Sciences"
                ],
                "headings": [
                    {
                        "heading": "External links",
                        "position": "2"
                    },
                    {
                        "heading": "See also",
                        "position": "1"
                    }
                ],
                "links": [
                    "http://en.wikipedia.org/wiki/C%2A-algebra",
                    "http://en.wikipedia.org/wiki/Fields_Medal",
                    "http://en.wikipedia.org/wiki/Groupoid"
                ]
            },
            {
                "title": "Economy of Algeria",
                "url": "http://en.wikipedia.org/wiki/Economy_of_Algeria",
                "abstract": "In the economy of Algeria the hydrocarbons sector is the backbone, accounting for roughly 52% of budget revenues, 25% of GDP, and over 95% of export earnings. Algeria has the fifth-largest reserves of natural gas in the world and is the second largest gas exporter; it ranks fourteenth for oil reserves.",
                "categories": [
                    "African Union member economies",
                    "Algeria",
                    "Economies by country",
                    "Economy of Algeria",
                    "Organization of the Petroleum Exporting Countries",
                ],
                "headings": [
                    {
                        "heading": "Agriculture",
                        "position": "2"
                    },
                    {
                        "heading": "Exports",
                        "position": "7"
                    },
                    {
                        "heading": "Fishing",
                        "position": "4"
                    },
                    {
                        "heading": "Foreign trade",
                        "position": "6"
                    },
                    {
                        "heading": "Historical trend",
                        "position": "1"
                    },
                    {
                        "heading": "Minerals",
                        "position": "5"
                    },
                    {
                        "heading": "Reference",
                        "position": "9"
                    },
                    {
                        "heading": "Statistics",
                        "position": "8"
                    },
                    {
                        "heading": "Wine production",
                        "position": "3"
                    }
                ],
                "links": [
                    "http://en.wikipedia.org/wiki/1998",
                    "http://en.wikipedia.org/wiki/2001",
                    "http://en.wikipedia.org/wiki/Algeria",
                    "http://en.wikipedia.org/wiki/International_Monetary_Fund",
                    "http://en.wikipedia.org/wiki/Petroleum",
                    "http://en.wikipedia.org/wiki/Salt",
                    "http://en.wikipedia.org/wiki/Tunis",
                    "http://en.wikipedia.org/wiki/World_Trade_Organization"
                ]
            },
            {
                "title": "Alpha decay",
                "url": "http://en.wikipedia.org/wiki/Alpha_decay",
                "abstract": "Alpha decay is a form of radioactive decay in which an atomic nucleus ejects an alpha particle through the electromagnetic force and transforms into a nucleus with mass number 4 less and atomic number 2 less.",
                "categories": [],
                "headings": [
                    {
                        "heading": "Radioactivity",
                        "position": "1"
                    }
                ],
                "links": [
                    "http://en.wikipedia.org/wiki/Radon"
                ]
            },
            {
                "title": "Agricultural science",
                "url": "http://en.wikipedia.org/wiki/Agricultural_science",
                "abstract": "Agricultural science is a broad multidisciplinary field that encompasses the parts of exact, natural, economic, and social sciences that are used in the practice and understanding of agriculture. (Veterinary science, but not animal science, is often excluded from the definition.",
                "categories": [
                    "Agronomy",
  /* false cat DUPLICATE */                  "Austro-Asiatic languages",
                ],
                "headings": [
                    {
                        "heading": "Agricultural science and agriculture crisis",
                        "position": "5"
                    },
                    {
                        "heading": "Agricultural science: a local science",
                        "position": "2"
                    },
                    {
                        "heading": "Agriculture and agricultural science",
                        "position": "1"
                    },
                    {
                        "heading": "External links",
                        "position": "8"
                    },
                    {
                        "heading": "Fields or related disciplines",
                        "position": "6"
                    },
                    {
                        "heading": "History of agricultural science",
                        "position": "3"
                    },
                    {
                        "heading": "Prominent agricultural scientists",
                        "position": "4"
                    },
                    {
                        "heading": "See also",
                        "position": "7"
                    }
                ],
                "links": [
                    "http://en.wikipedia.org/wiki/Agricultural_engineering",
                    "http://en.wikipedia.org/wiki/Aquaculture",
                    "http://en.wikipedia.org/wiki/Environmental_science",
                    "http://en.wikipedia.org/wiki/George_Washington_Carver",
                    "http://en.wikipedia.org/wiki/Germany",
                    "http://en.wikipedia.org/wiki/Green_Revolution",
                    "http://en.wikipedia.org/wiki/Irrigation",
                    "http://en.wikipedia.org/wiki/Louis_Pasteur"
                ]
            },
            {
                "title": "Automatic Dependent Surveillance-Broadcast",
                "url": "http://en.wikipedia.org/wiki/Automatic_Dependent_Surveillance-Broadcast",
                "abstract": "Automatic Dependent Surveillance-Broadcast (also called ADS-B) is a system by which airplanes constantly broadcast their current position and altitude, category of aircraft, airspeed, identification, and whether the aircraft is turning, climbing or descending over a dedicated radio datalink. This functionality is known as &quot;ADS-B out&quot; and is the basic level of ADS-B functionality.",
                "categories": [],
                "headings": [
                    {
                        "heading": "ADS-B Physical Layer",
                        "position": "3"
                    },
                    {
                        "heading": "Addressed and Broadcast ADS",
                        "position": "2"
                    },
                    {
                        "heading": "External links",
                        "position": "13"
                    },
                    {
                        "heading": "Implementation Timetable",
                        "position": "7"
                    },
                    {
                        "heading": "Long-term Implementations (2012 and beyond)",
                        "position": "10"
                    },
                    {
                        "heading": "Mid-term Implementation (2008-2012)",
                        "position": "9"
                    },
                    {
                        "heading": "Mode S",
                        "position": "4"
                    },
                    {
                        "heading": "Near-term Implementation (2006-2008)",
                        "position": "8"
                    },
                    {
                        "heading": "References",
                        "position": "11"
                    },
                    {
                        "heading": "See also",
                        "position": "12"
                    },
                    {
                        "heading": "Universal Access Transceiver",
                        "position": "5"
                    },
                    {
                        "heading": "Usage",
                        "position": "1"
                    },
                    {
                        "heading": "VDL Mode 4",
                        "position": "6"
                    }
                ],
                "links": [
                    "http://en.wikipedia.org/wiki/Global_Positioning_System"
                ]
            },
            {
                "title": "Austro-Asiatic languages",
                "url": "http://en.wikipedia.org/wiki/Austro-Asiatic_languages",
                "abstract": "The Austro-Asiatic languages are a large language family of Southeast Asia, India and Bangladesh. The name comes from the Latin word for &quot;south&quot; and the Greek name of Asia, hence &quot;South Asia&quot;.",
                "categories": [
                    "Austro-Asiatic languages"
                ],
                "headings": [
                    {
                        "heading": "Classification",
                        "position": "1"
                    },
                    {
                        "heading": "External link",
                        "position": "6"
                    },
                    {
                        "heading": "Gérard Diffloth (1974)",
                        "position": "2"
                    },
                    {
                        "heading": "Gérard Diffloth (2005)",
                        "position": "4"
                    },
                    {
                        "heading": "Ilia Peiros (2004)",
                        "position": "3"
                    },
                    {
                        "heading": "References",
                        "position": "5"
                    }
                ],
                "links": [
                    "http://en.wikipedia.org/wiki/Austronesian_languages",
                    "http://en.wikipedia.org/wiki/Encyclop%C3%A6dia_Britannica",
                    "http://en.wikipedia.org/wiki/Ethnologue",
                    "http://en.wikipedia.org/wiki/Laos",
                    "http://en.wikipedia.org/wiki/Latin",
                    "http://en.wikipedia.org/wiki/Myanmar",
                    "http://en.wikipedia.org/wiki/South_Asia",
                    "http://en.wikipedia.org/wiki/Thailand",
                    "http://en.wikipedia.org/wiki/Vietnamese_language"
                ]
            }


        ];
        wiki.create(array, function (err) {
            done();
        });
    });
}

module.exports.insertWikis = insertWikis;