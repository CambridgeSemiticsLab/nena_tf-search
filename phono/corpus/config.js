const configData = {
 "memSavingMethod": 0,
 "mainConfig": {
  "description": {
   "simple": "<div id=\"title\">CambridgeSemiticsLab/nena_tf-phono search</div>",
   "full": "<details id=\"titledetails\">\n  <summary id=\"title\">CambridgeSemiticsLab/nena_tf-phono search</summary>\n  <div id=\"description\"></div>\n  <a\n     id=\"makerlink\" href=\"#\"\n     class=\"logo right\"\n  ><img alt=\"maker logo\" id=\"logo\" src=\"png/maker.png\"></a>\n  <a\n     id=\"tflink\" href=\"#\"\n     class=\"logo right\"\n  ><img alt=\"Text-Fabric logo\" id=\"logo\" src=\"png/tf.png\"></a>\n  <details>\n    <summary><i>open source</i></summary>\n    <div>\n      <p>You can\n      <a id=\"packagelink\" href=\"#\"></a>\n      this web page and use it offline\n      by unzipping and double clicking <i>phono-local.html</i>.\n      </p>\n      <p>This app is generated by <a id=\"generatorlink\" href=\"#\"></a>\n      based on a configuration in <a id=\"sourcelink\" href=\"#\"></a>.\n      </p>\n      <p>Written by: <a id=\"authorlink\" href=\"#\" ></a>.\n      <p>License: <a id=\"licenselink\" href=\"#\" ></a>\n      (you are free to use and modify the code).\n      </p>\n    </div>\n  </details>\n</details>"
  },
  "jobs": {
   "simple": "",
   "full": "<div id=\"jobs\">\n  <input\n    type=\"file\" name=\"imjname\" id=\"imjname\"\n    accept=\"application/json\"\n    class=\"import\"\n  >\n  <button\n    type=\"button\" class=\"medium active\" id=\"importj\"\n    title=\"import job from file\"\n  >↑</button>\n  <button\n    type=\"button\" class=\"medium active\" id=\"deletej\"\n    title=\"delete current job\"\n  >-</button>\n  <select class=\"selinp\" id=\"jchange\"></select>\n  <button\n    type=\"button\" class=\"medium active\" id=\"newj\"\n    title=\"fresh new job\"\n  >+</button>\n  <button\n    type=\"button\" class=\"medium active\" id=\"renamej\"\n    title=\"rename current job\"\n  >→</button>\n  <button\n    type=\"button\" class=\"medium active\" id=\"dupj\"\n    title=\"duplicate current job\"\n  >++</button>\n  <button\n    type=\"button\" class=\"medium active\" id=\"exportj\"\n    title=\"export job to file\"\n  >↓</button>\n</div>"
  },
  "provenance": {
   "simple": "<table>\n  <tbody>\n    <tr>\n      <td>help</td>\n      <td><a id=\"lsdocsimplelink\" href=\"#\"></a></td>\n    </tr>\n    <tr>\n      <td>data version</td>\n      <td><a id=\"datalink\" href=\"#\"></a> </td>\n    </tr>\n    <tr>\n      <td>app version</td>\n      <td><span id=\"appversion\"></span></td>\n    </tr>\n  </tbody>\n</table>",
   "full": "<table>\n  <tbody>\n    <tr>\n      <td>help</td>\n      <td><a id=\"lsdoclink\" href=\"#\"></a> ; <a id=\"cheatsheetlink\" href=\"#\"></a></td>\n    </tr>\n    <tr>\n      <td>writing</td>\n      <td><a id=\"writinglink\" href=\"#\"></a> </td>\n    </tr>\n    <tr>\n      <td>docs</td>\n      <td><a id=\"datadoclink\" href=\"#\"></a> </td>\n    </tr>\n    <tr>\n      <td>related</td>\n      <td><a id=\"relatedlink\" href=\"#\"></a> </td>\n    </tr>\n    <tr>\n      <td>data version</td>\n      <td><a id=\"datalink\" href=\"#\"></a> </td>\n    </tr>\n    <tr>\n      <td>app version</td>\n      <td><span id=\"appversion\"></span></td>\n    </tr>\n  </tbody>\n</table> <p><a id=\"issuelink\" href=\"#\" class=\"medium active\"></a>\n  please copy the version above this line\n</p>"
  }
 },
 "defs": {
  "lsVersion": "v089@2022-01-06T09:18:44",
  "client": "phono",
  "org": "CambridgeSemiticsLab",
  "repo": "nena_tf",
  "urls": {
   "cheatsheet": [
    "regexp cheatsheet",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet",
    "cheatsheet of regular expressions"
   ],
   "license": [
    "MIT",
    "https://mit-license.org",
    "website of MIT license"
   ],
   "maker": [
    null,
    "https://dans.knaw.nl/en/front-page?set_language=en",
    "Website of DANS = Data Archiving and Networked Services"
   ],
   "corpus": [
    null,
    "https://nena.ames.cam.ac.uk",
    "North-Eastern Neo-Aramaic Data Project website"
   ],
   "corpus2": [
    "North Eastern Neo Aramaic",
    "https://nena.ames.cam.ac.uk",
    "North-Eastern Neo-Aramaic Data Project website"
   ],
   "author": [
    "Dirk Roorda",
    "https://pure.knaw.nl/portal/en/persons/dirk-roorda",
    "profile of the author"
   ],
   "author1": [
    "Cody Kingham",
    "https://www.linkedin.com/in/cody-kingham-1135018a",
    "corpus developer"
   ],
   "author2": [
    "Geoffrey Khan",
    "https://www.ames.cam.ac.uk/people/professor-geoffrey-khan",
    "lead researcher"
   ],
   "tf": [
    null,
    "https://annotation.github.io/text-fabric/tf",
    "Text-Fabric documentation website"
   ],
   "lsdoc": [
    "user manual (full)",
    "https://annotation.github.io/text-fabric/tf/about/clientmanual.html",
    "user manual for the full search interface"
   ],
   "lsdocsimple": [
    "user manual (simple)",
    "https://annotation.github.io/text-fabric/tf/about/manual.html",
    "user manual for the simplified search interface"
   ],
   "datadoc": [
    "data (feature) documentation",
    "/CambridgeSemiticsLab/nena_tf/blob/master/docs/features.md",
    "explanation of the features in the dataset"
   ],
   "data": [
    "based on text-fabric data version alpha",
    "https://github.com/CambridgeSemiticsLab/nena_tf/tree/master/tf/alpha",
    "online repository of the underlying text-fabric data"
   ],
   "generator": [
    "text-fabric/client",
    "https://annotation.github.io/text-fabric/tf/client/make/build.html",
    "the generator of this search interface"
   ],
   "source": [
    "nena_tf-search",
    "https://github.com/CambridgeSemiticsLab/nena_tf-search/tree/master/layeredsearch",
    "source code of the definition of this search interface"
   ],
   "issue": [
    "Report an issue",
    "https://github.com/CambridgeSemiticsLab/nena_tf-search/issues",
    "report issues"
   ],
   "package": [
    "download",
    "../phono.zip",
    "zip file for offline use"
   ],
   "writing": [
    "neoaramaic",
    "https://annotation.github.io/text-fabric/tf/writing/neoaramaic.html",
    "characters and transliteration for neoaramaic"
   ],
   "related": [
    "text-fabric CambridgeSemiticsLab/nena_tf",
    "https://nbviewer.jupyter.org/github/CambridgeSemiticsLab/nena_tf/blob/master/tutorial/start.ipynb",
    "using Text-Fabric on the same corpus"
   ]
  },
  "description": "<p>Phonetic search interface for <a id=\"corpus2link\" href=\"#\"></a>.</p> <p>This search interface is by:</p> <ul>\n    <li><a id=\"author2link\" href=\"#\"></a> (lead researcher)\n    <li><a id=\"author1link\" href=\"#\"></a> (corpus developer)\n</ul>"
 },
 "ntypes": [
  "word",
  "sentence",
  "line",
  "text"
 ],
 "typesLower": {
  "word": [
   "word"
  ],
  "sentence": [
   "word",
   "sentence"
  ],
  "line": [
   "word",
   "sentence",
   "line"
  ],
  "text": [
   "word",
   "sentence",
   "line",
   "text"
  ]
 },
 "defaultSettings": {
  "autoexec": true,
  "nodeseq": true,
  "exporthl": true,
  "exportsr": true,
  "multihl": true,
  "simple": false
 },
 "defaultFlags": {
  "i": true,
  "m": true,
  "s": false
 },
 "keyboard": {
  "š": ">s",
  "č̣": ">c.",
  "k̭": "k<",
  "ʿ": "(",
  "ʾ": ")",
  "č̭": ">c<",
  "ṱ": "t<",
  "ŭ": "u<",
  "ɛ": "3",
  "ɟ": "4",
  "č": ">c",
  "ð": "6",
  "ð̣": "^",
  "ž": ">z",
  "θ": "8",
  "ə": "9",
  "ă": "a>",
  "ā": "a-",
  "ḍ": "d.",
  "ē": "e-",
  "ġ": "g.",
  "ḥ": "h.",
  "ī": "i-",
  "ḷ": "l.",
  "ṃ": "m.",
  "ō": "o-",
  "p̣": "p.",
  "ṛ": "r.",
  "ṣ": "s.",
  "ṭ": "t",
  "ū": "u-",
  "ẓ": "z.",
  "á": "a'",
  "ɑ": "a",
  "ā́": "a-'",
  "ā̀": "a-`",
  "ắ": "a>'",
  "ằ": "a>`",
  "à": "a`",
  "c̭": "c<",
  "ı": "i~",
  "ĭ": "i>",
  "p̌": "p<",
  "p̭": "p<"
 },
 "focusType": "sentence",
 "ntypesinit": {
  "word": 713434,
  "sentence": 578719,
  "line": 575825,
  "text": 713308
 },
 "ntypessize": {
  "word": 120151,
  "sentence": 16326,
  "line": 2544,
  "text": 126
 },
 "dtypeOf": {
  "sentence": "word",
  "line": "sentence",
  "text": "line"
 },
 "utypeOf": {
  "word": "sentence",
  "sentence": "line",
  "line": "text"
 },
 "visible": {
  "word": {
   "text": true,
   "full": false,
   "fuzzy": true,
   "lite": false,
   "cls": false,
   "voice": false,
   "place": false,
   "manner": false,
   "pos": false,
   "lang": false,
   "speaker": false
  },
  "line": {
   "number": false
  },
  "text": {
   "title": false,
   "tid": false,
   "dialect": false,
   "place": false
  }
 },
 "levels": {
  "word": "Some words are affixed to others without intervening space.",
  "sentence": "Sentences are delimited by full stops.",
  "line": "Lines are really paragraphs.",
  "text": "Texts are stories, having some metadata, consisting of lines."
 },
 "layers": {
  "word": {
   "text": {
    "valueMap": null,
    "tip": false,
    "pos": "text",
    "pattern": "",
    "description": "text precise, complete, uses non-ascii"
   },
   "full": {
    "valueMap": null,
    "tip": false,
    "pos": "full",
    "pattern": "",
    "description": "text representation"
   },
   "fuzzy": {
    "valueMap": null,
    "tip": false,
    "pos": "fuzzy",
    "pattern": "mute",
    "description": "text representation"
   },
   "lite": {
    "valueMap": null,
    "tip": false,
    "pos": "lite",
    "pattern": "",
    "description": "text representation"
   },
   "cls": {
    "valueMap": {
     "V": "vowel",
     "C": "consonant",
     "z": ""
    },
    "tip": false,
    "pos": "cls",
    "pattern": "",
    "description": "phonetic class"
   },
   "voice": {
    "valueMap": {
     "P": "plain",
     "H": "unvoiced_aspirated",
     "V": "voiced",
     "F": "unvoiced",
     "G": "unvoiced_unaspirated",
     "X": "emphatic",
     "z": ""
    },
    "tip": false,
    "pos": "cls",
    "pattern": "",
    "description": "phonation"
   },
   "place": {
    "valueMap": {
     "D": "dental-alveolar",
     "B": "labial",
     "C": "palatal-alveolar",
     "J": "palatal",
     "G": "velar",
     "X": "uvular",
     "Q": "pharyngeal",
     "H": "laryngeal",
     "z": ""
    },
    "tip": false,
    "pos": "cls",
    "pattern": "",
    "description": "phonetic place"
   },
   "manner": {
    "valueMap": {
     "A": "affricative",
     "N": "nasal",
     "X": "other",
     "F": "fricative",
     "L": "lateral",
     "S": "sibilant",
     "z": ""
    },
    "tip": false,
    "pos": "cls",
    "pattern": "",
    "description": "phonetic manner"
   },
   "pos": {
    "valueMap": {
     "n": "NOUN",
     "pt": "PART",
     "pn": "PRON",
     "nr": "NUMR",
     "aj": "ADJV",
     "ab": "ADVB",
     "m": "MODI",
     "i": "INTJ",
     "pp": "PREP",
     "v": "VERB",
     "n_pt": "NOUN|PART",
     "n_n": "NOUN|NOUN",
     "pn_pt": "PRON|PART",
     "pt_pn": "PART|PRON",
     "m_n": "MODI|NOUN",
     "m_pn": "MODI|PRON",
     "pt_n": "PART|NOUN",
     "ab_n": "ADVB|NOUN",
     "n_ab": "NOUN|ADVB",
     "n_aj": "NOUN|ADJV",
     "aj_aj": "ADJV|ADJV",
     "aj_n": "ADJV|NOUN",
     "nr_nr": "NUMR|NUMR",
     "aj_ab": "ADJV|ADVB",
     "n_intj": "NOUN|INTJ",
     "n_n_n": "NOUN|NOUN|NOUN",
     "pt_pt_pt": "PART|PART|PART",
     "aj_n_n": "ADJV|NOUN|NOUN",
     "aj_n_n_n": "ADJV|NOUN|NOUN|NOUN",
     "n_n_n_n": "NOUN|NOUN|NOUN|NOUN",
     "z": ""
    },
    "tip": false,
    "pos": "pos",
    "pattern": "",
    "description": "part-of-speech"
   },
   "lang": {
    "valueMap": {
     "1": "NENA",
     "2": "K.",
     "3": "A.",
     "4": "K./A.",
     "5": "A.|A.|K.",
     "6": "A.|K.",
     "7": "K./T.",
     "8": "K.|K.",
     "9": "K.|K.|K.",
     "10": "A.|A.",
     "11": "Urm.",
     "12": "E.",
     "13": "K./A./E.",
     "14": "P.",
     "15": "A./K.",
     "16": "K./A.|K./A.",
     "17": "T.",
     "18": "Ṭiy.",
     "19": "A./E.",
     "20": "K./E.",
     "21": "K./T.|K./T.",
     "0": ""
    },
    "tip": true,
    "pos": "lang",
    "pattern": "",
    "description": "language, indicated by a number"
   },
   "speaker": {
    "valueMap": {
     "1": "Dawið ʾAdam",
     "2": "Yulia Davudi",
     "3": "Yuwarəš Xošăba Kena",
     "4": "Manya Givoyev",
     "5": "Yuwəl Yuḥanna",
     "6": "Nanəs Bənyamən",
     "7": "Yosəp bet Yosəp",
     "8": "Yonan Petrus",
     "9": "Natan Khoshaba",
     "10": "Arsen Mikhaylov",
     "11": "Xošebo ʾOdišo",
     "12": "Nancy George",
     "13": "Awiko Sulaqa",
     "14": "Maryam Gwirgis",
     "15": "Alice Bet-Yosəp",
     "16": "Bənyamən Bənyamən",
     "17": "MB",
     "18": "Mišayel Barčəm",
     "19": "Nadia Aloverdova",
     "20": "Frederic Ayyubkhan",
     "21": "Victor Orshan",
     "22": "Merab Badalov",
     "23": "Sophia Danielova",
     "24": "Blandina Barwari",
     "25": "YD",
     "26": "Dawið Gwərgəs",
     "27": "Gwərgəs Dawið",
     "28": "AB",
     "29": "Jacob Petrus",
     "30": "Dawid Adam",
     "31": "NK",
     "32": "YP",
     "33": "JP",
     "34": "Kena Kena",
     "35": "Nawiya ʾOdišo",
     "36": "GK",
     "37": "Leya ʾOraha",
     "0": ""
    },
    "tip": true,
    "pos": "speaker",
    "pattern": "",
    "description": "speaker, indicated by a number"
   }
  },
  "line": {
   "number": {
    "valueMap": null,
    "tip": false,
    "pos": "number",
    "pattern": "",
    "description": "line number"
   }
  },
  "text": {
   "title": {
    "valueMap": null,
    "tip": false,
    "pos": "title",
    "pattern": "A",
    "description": "title of a text"
   },
   "tid": {
    "valueMap": null,
    "tip": false,
    "pos": "tid",
    "pattern": "",
    "description": "id of a text"
   },
   "dialect": {
    "valueMap": null,
    "tip": false,
    "pos": "dialect",
    "pattern": "",
    "description": "dialect of a text <code>Barwar Urmi_C</code>"
   },
   "place": {
    "valueMap": null,
    "tip": false,
    "pos": "place",
    "pattern": "Dure",
    "description": "place of a text"
   }
  }
 }
}